// Task 1.  Надається програма JavaScript, яка розраховує та відображає інформацію про зарплату працівника, включаючи премію.
// Вам необхідно виконати повну трансформацію коду JavaScript на TypeScript з коректною типізацією, переконавшись у відсутності помилок і коректній роботі з вхідними даними.

// // rewrite this code in TypeScript

// const employee = {
// 	name: "Alex Brown",
// 	profession: "doctor",
// 	worworkingHoursPerDay: 10
// };

// const premiumData = {
// 	isPremium: true,
// 	premium: 1000
// };

// const payPerHour = 32;
// const worworkingDays = 14;

// const experienceСoefficients = [1, 1.1, 1.2, 1.3, 1.5,]; 

// const getSalaryInfo = (employeeData, premiumData, payPerHour, worworkingDays, experienceСoefficients) => {
//     let salary;
// 	if (premiumData.isPremium) {
// 		salary = employeeData.worworkingHoursPerDay * payPerHour * worworkingDays * experienceСoefficients + premiumData.premium;
// 	} else {
// 		salary = employeeData.worworkingHoursPerDay * payPerHour * worworkingDays * experienceСoefficients;
// 	}
// 	return `${employee.profession} ${employee.name} has a salary of ${salary}$ this month`;
// };

// const salaryInfo = getSalaryInfo(employee,premiumData, payPerHour, worworkingDays, experienceСoefficients[2]);



const employee: { name: string; profession: string; workingHoursPerDay: number } = {
    name: "Alex Brown",
    profession: "doctor",
    workingHoursPerDay: 10,
};

const premiumData: { isPremium: boolean; premium: number } = {
    isPremium: true,
    premium: 1000,
};

const payPerHour: number = 32;

const workingDays: number = 14;

const experienceCoefficients: number[] = [1, 1.1, 1.2, 1.3, 1.5];

const getSalaryInfo = (
    employeeData: { name: string; profession: string; workingHoursPerDay: number },
    premiumData: { isPremium: boolean; premium: number },
    payPerHour: number,
    workingDays: number,
    experienceCoefficient: number
): string => {
    let salary: number;

    if (premiumData.isPremium) {
        salary = employeeData.workingHoursPerDay *
            payPerHour *
            workingDays *
            experienceCoefficient +
            premiumData.premium;
    } else {
        salary =
            employeeData.workingHoursPerDay *
            payPerHour *
            workingDays *
            experienceCoefficient;
    }

    return `${employeeData.profession} ${employeeData.name} has a salary of ${salary}$ this month`;
};

const salaryInfo: string = getSalaryInfo(
    employee,
    premiumData,
    payPerHour,
    workingDays,
    experienceCoefficients[2]
);

console.log(salaryInfo);



// Task 2. Реалізуйте на TypeScript функцію processData(), яка приймає параметр param, який може бути рядком, числом, логічним значенням або масивом чисел. Залежно від типу вхідного параметра param, функція повинна виконувати різні операції та повертати відповідне значення:

//  	- якщо параметр є рядком, поверніть версію параметра у верхньому регістрі.

//  	- якщо параметр є числом, поставте його у квадрат.

//  - якщо параметр є логічним, поверніть його заперечення.

//  - якщо параметр є масивом чисел, поверніть масив із квадратом кожного числа.

//  - якщо параметр є порожнім масивом, поверніть «Порожній масив: []».

// Приклад застосування:
//   console.log(processData("text data")); // "TEXT DATA"
//   console.log(processData(3)); // 9
//   console.log(processData(false)); // true
//   console.log(processData([1, 2, 3, 4])); // [1, 4, 9, 16]
//   console.log(processData([])); // Empty array: []


const processData = (param: string | number | boolean | number[]): string | number | boolean | number[] => {
    if (typeof param === "string") {
        return param.toUpperCase();
    } else if (typeof param === "number") {
        return param ** 2;
    } else if (typeof param === "boolean") {
        return !param;
    } else if (Array.isArray(param)) {
        if (param.length === 0) {
            return "Empty array: []";
        } else {
            return param.map((num) => num ** 2);
        }
    }
    throw new Error("Unsupported type");
};

console.log(processData("text data")); // "TEXT DATA"
console.log(processData(3)); // 9
console.log(processData(false)); // true
console.log(processData([1, 2, 3, 4])); // [1, 4, 9, 16]
console.log(processData([])); // "Empty array: []"




// Task 3*.  Реалізуйте функцію TypeScript getFigureInfo(), яка приймає параметр типу об’єднання, що представляє різні геометричні фігури: triangle, rectangle і circle.

// Кожна фігура повинна бути визначена як особливий тип з певними властивостями:

// Трикутник triangle повинен мати властивості основи та висоти.

// Прямокутник rectangle  повинен мати властивості ширини та висоти.

// Коло circle  повинно мати властивість радіуса.

// Функція getFigureInfo() має повертати рядок із описом фігури та її визначеної площі.

// Для трикутника функція повинна повернути `Triangle with base figure_base and height figure_height has an area of ​​triangle_area`;

// Для прямокутника функція має повернути `Rectangle with width figure_width and height figure_height has an area of ​​rectangle_area`;

// Для кола функція має повернути `Circle with radius figure_radius has an area of ​​circle_area`.. Для круга площа визначається з точністю до 2 знаків після коми.

// Приклад застосування:
//   const triangle: Triangle = { type: "triangle", base: 5, height: 10 };
//   const rectangle: Rectangle = { type: "rectangle", width: 8, height: 14 };
//   const circle: Circle = { type: "circle", radius: 8 };

//   console.log(getFigureInfo(triangle));
// // Output: " Triangle with base 5 and height 10 has an area of 25" 
//   console.log(getFigureInfo(rectangle));
// // Output: " Rectangle with width 8 and height 14 has an area of 112" 
//   console.log(getFigureInfo(circle));
// // Output: " Circle with radius 8 has an area of 201.06"

type Triangle = { type: "triangle"; base: number; height: number };
type Rectangle = { type: "rectangle"; width: number; height: number };
type Circle = { type: "circle"; radius: number };

type Figure = Triangle | Rectangle | Circle;

const getFigureInfo = (figure: Figure): string => {
    switch (figure.type) {
        case "triangle":
            const triangleArea = (figure.base * figure.height) / 2;
            return `Triangle with base ${figure.base} and height ${figure.height} has an area of ${triangleArea}`;
        case "rectangle":
            const rectangleArea = figure.width * figure.height;
            return `Rectangle with width ${figure.width} and height ${figure.height} has an area of ${rectangleArea}`;
        case "circle":
            const circleArea = Math.PI * figure.radius ** 2;
            return `Circle with radius ${figure.radius} has an area of ${circleArea.toFixed(2)}`;
        default:
            throw new Error("Unknown figure type");
    }
};

const triangle: Triangle = { type: "triangle", base: 5, height: 10 };
const rectangle: Rectangle = { type: "rectangle", width: 8, height: 14 };
const circle: Circle = { type: "circle", radius: 8 };

console.log(getFigureInfo(triangle)); // "Triangle with base 5 and height 10 has an area of 25"
console.log(getFigureInfo(rectangle)); // "Rectangle with width 8 and height 14 has an area of 112"
console.log(getFigureInfo(circle)); // "Circle with radius 8 has an area of 201.06"
