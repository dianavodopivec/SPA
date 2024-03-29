export function Loader() {
    const $loader = document.createElement("img");
    $loader.src = "/app/assets/ripples.svg";
    $loader.alt = "Cargando...";
    $loader.classList.add("cargador");

    return $loader
}