export function SearchForm() {
    const $form = document.createElement("form");
    const $input = document.createElement("input");
    $form.classList.add("form-search");
    $input.name = "search"
    $input.type = "search"
    $input.placeholder = "Buscar ..."
    $input.autocomplete = "off"

    $form.appendChild($input);

    if(location.hash.includes("#/search")) {
        $input.value = localStorage.getItem("wpSearch")
    }

    //Limpiar localStorage
    document.addEventListener("search", e => {
        if(!e.target.matches("input[type='search']")) {
            return false
        } 
        if(!e.target.value) {
            localStorage.removeItem("wpSearch")
        }
    })

    document.addEventListener("submit", e => {
        if(!e.target.matches(".form-search")) {
            //En caso de no haber coincidencia con "search-form", se pasará a ...
            return false
        } else {
            e.preventDefault();
            localStorage.setItem("wpSearch", e.target.search.value);
            //Cambio de HASH para que detecte un cambio en la app.
            location.hash = `#/search?search=${e.target.search.value}`;
        }
    })

    return $form;
}