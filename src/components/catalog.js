export class Catalog {
    #el = null
    #paginationEl = null
    #itemsEl = null
    #page = null
    #total = null
    #renderItem = null
    #getItems = null

    constructor(el, options) {
        const { renderItem, getItems } = options
        this.#el = el
        this.#page = this.getPage()
        this.#paginationEl = el.querySelector('[data-catalog-pagination]')
        this.#itemsEl = el.querySelector('[data-catalog-items]')
        this.#renderItem = renderItem
        this.#getItems = getItems
    }

    get limit () {
        return 12;
    }

    get pageCount () {
        return Math.ceil(this.#total / this.limit)
    }

    init () {
        window.onpopstate = () => {
            const url = new URL(window.location.href);
            const page = +url.searchParams.get('page');

            if (page !== this.#page) {
                this.setPage(page);
                this.loadItems()
            }
        }
        window.onpopstate = handleLocation;

        this.#paginationEl.addEventListener('click', (event) => {
            const item = event.target.dataset.catalogPaginationPage ? event.target : event.target.closest('[data-catalog-pagination-page]')

            if (!item) {
                return;
            }

            const page = +item.dataset.catalogPaginationPage

            this.setPage(page);
            this.pushState();
            this.loadItems()
        })

        this.loadItems();
        //handleLocation();
    }

    getPage () {
        const url = new URL(window.location.href);
        const page = +url.searchParams.get('page');

        return page || 1;
    }

    setPage (page) {
        this.#page = page
    }

    pushState () {
        const url = new URL(window.location.href);
        url.searchParams.set('page', this.#page);

        window.history.pushState({}, '', url)
    }

    async loadItems () {
        try {
            const response =
                await this.#getItems({ limit: this.limit, page: this.#page });
            this.#total = response.total;
            this.renderItems(response.items);
            this.renderPagination();
        } catch (error) {
            console.log(error);
        }
    }

    renderItems (items) {
        this.#itemsEl.innerHTML = items.map(this.#renderItem).join('')
    }

    renderPagination () {
        let html = ''

        for (let index = 0; index < this.pageCount; index++) {
            const page = index + 1;

            const classes = ['catalog__pagination-item']

            if (page === this.#page) {
                classes.push('catalog__pagination-item_active')
            }

            html += `
                <button
                    class="${classes.join(' ')}"
                    data-catalog-pagination-page="${page}"
                >
                    ${page}
                </button>
            `
        }

        this.#paginationEl.innerHTML = html
    }
}

// const  route = (event) => {
//     event = event || window.event;
//     event.preventDefault();
//     window.history.pushState({}, "", event.target.href);
//     handleLocation();
// }
//window.route = route;
const routes = {
    404: "/404.html",
    "/posts?id=2": "/posts.html?id=2",
}
const handleLocation = async () => {
    // const path = window.location.pathname;
    // const route = routes[path] || routes[404];
    // const html = await fetch(route).then((data) => data.text());
    // document.getElementById("catalog").innerHTML = html;
}
