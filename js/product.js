const products = [{id: 1, title: "Baby Yoda", content: "Фигурка малыша Йоды", price: 3999, img: "./images/BY.webp", hight: "160 мм" , weight: "1 кг", material: "ПВХ",  producer: "Николай Загородних"},
                  {id: 2, title: "Книга классная, поучительная", content: "Реально поучительная", price: 100, img: "./images/Book.webp", hight: "160 мм" , weight: "1 кг", material: "Резина",  producer: "FuRyu"},
                  {id: 3, title: "Чай", content: "Вкусный чай от Жириновского", price: 235, img: "./images/tea.webp", hight: "50 мм" , weight: "0.2 кг", material: "Суперские чайные листья, отвечаю",  producer: "Alter"},
                  {id: 4, title: "Уилл", content: 'Мини-фигурка Уилла из игры "Baldur`s Gate 3"', price: 1789, img: "./images/BG3.webp", hight: "100 мм" , weight: "0.5 кг", material: "АБС-пластик",  producer: "Good Smile Company"},
                  {id: 5, title: "Teto", content: "Лучший повар, сделает вам самый вкусный французский багет", price: 6700, img: "./images/Banner.webp", hight: "140 мм" , weight: "0.4 кг", material: "АБС, ПВХ",  producer: "FuRyu"},
                  {id: 6, title: "Багет из Франции", content: "Немного чёрствый, но всё же из Франции", price: 500, img: "./images/France.webp", hight: "300 мм" , weight: "0.8 кг", material: "Пшеница высшего сорта",  producer: "Apex"}
]

const params = new URLSearchParams(window.location.search);
const productID = Number(params.get("id"));
const product = products.find(id => id.id === productID);

const card = document.createElement("section");
card.classList.add("card", "mb-4", "shadow-sm", "container");

const row = document.createElement("div");
row.classList.add("row", "g-0");

const imgCol = document.createElement("div");
imgCol.classList.add("col-12", "col-md-6", "col-lg-8", "d-flex", "align-items-center", "justify-content-center", "p-3");

const bodyCol = document.createElement("div");
bodyCol.classList.add("card-body", "d-flex", "flex-column", "h-100", "col-12", "col-md-6", "col-lg-4");


const title = document.createElement("h1");
title.textContent = product.title;
title.classList.add("card-title", "display-5", "fw-bold");

const img = document.createElement("img");
img.src = product.img;
img.alt = product.title;
img.classList.add("img-fluid", "placeholder-box");

const content = document.createElement("p");
content.textContent = product.content;
content.classList.add("card-text", "text-muted");

const price = document.createElement("p");
price.textContent = "Цена: " + product.price + "руб.";
price.classList.add("fw-bold", "fs-5", "mt-auto");

const dopColTitle = document.createElement("h2");
dopColTitle.textContent = "Характеристики";
dopColTitle.classList.add("mt-3", "mb-2");

const hight = document.createElement("p");
hight.textContent = "Высота: " + product.hight;
hight.classList.add("small", "mb-1");

const weight = document.createElement("p");
weight.textContent = "Масса: " + product.weight;
weight.classList.add("small", "mb-1");

const material = document.createElement("p");
material.textContent = "Материал: " + product.material;
material.classList.add("small", "mb-1");

const producer = document.createElement("p");
producer.textContent = "Изготовитель: " + product.producer;
producer.classList.add("small", "mb-1");

const button = document.createElement("button");
button.textContent = "Купить";
button.classList.add("btn", "btn-primary", "align-self-start");
button.dataset.product = product.id;
button.type = "button";

imgCol.append(img);
bodyCol.append(title, content, dopColTitle, hight, weight, material, producer, price, button);
row.append(imgCol, bodyCol);
card.append(row);

const modalElement = document.getElementById('orderModal');
const orderModal = new bootstrap.Modal(modalElement);

button.addEventListener('click', function() {
    orderModal.show();
});

const point = document.querySelector("#card-all-list");
point.append(card);