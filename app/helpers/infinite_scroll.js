import api from "./wp_api.js"
import {ajax} from "./ajax.js";
import {PostCard} from "../components/PostCard.js";
import {SearchCard} from "../components/SearchCard.js";

export async function InfiniteScroll() {
    let query = localStorage.getItem("wpSearch");
    let apiURl, Component; // HOC

    window.addEventListener("scroll", async e => {
        let {scrollTop, clientHeight, scrollHeight} = document.documentElement;
        let {hash} = window.location;

        if (scrollTop + clientHeight >= scrollHeight) {
            api.page++;
            
            if (hash || hash === "#/") {
                apiURl = `${api.POST}&page=${api.page}`;
                Component = PostCard;
            } else if (hash.includes("#/search")) {
                apiURl = `${api.SEARCH}${query}&page=${api.page}`;
                Component = SearchCard;
            } else {
                return false;
            }

            document.querySelector(".cargador").style.display = "block";

            await ajax({
                url: apiURl,
                cbSuccess: (posts) => {
                    document.querySelector(".cargador").style.display = "none";
                    posts.forEach(post => {
                        const html = Component(post);
                        document.getElementById("main").insertAdjacentHTML("beforeend", html);
                    });
                }
            });
        }
    });
}


