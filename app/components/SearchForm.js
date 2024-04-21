export function SearchForm() {
    const $form = document.createElement("form");
    const $input = document.createElement("input");
    $form.classList.add("form-search");
    $input.name = "search"
    $input.type = "search"
    $input.placeholder = "Buscar ..."

    $form.appendChild($input)

    document.addEventListener("submit", e => {
        if(!e.target(".search-form")) {
            return false
        } else {
            e.preventDefault();
            localStorage.setItem("wpSearch", e.target.search.value);
            location.hash = `#/search?search=${e.target.search.value}`;
        }
    })

    return $form;
}