'use strict';
//1. Отримайте атрибут
// Напишіть код, щоб вибрати елемент з атрибутом data-widget-name з документа та прочитати його значення.
// <!DOCTYPE html>
// <html>
// <body>
//   <div data-widget-name="menu">Виберіть жанр</div>
//   <script>
//   </script>
// </body>
// </html>
// let elem = document.querySelector('[data-widget-name]');
// console.log(elem.dataset.widgetName);

// 2.Зробіть всі зовнішні посилання помаранчевими, змінюючи властивість style.
// Посилання є зовнішнім, якщо:
// В його href є ://
// Але не починається з http://internal.com.
// <a name="list">список</a>
// <ul>
//   <li><a href="http://google.com">http://google.com</a></li>
//   <li><a href="/tutorial">/tutorial.html</a></li>
//   <li><a href="local/path">local/path</a></li>
//   <li><a href="ftp://ftp.com/my.zip">ftp://ftp.com/my.zip</a></li>
//   <li><a href="http://nodejs.org">http://nodejs.org</a></li>
//   <li><a href="http://internal.com/test">http://internal.com/test</a></li>
// </ul>
// <script>
//   // налаштування style для одного посилання
//   let link = document.querySelector('a');
//   link.style.color = 'orange';
// </script>
// let elems = document.querySelectorAll('a');
// for (let elem of elems) {
// 	let href = elem.getAttribute('href');
// 	if (!href) continue;
// 	if (!href.includes('://')) continue;
// 	if (href.startsWith('http://internal.com')) continue;
// 	elem.style.color = 'orange';
// }

// 1. Створіть параграф в html і додайте в нього тест-рибу. Виведіть в консоль тільки сам текст.
// const p = document.createElement('p');
// p.textContent = 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum';
// document.body.append(p);
// console.log(p.textContent);

// 2. Створити функцію, яка приймає як аргумент назву тега і повертає інформацію
// (у вигляді об'єкта) про тип вузла, про ім'я вузла і про кількість дочірніх вузлів (якщо дітей немає - 0).
// Для цього вузол має бути в html.
// nodeInfo('ul')
// let newFunction = tag => {
// 	const elem = document.querySelector(tag);
// 	return {
// 		тип: elem.nodeType,
// 		імя: elem.nodeName,
// 		кількість: elem.children.length,
// 	};
// };
// console.log(newFunction('ul'));

// 3. Напишіть функцію, яка приймає селектор, по якому можна знайти список ul, та повертає текстовий вмісту
//  посилань усередині списку у вигляді масиву: getTextFromUl('.list') ---> ["Link1", "Link2", "Link3"]
// const getTextFromUl = selector => {
// 	const elements = document.querySelectorAll(selector);
// 	let textArray = [];
// 	elements.forEach(item => textArray.push(item.textContent));
// 	return textArray;
// };
// console.log(getTextFromUl('.list'));

// 4. Створіть кнопку за допомогою JavaScript і задайте їй атрибут data-color зі значенням "red".
// Виведіть її першим елементом в body. Потім виведіть значення цього атрибута в консоль.
// let button = document.createElement('button');
// button.innerHTML = 'submit';
// button.style.width = '100px';
// button.style.height = '100px';
// button.style.fontSize = '20px';
// button.style.background = 'green';
// button.style.border = 'none';
// button.style.borderRadius = '50px';
// button.setAttribute('data-color', 'red');
// document.body.prepend(button);
// console.log(button.dataset.color);

// 5. Створіть список <ul> з трьома елементами <li>. Встановіть для кожного елемента атрибут data-index
// з відповідними значеннями 1, 2, 3. Потім виведіть значення атрибута data-index для кожного елемента списку в консоль.
// const ul = document.createElement('ul');
// for (let i = 1; i <= 3; i++) {
// 	const li = document.createElement('li');
// 	li.textContent = 'index' + i;
// 	li.setAttribute('data-index', i);
// 	ul.prepend(li);
// 	console.log(li.dataset.index);
// }
// document.body.prepend(ul);

// 6. Створіть список <ul> з елементами <li>.
// За допомогою властивості hidden зробіть другий елемент списку невидимим.
// const ul = document.createElement('ul');
// for (let i = 1; i <= 5; i++) {
// 	const li = document.createElement('li');
// 	li.textContent = i;
// 	ul.append(li);
// }
// document.body.prepend(ul);

// const hiddenElem = () => {
// 	const elements = document.querySelectorAll('li');
// 	if (elements.length > 1) {
// 		elements[1].hidden = true;
// 	}
// };
// hiddenElem();

// 7. Створіть зображення <img> із початковим атрибутом src. Через 3 секунди змініть значення властивості src на
// інше зображення і переконайтеся, що зображення оновлюється на сторінці.
// const img = document.createElement('img');
// img.setAttribute(
// 	'src',
// 	'https://thumbs.dreamstime.com/b/frangipani-flowers-10997030.jpg'
// );
// ul.before(img);
// setTimeout(
// 	() =>
// 		img.setAttribute(
// 			'src',
// 			'https://media.istockphoto.com/id/1394440950/photo/natural-view-cosmos-filed-and-sunset-on-garden-background.webp?b=1&s=612x612&w=0&k=20&c=o3n-h2j4aBnaDqKeY-876cTRm1DLOsZcCjcfDZf_9TQ='
// 		),
// 	3000
// );

// 8. Створіть посилання <a> з атрибутом. Змініть значення властивості target на _blank і переконайтеся,
// що посилання відкривається в новій вкладці.
// const a = document.createElement('a');
// a.setAttribute('href', 'https://www.google.com.ua/?hl=uk');
// a.setAttribute('target', '_self');
// a.textContent = 'Тут посилання на Google';
// ul.before(a);
// a.setAttribute('target', '_blank');

// 10. Створіть свій кастомний alert зі стилями, які подобаються. Html використовувати не можна.
// Alert має з'явитись через 3 секунди після оновлення сторінки і почати плавно моргати кожну секунду.
// showNotification({
//   top: 10, // 10px від верха вікна (усталено має бути 0px)
//   right: 10, // 10px від правого краю вікна (усталено — 0px)
//   html: 'Hello!', // HTML-код сповіщення
//   className: 'welcome' // додатковий клас для елемента div (необов'язково)
// });

// document.body.innerHTML = '';
// const showNotification = ({ top = 0, right = 0, html, className }) => {
// 	const div = document.createElement('div');
// 	div.className = 'notification';
// 	if (className) {
// 		div.classList.add(className);
// 	}
// 	div.style.display = 'flex';
// 	div.style.justifyContent = 'center';
// 	div.style.alignItems = 'center';
// 	div.style.width = '400px';
// 	div.style.height = '100px';
// 	div.style.backgroundColor = 'olive';
// 	div.style.fontSize = '30px';
// 	div.style.position = 'absolute';
// 	div.style.top = top + 'px';
// 	div.style.right = right + 'px';
// 	div.style.borderRadius = '10px';
// 	div.innerHTML = html;
// 	document.body.append(div);
// 	const visible = () => {
// 		div.classList.toggle = 'visible';
// 	};
// 	const intervalId = setInterval(visible, 1000);
// 	setTimeout(() => {
// 		clearInterval(intervalId);
// 		div.remove();
// 	}, 1000);
// };
// setInterval(() => {
// 	showNotification({
// 		top: 10,
// 		right: 10,
// 		html: 'Hello ',
// 		className: 'welcome',
// 	});
// }, 2000);

// завдання зі статті
// 1.Очистіть елемент
// Створіть функцію clear(elem) яка видаляє все з елементу.
// <ol id="elem">
//   <li>Привіт</li>
//   <li>Світ</li>
// </ol>
// <script>
//   function clear(elem) { /* ваш код */ }
//   clear(elem); // очищує список
// </script>
// const ol = document.createElement('ol');
// ol.setAttribute('id', 'elem');
// document.body.prepend(ol);

// for (let i = 1; i <= 2; i++) {
// 	const li = document.createElement('li');
// 	li.textContent = 'Елемент ' + i;
// 	ol.append(li);
// }
// const clear = elem => {
// 	const element = document.querySelector(elem);
// 	if (element) {
// 		element.remove();
// 	}
// };
// clear('#elem');

// 2.Створіть список
// Напишіть інтерфейс для створення списку на основі того, що введе користувач.
// Для кожного пункта списку:
// Запитайте текст пункту у користувача за допомогою prompt.
// Створіть <li> з цим текстом та додайте його до <ul>.
// Продовжуйте поки користувач не припинить вводити дані (натисне Esc або введе пустий рядок).
// Всі елементи повинні створюватися динамічно.
// Якщо користувач вводить HTML-теги, вони мають розглядатися як текст.
// document.body.innerHTML = '';
// const createLi = () => {
// 	const ul = document.createElement('ul');
// 	ul.textContent = 'Створіть список';
// 	ul.style.fontWeight = 'bold';
// 	ul.style.fontSize = '40' + 'px';
// 	document.body.prepend(ul);
// 	do {
// 		const text = prompt('Введіть текст для пункту списку');
// 		if (text === null || text === '') {
// 			break;
// 		}
// 		const li = document.createElement('li');
// 		li.textContent = text;
// 		ul.append(li);
// 		li.style.fontWeight = '400';
// 	} while (true);
// 	ul.style.fontSize = '32' + 'px';
// 	return ul;
// };
// createLi();

// 3.Створіть дерево з об’єкту
// Напишіть функцію createTree яка створює вкладений ul/li список з вкладеного об’єкта.
// document.body.innerHTML = '';

// let data = {
// 	Риба: {
// 		форель: {},
// 		лосось: {},
// 	},
// 	Дерево: {
// 		Величезні: {
// 			секвойя: {},
// 			дуб: {},
// 		},
// 		Квітучі: {
// 			яблуня: {},
// 			магнолія: {},
// 		},
// 	},
// };

// const div = document.createElement('div');
// div.setAttribute('id', 'container');
// document.body.prepend(div);

// const createTreeText = obj => {
// 	const createList = obj => {
// 		let ul = document.createElement('ul');
// 		for (let key in obj) {
// 			let li = document.createElement('li');
// 			li.textContent = key;
// 			// Рекурсивний виклик для дочірніх елементів
// 			if (Object.keys(obj[key]).length > 0) {
// 				let childUl = createList(obj[key]);
// 				li.append(childUl);
// 			}
// 			ul.append(li);
// 		}
// 		return ul.children.length > 0 ? ul : null;
// 	};

// 	if (createList(obj)) {
// 		div.append(createList(obj));
// 	}
// };
//
// createTreeText(data);
