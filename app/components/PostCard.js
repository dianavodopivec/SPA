export function PostCard(props) {
    let {date, slug, title, featured_media_src_url} = props
    let dateFormat = new Date(date).toLocaleString();
     const noImg = featured_media_src_url["wp:featuredmedia"] ? featured_media_src_url["wp:featuredmedia"][0].source_url : "app/assets/luna.png"
    return `
    <article class="post-card">
    <img src="${featured_media_src_url}" alt="${title.rendered}">
    <h2>${title.rendered}</h2>
    <p>
    <time datetime="${date}">${dateFormat}</time>
    <a class="article-a" href="#/${slug}">Ver publicación</a>
    </p>
    </article>
    `;
}
