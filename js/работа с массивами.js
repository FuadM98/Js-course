// #examples Перебор массива

// const fruits = ['apple', 'banana', 'rock', 'scissors'];

// for (let i = 0; i < fruits.length; i += 1) {
//   const index = i + 1;
//   const element = fruits[i];
//   console.log(`${index}: ${element}`);
// }

// const fruits = ['apple', 'banana', 'rock', 'scissors'];
// for (let fruit of fruits) {
//   const index = fruits.indexOf(fruit) + 1;
//   console.log(`${index}: ${fruit}`);
// }

// # Скрипт для вычисления площади прямоугольника со сторонами, значения которыххранятся в переменной "values" в виде строки.
// Значения гарантированно разделены пробелом

// const values = '8 11';

// const valuesArray = values.split(' ');
// console.log(valuesArray);

// const result = Number(valuesArray[0]) * Number(valuesArray[1]);
// // const result = +valuesArray[0] + +valuesArray[1];

// console.log(result);

// Заметки: при попытке сложить два элемента массива с помощью "+", получим результат конкатенации, а не сумму.
// 1-й способ сложить элементы массива : преобразовать элементы в число с помощью Number();
// 2-й способ: унарный "+" перед значением +valuesArray[0] + +valuesArray[1] - метод устаревший, не используется

// function slugify(title) {
//   let arrayTitle = title.split(' ');
//   console.log('arrayTitle');
// }

//  ПРАКТИКА 11.02

// Напишіть програму для заміни кожного символу в заданому рядку символом,
// що йде наступним за ним в алфавіті

// const word = prompt('Enter word');
// console.log(word);
// let newWord = '';
// for (let i = 0; i < word.length; i += 1) {
//   if (letter === 'z') {
//     newWord += 'a';
//   }
//   const letter = word[i];
//   const code = letter.charCodeAt();
//   newWord += String.fromCharCode(code + 1);
//   console.log(letter);
// }
// console.log(newWord);

// // Напишіть код, який запитуватиме
// логін за допомогою prompt і буде виводити результат
// в консоль браузера

// Якщо користувач вводить "Admin",
// то prompt запитує пароль.
// Якщо нічого не ввели або натиснута клавіша Esc
// вивести рядок "Cancel"
// Інакше вивести рядок "I don't know you"

//Пароль перевіряти так:
// Якщо введено пароль "I am admin",
// то вивести рядок "Hello!"
// інакше виводити рядок "Wrong password!"

// const login = prompt('Enter login');

// console.log(login);

// if (login === 'Admin') {
//   const password = prompt('Enter password');
//   if (password === 'I am admin') {
//     console.log('Hello!');
//   } else {
//     console.log('Wrong password!');
//   }
// }
// // else if (login === '' || login === null)
// else if (!login) {
//   console.log('Cancel');
// } else {
//   console.log('I dont know you');
// }

// Напишіть через світч пошук автора мови програмування
// Пишемо назву мови у шаблонному рядку отримує відповідь: мова та автор
// PHP Расмус Лердорф
// C# група інженерів компанії Microsoft під керівництвом Андерса Хейлсберга та Скотта Вільтаумота
// Swift Кріс Латтнер
// JS Брендан Ейх
// Java Джеймс Гослінг
// Python Гвідо ван Россум

// const language = prompt('Enter programming language');

// switch (language?.toLowerCase()) {
//   case 'php':
//     console.log('PHP Расмус Лердорф');
//     break;

//   case 'c#':
//     console.log(
//       'C# група інженерів компанії Microsoft під керівництвом Андерса Хейлсберга та Скотта Вільтаумота',
//     );
//     break;

//   case 'swift':
//     console.log('Swift Кріс Латтнер');
//     break;

//   default:
//     console.log('Not found!');
// }

// За кожен місяць податкова нараховує на ЗП розробника 5% від суми.
// Напишіть консольну функцію, на яку користувач вводить суму зп
// і кількість місяців з допомогою prompt() не забуваємо, що промпт повертає рядок.
// А податкова обчислює кінцеву суму зп без податків,
// Суму податків всього і чистий дохід розробника за кожен місяць.
// Для обчислення суми з урахуванням відсотків використовуйте цикл for.

// const salary = 1000;
// const tax = 0.05;

// const period = prompt('Enter period');

// let allSalary = 0;

// let allTax = 0;

// for (let i = 0; i < period; i += 1) {
//   allSalary += salary * (1 - tax);
//   allTax += allSalary * tax;
// }
// console.log(`Чистий дохід склав ${allSalary}`);
// console.log(`Податки склали ${allTax}`);

// При завантаженні сторінки користувачеві пропонується
// в prompt ввести число. Після введення число додається до значення
// змінної total.
// Операція введення числа продовжується доти,
// поки користувач не натисне кнопку Cancel в prompt.

// Після того як користувач припинив введення, натиснувши на
// кнопку Cancel, показати console.log з рядком "Загальна сума введених чисел дорівнює [число]."

// Зробити перевірку, що користувач ввів саме число,
// а не довільний набір символів.

// let number;

// let total = 0;

// while (number !== null) {
//   number = prompt('Enter number');
//   if (isNaN(Number(number))) {
//     continue;
//   }
//   total += Number(number);
// }
// console.log(total);

// Напишіть цикл, який пропонує ввести
// число більше 100 через prompt.
// Якщо користувач ввів інше число - попросити
// ввести ще раз і так далі.
// Цикл повинен запитувати число, поки користувач не
// введе число більше 100, або натисне кнопку
// Скасування в prompt

// do {
//   const number = prompt('Enter Number');
//   console.log(number);
//   if (!number || number > 100) {
//     break;
//   }
// } while (true);

// Введіть рядок в prompt
// Виведіть кількість голосних букв в цьому рядку

// const word = prompt('Enter a word');
// const wordVowels = ['A', 'E', 'I', 'O', 'U', 'Y'];
// let count = 0;
// for (let i = 0; i < word.length; i += 1) {
//   const letter = word[i];
//   if (wordVowels.includes(letter.toUpperCase())) {
//     count += 1;
//   }
//   console.log(letter);
// }
// console.log(count);

// Напишіть програму для перевірки чи є число простим чи ні

// const number = prompt('Enter number');
// let isPrime = true;
// for (let i = 2; i < number; i += 1) {
//   if (number % i === 0) {
//     isPrime = false;
//     break;
//   }
//   console.log(i);
// }

// console.log(isPrime);

// Напишіть функцію для знаходження кількості літер у рядку
// Функція `letterCount()` повертає кількість букв у заданому рядку

// console.log(letterCount("Connect",'c')) // 2
// console.log(letterCount("first person",'s')) // 2

// const message = 'hello';
// let count = 0;
// for (let i = 0; i < message.length; i += 1) {
//   if (message[i] === 'l') {
//     count += 1;
//   }
// }
// console.log(count);

// Напишіть функцію min(a,b),
// яка повертає найменше з чисел a та b.

// Приклад викликів:
//
// min(2, 5) == 2
// min(3, -1) == -1
// min(1, 1) == 1

function min(a, b) {
  let leastNumber = 0;

  return a < b ? a : b;
}

console.log(min(5, 8));
