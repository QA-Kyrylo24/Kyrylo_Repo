
// Task 1. Створіть функцію display(), яку можна викликати трьома різними способами за допомогою техніки перевантаження.

// Перевантаження 1: приймає один стрінговий параметр і друкує його.

// Перевантаження 2: приймає два стрінгових параметри та друкує їх в окремих рядках.

// Перевантаження 3: приймає масив стрінгів і друкує кожен рядок у новому рядку.
	
// Приклад роботи:
// display("Hello, World!");		// Hello, World!

// display("Hello", "World!");		// Hello
// 							   World!

// display(["Hello", "World", "!"]);	// Hello
//    World
//    !

function display(message: string): void;
function display(message1: string, message2: string): void;
function display(messages: string[]): void;

function display(x: string | string[], y?: string): void {
    if (typeof x === "string" && y === undefined) {
        console.log(x);
    } else if (typeof x === "string" && typeof y === "string") {
        console.log(x);
        console.log(y);
    } else if (Array.isArray(x)) {
        for (const message of x) {
            console.log(message);
        }
    } else {
        throw new Error("Invalid arguments");
    }
}

display("Hello, World!"); 
display("Hello", "World!"); 
display(["Hello", "World", "!"]); 


// Task 2. Створіть дженерік функцію identity(), яка приймає масив як аргумент.
// 	Кожен елемент масиву повинен задовольняти умову: мати поле рейтингу rating
// 	Функція identity() має повертати середнє значення рейтингів у масиві.

// Приклад роботи:
// console.log(identity([{name: "Anna", rating: 3}]))	// 3

// console.log(identity([{title: "Encounter", rating: 3}, {title: "Dead to me", rating: 4}, {title: "Riverdale", rating: 5}]))		// 4

function identity<T extends { rating: number }>(items: T[]): number {
    const totalRating = items.reduce((sum, item) => sum + item.rating, 0);
    return items.length > 0 ? totalRating / items.length : 0;
}

console.log(identity([{ name: "Anna", rating: 3 }])); 
console.log(
    identity([
        { title: "Encounter", rating: 3 },
        { title: "Dead to me", rating: 4 },
        { title: "Riverdale", rating: 5 }
    ])
); 


// Task 3. Створіть декоратор withEmploymentDate, який додає поле EmploymentDate зі значенням 2024-04-12 до класу, з яким воно використовується.

// Використовуйте створений декоратор з класом Manager.

// class Manager {
//     task: string = 'Simple task'
//     project: string = 'Simple project'
//     constructor(){
//         console.log('Initializing the Manager class')
// }


// Приклад роботи:
// const manager = new Manager();
// console.log(manager);
// // Output
// { "task": "Simple task", "project": "Simple project", "employmentDate": "2024-04-12T00:00:00.000Z" }

function WithDate(target: any, context: any): any {
    if (context.kind === "class") {
        return class extends target {
            date = "2024-04-12T00:00:00.000Z"; 
        };
    }
}

@WithDate
class Manager {
    task: string = "Simple task";
    project: string = "Simple project";

    constructor() {
        console.log("Initializing the Manager class");
    }
}

const manager = new Manager();
console.log(manager);

