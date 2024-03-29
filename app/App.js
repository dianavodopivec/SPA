import api from "./helpers/wp_api.js"
import {ajax} from "./helpers/ajax.js";

export function App() {
    document.getElementById("root").innerHTML = `<h1>Hola</h1>`

    console.log(api)

    //Ultimos post
    ajax({
        url: api.POST,
        cbSuccess: (posts) => {
            console.log(posts)
        }
    })

    //Categorias

    ajax({
        url: api.CATEGORIES,
        cbSuccess: categories => console.log(categories)
    })
}

