import { Catalog } from "./src/components/catalog.js"

// export const generateURLRoute = (postId) => {
//     let newHref = `/posts?id=${postId}`
//     window.history.pushState({}, "", newHref);
// }
// const id = generateURLRoute(item.id);
const renderPostItem = (item) =>
    `
    <div class="post-item">
    <a href = "posts?id=${item.id}">
        <span class="post-item__title">
            ${item.title}
        </span>

        <span class="post-item__body">
            ${item.body}
        </span><br><br>
    </a></div>
`
//"posts?id=${item.id}"
const  getPostItems = async ({ limit, page }) => {
    try {//отправляем запрос
        const response =
            await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`);
        const total = +response.headers.get('x-total-count')
        const items = await response.json()
        return { items, total } //получаем посты и их количество
    } catch (e) {
        console.error(e)
    }
}

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

const getPhotoItems = async({ limit, page }) => {
    try {
        const response =
            await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=${limit}&_page=${page}`);
        const total = +response.headers.get('x-total-count')
        const items = await response.json()
        return { items, total }
    } catch (e) {
        console.error(e)
    }
}

const init = () => {
    const catalog = document.getElementById('catalog')
    new Catalog(catalog, { 
        renderItem: renderPostItem, //функция отображающая пост
        getItems: getPostItems
     }).init()
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init)
} else {
    init()
}
