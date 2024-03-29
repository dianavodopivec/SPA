import api from "./helpers/wp_api.js"
import {ajax} from "./helpers/ajax.js";
import {Title} from "./components/title.js";
import {Loader} from "./components/Loader.js";

export function App() {
    const $root = document.getElementById("root");
    $root.appendChild(Title());
    $root.appendChild(Loader());
}

