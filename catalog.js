import { Catalog } from "./src/components/catalog.js"

const renderPostItem = item => `
    <a  
        href="posts.html?id=${item.id}"
        class="post-item"
        style="text-decoration: none;
        color: black;"
    >
        <span class="post-item__title"
        style="font-size: 25px;
        font-weight: 600;">
            ${item.title}
        </span><br>

        <span class="post-item__body">
            ${item.body}
        </span><br><br><hr>
    </a>
`

const getPostItems = async ({ limit, page }) => {
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`);
        const total = +res.headers.get('x-total-count');
        const items = await res.json();
        return { items, total }
    }
    catch(err) {
        console.log(err);
    }
};

const renderPhotoItem = item => `
    <a  
        href="photos/${item.id}"
        class="photo-item"
    >
        <span class="photo-item__title">
            ${item.title}
        </span>

        <img 
            src=${item.url}
            class="photo-item__image"
        >
    </a>
`

const getPhotoItems = async ({ limit, page }) => {
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=${limit}&_page=${page}`);
        const total = +res.headers.get('x-total-count');
        const items = await res.json();
        return { items, total }
    }
    catch(err) {
        console.log(err);
    }
}

const init = () => {
    const catalog = document.getElementById('catalog')
    new Catalog(catalog, {
        renderItem: renderPostItem,
        getItems: getPostItems
    }).init()
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init)
} else {
    init()
}