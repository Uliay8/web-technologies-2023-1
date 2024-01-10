if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init)
} else {
    init()
}

function init() {
    const data = [
        {
            name: 'Каталог товаров',
            hasChildren: true,
            items: [
                {
                    name: 'Мойки',
                    hasChildren: true,
                    items: [
                        {
                            name: 'Ulgran',
                            hasChildren: true,
                            items: [
                                {
                                    name: 'Smth',
                                    hasChildren: false,
                                    items: []
                                },
                                {
                                    name: 'Smth',
                                    hasChildren: false,
                                    items: []
                                }
                            ]
                        },
                        {
                            name: 'Virgo Mramor',
                            hasChildren: false,
                            items: []
                        },
                        {
                            name: 'Handmade',
                            hasChildren: true,
                            items: [
                                {
                                    name: 'Smth',
                                    hasChildren: false,
                                    items: []
                                },
                                {
                                    name: 'Smth',
                                    hasChildren: false,
                                    items: []
                                }
                            ]
                        },
                        {
                            name: 'Virgo Glass',
                            hasChildren: false,
                            items: []
                        }
                    ]
                },
                {
                    name: 'Фильтры',
                    hasChildren: true,
                    items: [
                        {
                            name: 'Ulgran',
                            hasChildren: true,
                            items: [
                                {
                                    name: 'Smth',
                                    hasChildren: false,
                                    items: []
                                },
                                {
                                    name: 'Smth',
                                    hasChildren: false,
                                    items: []
                                }
                            ]
                        },
                        {
                            name: 'Virgo Mramor',
                            hasChildren: false,
                            items: []
                        }
                    ]
                }
            ]
        }
    ];

    const items = new ListItems(document.getElementById('list_items'), data)

    items.render();

    function ListItems(elem, data) {
        this.elem = elem;
        this.data = data;

        this.render = function () {
            this.renderParent(this.data, this.elem);
        }

        this.renderParent = function(data, el) {
            //проверка всех элементов на hasChildren
            //если hasChildren, то запускаем renderParent
            //если !hasChildren, то запускаем renderChildren
            //возвращает рендер родительского элемента
            if (data.length > 0) {
                data.forEach((item_data) => {
                    const root = document.createElement("div");
                    root.classList.add("list-item", "list-item_open");

                    const title = document.createElement("div");
                    const imgArrow = document.createElement("img");
                    const imgFolder = document.createElement("img");
                    const spanTitle = document.createElement("span");
                    title.classList.add("title", "title_open");
                    imgArrow.classList.add("title-img", "title-img-arrow");
                    imgArrow.src = "img/chevron-down.png";
                    imgFolder.classList.add("title-img", "title-img-folder");
                    imgFolder.src = "img/folder.png";
                    spanTitle.innerText = item_data.name;
                    title.appendChild(imgArrow);
                    title.appendChild(imgFolder);
                    title.appendChild(spanTitle);

                    root.appendChild(title);

                    if (item_data.hasChildren) {
                        title.addEventListener("click", () =>
                            root.classList.toggle("list-item_open")
                        );
                        const childEl = document.createElement("div");
                        childEl.classList.add("list-items");
                        this.renderParent(item_data.items, childEl);
                        root.appendChild(childEl);
                    } else {
                        imgArrow.style.visibility = "hidden";
                    }

                    el.appendChild(root);

                });
            }
        };
    }
}