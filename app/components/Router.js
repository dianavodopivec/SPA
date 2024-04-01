//Invocación de peticiones dependiendo de la sección de contenido que necesitemos.
import api from "../helpers/wp_api.js"
import {ajax} from "../helpers/ajax.js";
import {PostCard} from "./PostCard.js";

//Router -> Invoca las peticiones.
export function Router() {
    let {hash} = location;
    const $posts = document.getElementById("posts")
    console.log(hash)

    $posts.innerHTML = null //Igualamos el HTML a null para que la carga de su contenido cargue limpiamente ()

    //Si el hash no existe o #/ tampoco, se hará referencia a la Home.
    if(!hash || hash === "#/") {
        ajax({
            url: api.POST,
            cbSuccess: (posts) => {
                //console.log(posts)
                let html = "" //Inicialización vacía
                posts.forEach(post => {
                    html += PostCard(post) //Almacenamiento del código HTML de cada POST para formar la estructura de la postcard.
                    const cargador = document.querySelector(".cargador");
                    cargador.style.display = "none"
                    $posts.innerHTML = html;
                })
            }
        })        //Si encuentra el fragmento entre (), validará a true y en caso contrario false.
    } else if (hash.includes("#/search")) { 
        $posts.innerHTML = "<h2> Sección de Buscador </h2>"
    } else if (hash === "#/contacto") { 
        $posts.innerHTML = "<h2> Sección de Contacto </h2>"
    } else {
        $posts.innerHTML = "<h2> Carga del contenido del Post previamente seleccionado </h2>"
    }
}