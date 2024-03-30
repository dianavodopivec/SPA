export function ajax (params) {
    const {url, cbSuccess} = params;
    fetch(url)
    .then(res => res.ok ? res.json() : Promise.reject(res)) //Si la promesa NO se cumple.
    .then(json => cbSuccess(json)) //Si la promesa SI se cumple.
    .catch(error => { //Manejo de errores
        const mensaje = error.satusText || "Ocurrió un error al acceder a la API ☹️"
        document.getElementById("root").innerHTML = `<div>
        <p>Error ${error.status}: ${mensaje}</p>
        </div>`

        console.error(error)
    })
}