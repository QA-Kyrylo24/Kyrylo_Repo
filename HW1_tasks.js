/*
Task 1.  Напишіть програму мовою JavaScript, яка перетворює вхідне числове значення в стрінгу, яка містить відповідну кількість годин і хвилин.
Приклад роботи:
inputValue = 82;
result:  1:22

*/

// Enter input below, then run code
let input = 245;
const hours = Math.floor(input / 60)
const minutes = input % 60;
const calculatedTime = `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
console.log("Time:", calculatedTime);


// - - - - - - - - - - - - - - - - - - - -

/*
Task 2. In the separate HTML file
*/

// - - - - - - - - - - - - - - - - - - - -

/*
Task 3
*/

//1
let x = 1;
let y = 2;
let res1 = `${x}${y}`; // Допишіть код, необхідно використовувати змінні x і y
console.log(res1); // "12"
console.log(typeof res1); // "string"

//2
let x = 1;
let y = 2;
let res2 = `${Boolean(x)}${y}`// Допишіть код, необхідно використовувати змінні x і y
console.log(res2); // "true2"
console.log(typeof res2); // "string"

//3
let x = 1;
let y = 2;
let res3 = Boolean(x*y)// Допишіть код, необхідно використовувати змінні x і y
console.log(res3); // true
console.log(typeof res3); // "boolean"

//4
let x = 1;
let y = 2;
let res4 = "Value" - (x*y) // Допишіть код, необхідно використовувати змінні x і y
console.log(res4); // NaN
console.log(typeof res4); // "number"


// - - - - - - - - - - - - - - - - - - - -


/*
Task 4. Написати умовну конструкцію, яка в залежності від значення набраного балу по 100-бальній шкалі, виводитиме відповідний результат. Зробити 2-ма різними способами через 2 різних умовних оператора.
Для балів в діапазоні 0-49 – має виводитися оцінка ”Unsatisfied!”
Для балів в діапазоні 50-70 – має виводитися оцінка ”Satisfied !”
Для балів в діапазоні 71-87 – має виводитися оцінка “Good!”
Для балів в діапазоні 88-100 – має виводитися оцінка “Excellent!”
Для балів поза діапазоном 0-100 – має виводитися “Incorrect assessment!!”
*/

//Please enter Rate value from 0 to 100

let rate = 88;

if (rate >= 0 && rate <= 49 ) {
    console.log("Unsatisfied!");
 } else if (rate > 49 && rate <= 70 ) {
    console.log("Satisfied!");
 } else if (rate > 70 && rate <= 87 ) {
    console.log("Good!");
} else if (rate > 87 && rate <= 100) {
    console.log("Excellent!");
} else {
    console.log("Please enter value from 0 to 100!");
};
 

let rate = 101;

switch (true) {
    case (rate >= 0 && rate <= 49):
        console.log("Unsatisfied!");
        break;
    case (rate >= 50 && rate <= 70):
        console.log("Satisfied!");
        break;
    case (rate >= 71 && rate <= 87):
        console.log("Good!");
        break;
    case (rate >= 88 && rate <= 100):
        console.log("Excellent!");
        break;
    default:
        console.log("Please enter value from 0 to 100!");
};


// - - - - - - - - - - - - - - - - - - - -


/*
Task 5. Напишіть програму на JavaScript, яка ітерується цілими числами від 1 до 50. 
Для числа, кратного двом потрібно додатково виводити " kratne 2!". 
Для числа, кратного чотирьом потрібно додатково виводити " kratne 4!". 
Для чисел, кратних двом і чотирьом, виведіть " kratne 2 & 4!".
	Приклад роботи для перших 8-ми чисел діапазону:
1
2 kratne 2!
3
4 kratne 2 & 4!
5
6 kratne 2!
7
8 kratne 2 & 4!

*/

for(let count = 1; count < 51; count++) { 

    let multiple2 = count % 2;
    let multiple4 = count % 4;
    if (multiple2 === 0 && multiple4 === 0 ) {
        console.log(count + " kratne 2 & 4!");
     } else if (multiple2 === 0) {
        console.log(count + " kratne 2!");
    } else {
        console.log(count);
    };

  };



// - - - - - - - - - - - - - - - - - - - -

/*
Task 6*. Напишіть програму на JavaScript, яка приймає число від користувача і перевіряє, чи є це число простим. Простим є таке число, яке більше за 1 і ділиться без остачі тільки на себе і 1. Програма повинна вивести відповідне повідомлення, чи є число простим, чи ні.
	
Приклад роботи для числа 4:
4 is not a prime number.

Приклад роботи для числа 7:
7 is a prime number.

*/

// Please enter input:

let input = 17;
let result = " is a prime number"
for (let count = 2; count < input; count++) {
    let quotient = input % count;
    if (quotient == 0) {
        result = " is NOT a prime number";
    } ;
};
console.log(input+result);

// Також я прогуглив як ввести Інпут в консолі та додав в таку функцію цей код, в окремому файлі