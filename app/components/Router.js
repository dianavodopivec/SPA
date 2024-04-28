//Invocación de peticiones dependiendo de la sección de contenido que necesitemos.
import api from "../helpers/wp_api.js"
import {ajax} from "../helpers/ajax.js";
import {PostCard} from "./PostCard.js";
import { Post } from "./Post.js";
import { SearchCard } from "./SearchCard.js";

//Router -> Invoca las peticiones.
export async function Router() {
    let {hash} = location;
    const $main = document.getElementById("main")
    //console.log(hash)

    $main.innerHTML = null //Igualamos el HTML a null para que la carga de su contenido cargue limpiamente ()

    //Si el hash no existe o #/ tampoco, se hará referencia a la Home.
    if(!hash || hash === "#/") {
        await ajax({
            url: api.POST,
            cbSuccess: (posts) => {
                //console.log(posts)
                let html = "" //Inicialización vacía
                posts.forEach(post => {
                    html += PostCard(post) //Almacenamiento del código HTML de cada POST para formar la estructura de la postcard.
                    $main.innerHTML = html;
                })
            }
        })
    //Si encuentra el fragmento entre (), validará a true y en caso contrario false.
    } else if (hash.includes("#/search")) { //SEARCH
        let query = localStorage.getItem("wpSearch");
        if(!query) {
            document.querySelector(".cargador").style.display = "none"
            return false //Salida de opciones del Router 
        } else {
            await ajax({
                //Concatenación con variable query (palabra que seleccionó el usuario)
                url: `${api.SEARCH}${query}`,
                cbSuccess: (search) => {
                    //console.log(search)
                    let html = ""
                    //Si no hay resultados de busqueda:
                    if(search.length === 0) {
                        html = `
                        <p class="error">
                        No existen resultados de búsqueda para el término
                        <mark>${query}</mark>
                        </p>
                        `
                        $main.innerHTML = html;
                    } else {
                        search.forEach(post => 
                            {
                                html += SearchCard(post)
                            })
                        $main.innerHTML = html; 
                    }
                }
            })
        }

    } else if (hash === "#/contacto") { 
        $main.innerHTML = "<h2> Sección de Contacto </h2>"
    } else { //POST
        await ajax({
            //Construcción dinámica del endpoint/Id del post al que queremos acceder.
            url: `${api.POST}/${localStorage.getItem("wpPostId")}`, 
            cbSuccess: (post) => {
                $main.innerHTML = Post(post)
            }
        })
    }

    //Loader desaparece en las distintas páginas
    const cargador = document.querySelector(".cargador");
    cargador.style.display = "none"
}