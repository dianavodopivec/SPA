import api from "./helpers/wp_api.js"
import {ajax} from "./helpers/ajax.js";
import {Header} from "./components/Header.js";
import { Posts } from "./components/Posts.js";
import {Loader} from "./components/Loader.js";
import { PostCard } from "./components/PostCard.js";

export function App() {
    const $root = document.getElementById("root");
    $root.appendChild(Header());
    $root.appendChild(Posts());
    $root.appendChild(Loader());

    ajax({
        url: api.POST,
        cbSuccess: (posts) => {
            console.log(posts)
            let html = "" //Inicialización vacía
            posts.forEach(post => {
                html += PostCard(post) //Almacenamiento del código HTML de cada POST para formar la estructura de la postcard.
                const cargador = document.querySelector(".cargador");
                cargador.style.display = "none"
                document.getElementById("posts").innerHTML = html;
            })
        }
    })
}

