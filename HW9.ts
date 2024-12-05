
// Task 1. Створіть функцію superSort(arr, direction), яка приймає масив рядків arr і напрямок сортування direction з двома можливими значеннями: «asc» і «desc». Функція повертає відсортований масив як копію.
// 	Створіть type alias SortFunction для цієї функції.
	
// Приклад роботи:
// const names = ["Vlad", "Ira", "Nina", "Alex"];
// console.log(superSort(names, "asc"));
// // [ 'Alex', 'Ira', 'Nina', 'Vlad' ]

// const func: SortFunction = superSort;
// const result = func(["A", "C", "D", "B"], "desc");
// console.log(result);
// // [ 'D', 'C', 'B', 'A' ]


type SortFunction = (arr: string[], direction: "asc" | "desc") => string[];

const superSort: SortFunction = (arr, direction) => {
    const sortedArray = [...arr].sort(); 
    return direction === "asc" ? sortedArray : sortedArray.reverse(); 
};


const names = ["Vlad", "Ira", "Nina", "Alex"];
console.log(superSort(names, "asc"));


const func: SortFunction = superSort;
const result = func(["A", "C", "D", "B"], "desc");
console.log(result);


// Task 2. Створіть інтерфейс Parcel для представлення сутності в системі доставки посилок.

// Посилка містить такі властивості:
// id: ціле число, яке не можна змінити
// weight: плаваюче значення
// dimensions: інтерфейс «Dimensions».
// description: необов'язкове значення
// sender: може зберігати ідентифікаційний номер відправника або повне ім'я
// status: enum `PackageStatus`
// deliver: функція
// statusName: геттер.

// 	Функція deliver() приймає логічний параметр isSuccess без значення, що повертається.
// 	Геттер statusName() повертає назву статусу посилки у вигляді рядка.
// 	Інтерфейс Dimensions складається з length, width та height, усі з яких можуть бути числами з плаваючою комою.

// 	Enum PackageStatus має такі можливі значення: Pending, InTransit, Delivered, Lost.

// Приклад роботи:
// const item: Parcel = {
//     id: 224,
//     weight: 22.5,
//     dimensions: {
//         length: 105,
//         width: 44,
//         height: 50.5
//     },
//     sender: "Nick Scot",
//     description: "Super power inside.",
//     status: PackageStatus.Pending,
//     deliver(isSuccess) { 
//         this.status = isSuccess 
//             ? PackageStatus.Delivered 
//             : PackageStatus.Lost; 
//     }, 
//     get statusName() { 
//         return PackageStatus[this.status]; 
//     }
// }

// item.deliver(true);
// console.log(item.statusName);  // Delivered

enum PackageStatus {
    Pending = "Pending",
    InTransit = "InTransit",
    Delivered = "Delivered",
    Lost = "Lost",
}

interface Dimensions {
    length: number;
    width: number;
    height: number;
}

interface Parcel {
    readonly id: number;
    weight: number;
    dimensions: Dimensions;
    description?: string;
    sender: string | number;
    status: PackageStatus;

    deliver(isSuccess: boolean): void;

    get statusName(): string;
}

const item: Parcel = {
    id: 224,
    weight: 22.5,
    dimensions: {
        length: 105,
        width: 44,
        height: 50.5
    },
    sender: "Nick Scot",
    description: "Super power inside.",
    status: PackageStatus.Pending,

    deliver(isSuccess) {
        this.status = isSuccess ? PackageStatus.Delivered : PackageStatus.Lost;
    },

    get statusName() {
        return this.status;
    }
};

item.deliver(true);
console.log(item.statusName);  


// Task 3*. Створіть класи, які моделюють базову систему управління користувачами з користувачем та адміністратором.
// 	Існує абстрактний клас User з наступними членами:
// id - унікальне ціле число, яке починається з 1000 і збільшується для кожного екземпляра користувача; не може бути змінено після ініціалізації
// email - адреса електронної пошти користувача
// password - пароль користувача, доступний лише всередині цього класу
// passwordPreview - геттер для паролю
// changePassword - метод, який отримує новий пароль і встановлює його в клас
// showProfile - пустий метод, який має бути реалізований у похідних класах
// 	Пароль користувача password  повинен містити щонайменше 6 символів, інакше вивести повідомлення: «Password too short!».
// 	Геттер passwordPreview повертає пароль, але показує тільки перший і останній символи, а всі інші символи замінюються символом '*'. Наприклад: «Qwerty» буде показано як “Q****y”.
// 	Існує також клас Admin, який розширює клас User і реалізує інтерфейс Printable . 
// 	Цей клас має булеву властивість isActive і реалізує метод showProfile, який виводить URL-адресу на консоль залежно від активного статусу:
// active: «https://softserve/profile/{user_id}»
// inactive: «https://softserve/login»
// 	Інтерфейс Printable має метод print, який використовується для виведення назви класу у консоль.

// Приклад роботи:
// const admin = new Admin('admin@gmail.com', 'Qwerty');

// admin.changePassword('Weak');
// console.log(admin.passwordPreview);

// admin.changePassword('Super-Pass');
// console.log(admin.passwordPreview);

// // Result:
// Password too short!
// Q••••y
// S••••••••s

abstract class User {
    static nextId = 1000; 
    readonly id: number;
    email: string;
    private _password: string = ''; 
    constructor(email: string, password: string) {
        this.id = User.nextId++;
        this.email = email;
        this.changePassword(password); 
    }


    get passwordPreview(): string {
        return this._password.length > 1
            ? this._password[0] + '****' + this._password[this._password.length - 1]
            : this._password;
    }


    changePassword(newPassword: string): void {
        if (newPassword.length < 6) {
            console.log('Password too short!');
        } else {
            this._password = newPassword;
        }
    }


    abstract showProfile(): void;
}


interface Printable {
    print(): void;
}


class Admin extends User implements Printable {
    isActive: boolean;

    constructor(email: string, password: string, isActive: boolean = true) {
        super(email, password);
        this.isActive = isActive; 
    }

showProfile(): void {
    let url: string;
    if (this.isActive) {
        url = `https://softserve/profile/${this.id}`;
    } else {
        url = 'https://softserve/login';
    }
    console.log(url);
}

    print(): void {
        console.log('Admin');
    }
}

const admin = new Admin('admin@gmail.com', 'Qwerty', true);
console.log(admin.passwordPreview); 
admin.changePassword('Weak');
console.log(admin.passwordPreview); 

admin.changePassword('Super-Pass');
console.log(admin.passwordPreview); 
admin.showProfile();
admin.print();