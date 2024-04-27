export function PostCard(props) {
    //console.log(props)
    let {date, id, slug, title, jetpack_featured_media_url} = props
    let dateFormat = new Date(date).toLocaleString();
    const noImg = jetpack_featured_media_url && jetpack_featured_media_url["wp:featuredmedia"] && featured_media_src_url["wp:featuredmedia"][0] ? featured_media_src_url["wp:featuredmedia"][0].source_url : "app/assets/luna.png";
    
    //Evento click para enlace postcard.
    document.addEventListener("click", e => {
        if(!e.target.matches(".post-card a")) {
            return false
        } else {
            localStorage.setItem("wpPostId", e.target.dataset.id)
        }
    })
    
    return `
    <article class="post-card">
    <img src="${jetpack_featured_media_url}" alt="${title.rendered}">
    <h2>${title.rendered}</h2>
    <p>
    <time datetime="${date}">${dateFormat}</time>
    <a class="article-a" href="#/${slug}" data-id="${id}">Ver publicación</a>
    </p>
    </article>
    `;
}

