import api from "./helpers/wp_api.js"
import {ajax} from "./helpers/ajax.js";
import {Header} from "./components/Header.js";
import {Loader} from "./components/Loader.js";

export function App() {
    const $root = document.getElementById("root");
    $root.appendChild(Header());
    $root.appendChild(Loader());
}

