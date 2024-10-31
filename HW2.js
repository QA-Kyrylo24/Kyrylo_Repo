
/* Task 1. Реалізуйте функцію processData(num1, num2, action), яка приймає числові параметри num1, num2 і повертає результат їх обчислення в залежності від значення параметра action.
    У випадку якщо:
action=”sum” функція має повернути суму
action=”product” функція має повернути добуток
action=”square” функція має повернути num1 в степені num2
За замовчуванням num1 і num2 рівні 0, а action ”sum”.
	
Приклад роботи:
console.log(processData(10, 4, ”product”));		// 40 */

function processData(num1 = 0, num2 = 0, action = "sum") {
    let result;
    if (action === "sum") {
        result = num1 + num2;
    } else if (action === "product") {
        result = num1 * num2;
    } else if (action === "square") {
        result = num1 ** num2;
    } else {
        result = "Please check the entered values";
    };
    return result;
};

console.log(processData(5, 3, "square"));
console.log(processData());

// - - - - - - - - - - - - - - - - - - - -
/*  */ /* Task 2.  Реалізуйте функцію findElem(arr, el), яка приймає параметри arr -   масив і el - елемент. Функція має визначити чи міститься елемент el в масиві arr, і повертати відповідне булеве значення. */

const arr = [1, 2, 3, 4, "Alex", 10, "Nick"];
function findElem(arr, el) {
    found = false;
    arr.forEach(function (item) {
        if (item === el) {
            found = true;
        };
    });
    return found;
};
console.log(findElem(arr, "Alex"));
console.log(findElem(arr, "100"));

// - - - - - - - - - - - - - - - - - - - -
/*Task 3. Реалізуйте функцію deleteItem(arr, item), яка приймає параметри arr - масив і item – елемент масиву. Функція має видаляти елемент item з масиву arr, і повертати вихідний масив, який не містить цього елемента.

Приклад роботи:
console.log(deleteItem([3, 12, 16, 19, 21, 33], 16));		// [3, 12, 19, 21, 33]  */


// Так як в умові не вказано що треба видалити всі елементи якщо вони повторюються, 
// то така реалізація видалить перший, що відповідає умові.
// Якщо треба всі повторювані, то можна реалізовати через фільтрацію 
const arr = [3, 12, 16, 19, 21, 33];
function deleteItem(arr, item) {
    const index = arr.indexOf(item);
    if (index > -1) {
        arr.splice(index, 1);
    }
    return arr;
};
console.log(deleteItem(arr, 16));


// - - - - - - - - - - - - - - - - - - - -
/* Task 4. Реалізуйте функцію getCircleLength(r), яка приймає параметр r -  радіус кола і обчислює його довжину. Передбачити припинення виконання програми і генерацію помилки у випадку, якщо функції передано не числовий або менший-рівний 0 параметр.
Напишіть код, який використовує цю функцію та обробляє можливі виняткові ситуації.
    Приклад роботи:
getCircleLength(“five”); 	// “Incorrect radius - please, enter numeric value!” */


function getCircleLength(radius) {
    if (radius <= 0 || typeof radius !== "number") {
        throw new Error("Radius should be a number > 0")
    };
    const circle = Math.PI * radius * 2;
    return circle;
};

try {
    console.log(getCircleLength(5));
} catch (error) {
    console.log(error.message);
};



// - - - - - - - - - - - - - - - - - - - -
/* 
Task 5. Реалізуйте функцію checkID(), яка пропонуватиме користувачу ввести власне ID. Валідні ID знаходяться в діапазоні від 1 до 1000.
	Функція має генерувати в модальному вікні помилки у випадку, коли: 
	- юзер ввів порожню стрічку (наприклад “The field is empty! Please enter your ID”), 
	- нечислове значення
	- ID знаходиться поза межами коректного діапазону.
Якщо ID валідне юзер отримує відповідне сповіщення.
В блокові catch передбачити виведення назви і опису помилки.
 */


function checkID() {
    let id = prompt("Please enter the id", "");

    if (id.trim() === "" ) {
        throw new Error("Value can't be empty")
    };
    id = Number(id);
    if ( isNaN(id)) {
        throw new Error("id should be a number")
    };
    if (id <1 || id >1000) {
        throw new Error("id should be a number > 0 and <=1000")
    };
    return id;
};

try {
    alert(checkID()) ;
} catch (error) {
    alert(error.message);
};


// - - - - - - - - - - - - - - - - - - - -
/* Task 6*. Реалізуйте функцію findArrDiff(arr1, arr2), яка приймає числові масиви arr1, arr2 і повертає масив чисел, які не повторюються у вихідних масивах.
	
Приклад роботи:
console.log(difference([5, 10, 20], [0, 10, 20, 30]));		// ["5", "0", "30"] */