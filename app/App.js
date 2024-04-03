import {Header} from "./components/Header.js";
import {Main} from "./components/Main.js";
import {Loader} from "./components/Loader.js";
import {Router} from "./components/Router.js";

//Renderizado de Header, Post y Loader.
export function App() {
    const $root = document.getElementById("root");

    //Limpiar contenido para que carguen nuevas páginas.
    $root.innerHTML = null
    $root.appendChild(Header());
    $root.appendChild(Main());
    $root.appendChild(Loader());

    Router()
}

