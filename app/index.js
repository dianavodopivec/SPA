import api from "./helpers/wp_api.js"
import {App} from "./App.js";

document.addEventListener("DOMContentLoaded", App);
//Cada vez que se detecte un cambio en el hash, se ejecutará el componente app y el valor de api.page volverá a 1
window.addEventListener("hashchange", () => {
    api.page = 1
    App()
})