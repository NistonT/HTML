document.querySelector(".burger").addEventListener("click", () => {
	if (document.querySelector(".modal").style.display === "block") {
		document.querySelector(".modal").style.display = "none";
		document.querySelector(".burger").style.right = "0px";
	} else {
		document.querySelector(".modal").style.display = "block";
		document.querySelector(".burger").style.right = "60px";
	}
});

const arrayList = [
	{
		id: 1,
		title: "Ноутбук Lenovo IdeaPad 5",
		category: "Электроника",
		price: 65000,
		rating: 4.6,
	},
	{
		id: 2,
		title: "Смартфон Samsung Galaxy S23",
		category: "Электроника",
		price: 95000,
		rating: 4.8,
	},
	{
		id: 3,
		title: "Наушники Sony WH-1000XM5",
		category: "Аудио",
		price: 32000,
		rating: 4.9,
	},
	{
		id: 4,
		title: "Телевизор LG OLED55C2",
		category: "Электроника",
		price: 120000,
		rating: 4.7,
	},
	{
		id: 5,
		title: "Кофеварка DeLonghi Magnifica",
		category: "Бытовая техника",
		price: 45000,
		rating: 4.4,
	},
	{
		id: 6,
		title: "Игровая приставка PlayStation 5",
		category: "Игры",
		price: 75000,
		rating: 4.9,
	},
	{
		id: 7,
		title: "Микроволновка Samsung ME88",
		category: "Бытовая техника",
		price: 18000,
		rating: 4.3,
	},
	{
		id: 8,
		title: "Пылесос Dyson V15 Detect",
		category: "Бытовая техника",
		price: 65000,
		rating: 4.8,
	},
	{
		id: 9,
		title: "Электросамокат Xiaomi Pro 2",
		category: "Транспорт",
		price: 42000,
		rating: 4.5,
	},
	{
		id: 10,
		title: "Умные часы Apple Watch Series 8",
		category: "Гаджеты",
		price: 55000,
		rating: 4.7,
	},
];

function sortRatingList(array) {
	return array
		.sort((a, b) => a.rating - b.rating)
		.reverse()
		.slice(0, 3);
}

console.log(sortRatingList(arrayList));

async function fetchUser() {
	await fetch("https://jsonplaceholder.typicode.com/users")
		.then(response => response.json())
		.then(data => console.log(data))
		.catch(response => console.log(response));
}

fetchUser();

async function jsonFetch() {
	const object = document.querySelector(".object");

	await fetch("https://jsonplaceholder.typicode.com/users")
		.then(response => response.json())
		.then(data => {
			data.map(elem => {
				const card = document.createElement("div");
				card.className = "card";
				card.innerHTML = `<h3>${elem.name}</h3>`;
				object.appendChild(card);
			});
		});
}

jsonFetch();
