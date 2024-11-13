/*Task 1. Заданий об’єкт user, який представляє інформацію про користувача, включаючи його ім’я, контактні дані та адресу. Напишіть функцію gettUserInfo(obj), яка приймає цей об’єкт obj, як параметр і використовує деструктурування для отримання певних деталей. 
Функція повинна витягнути властивості firstName, lastName, email, phone та city з об’єкта і повернути новий об’єкт, що містить лише ці витягнуті властивості.
const user = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  contact: {
    email: "john.doe@example.com",
    phone: "123-456-7890"
  },
  address: {
    city: "New York",
    country: "USA"
  }
};
Результат роботи програми:
	{ 
 firstName: "John",
  lastName: "Doe", 
  email: "john.doe@example.com", 
  phone: "123-456-7890", 
  city: "New York" 
}

*/
const user = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    contact: {
      email: "john.doe@example.com",
      phone: "123-456-7890"
    },
    address: {
      city: "New York",
      country: "USA"
    }
  };
  
  function gettUserInfo(obj) {
    const {
      firstName,
      lastName,
      contact: { email, phone },
      address: { city }
    } = obj;
  
    return { firstName, lastName, email, phone, city };
  }
  
  console.log(gettUserInfo(user));
// - - - - - - - - - - - - - - - - - - - -

/*
Task 2. Вам задано масив авто, і вам потрібно підрахувати, скільки разів кожне авто зустрічається у масиві. Використовуйте колекцію Map(), щоб зберігати кожне унікальне авто як ключ, а кількість його входжень - як значення.
	Реалізуйте функцію countCars(cars), яка отримує на вхід масив автівок cars. Функція використовує Map() для підрахунку входжень кожного авто і повертає мапу з кожним авто та кількістю його входжень.

Приклад застосування:
const cars = ["BMW", "Opel", "Audi", "VW", "Toyota", "BMW", "VW", "Nissan", "BMW"];
console.log(countCars(cars));
Результат:
Map(6) {
  'BMW' => 3,
  'Opel' => 1,
  'Audi' => 1,
  'VW' => 2,
  'Toyota' => 1,
  'Nissan' => 1
}
*/
function countCars(cars) {
    const carCount = new Map();

    cars.forEach(car => {
        if (carCount.has(car)) {
            carCount.set(car, carCount.get(car) + 1);
        } else {
            carCount.set(car, 1);
        }
    });

    return carCount;
}

const cars = ["BMW", "Opel", "Audi", "VW", "Toyota", "BMW", "VW", "Nissan", "BMW"];
console.log(countCars(cars));
// - - - - - - - - - - - - - - - - - - - -





/*
Task 3. Реалізуйте функцію логування checkLogin(username, password), яка імітує перевірку імені користувача username та пароля password. Якщо надані облікові дані збігаються, вона повинна завершити роботу з привітальним повідомленням. Якщо вони не збігаються, вона повинна відхилити запит з повідомленням про помилку.
	Функція повертає Promise, який завершується повідомленням «Welcome, username!», якщо ім'я користувача «admin» і пароль «qwerty123456».
Або відхиляється з повідомленням «Invalid username or password!», якщо облікові дані не збігаються. Час логування становить 2 сек.

Приклад застосування:
checkLogin("admin", "qwerty123456")
  .then((message) => console.log(message))
  .catch((error) => console.log(error));
Вивід в консолі через 2 сек:
	Welcome, admin!



*/


    async function checkLogin (username, password) {

        const loginPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                if (username === "admin" && password === "qwerty123456") {
                    resolve(`Welcome, ${username}!`);
                } else {
                    reject("Invalid username or password!");
                }
            }, 2000);
        });
    
        try {
            const message = await loginPromise; 
            console.log(message);              
        } catch (error) {
            console.log(error);         
        }
    };
    
   
    checkLogin("admin", "qwerty123456"); 
    checkLogin("user", "wrongpassword"); 
// - - - - - - - - - - - - - - - - - - - -


/*
Task 4. Ви розробляєте додаток для соціальних мереж, який отримує дані з двох асинхронних функцій: одна з них завантажує профіль користувача, а інша - його дописи. Ви хочете отримати обидві частини інформації послідовно для відображення на сторінці профілю користувача.
	Реалізуйте функцію loadUserProfile(userId), яка отримує один аргумент ідентифікатор користувача userId.
	Використовує асинхронні функції fetchUserProfile() і fetchUserPosts() (задані нижче) для отримання даних профілю і постів.
	Повертає об'єкт, що містить дві властивості:
profile - дані з fetchUserProfile
posts - дані з fetchUserPosts.
Якщо виникає помилка в будь-якій з функцій, loadUserProfile повинна обробити помилку і повернути повідомлення: «Error loading user data».

Приклад застосування:
async function fetchUserProfile(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ userId, name: "John Doe", age: 30 });
    }, 1000);
  });
}

async function fetchUserPosts(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { postId: 1, content: "Hello, world!" },
        { postId: 2, content: "Loving this app!" }
      ]);
    }, 2000);
  });
}

loadUserProfile(1)
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

Вивід в консолі через 3 сек:
	{
  profile: { userId: 1, name: 'John Doe', age: 30 },
  posts: [
    { postId: 1, content: 'Hello, world!' },
    { postId: 2, content: 'Loving this app!' }
  ]
}
*/
async function loadUserProfile(userId) {
    try {
        const profile = await fetchUserProfile(userId);
        const posts = await fetchUserPosts(userId);

        return { profile, posts };
    } catch (error) {
        return "Error loading user data";
    }
}

 function fetchUserProfile(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ userId, name: "John Doe", age: 30 });
        }, 1000); 
    });
}

 function fetchUserPosts(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { postId: 1, content: "Hello, world!" },
                { postId: 2, content: "Loving this app!" }
            ]);
        }, 2000); 
    });
}


loadUserProfile(5)
    .then((data) => console.log(data))
    .catch((error) => console.log(error));

// - - - - - - - - - - - - - - - - - - - -

/*
Task 5*. У вас є кошик, представлений у вигляді масиву об'єктів товарів. Кожен об'єкт містить унікальний ідентифікатор, назву, ціну та кількість. Коли користувачі додають нові товари до свого кошика, вам може знадобитися оновити кількість існуючих товарів або додати нові товари, якщо вони ще не існують.
	Реалізуйте функцію updateCart(cart, newItem), яка отримує два параметри:
cart - масив об'єктів товарів у поточному кошику
newItem - об'єкт товару, що представляє товар, який користувач хоче додати або оновити в кошику.
Функція повинна:
перевірити, чи існує в кошику товар з таким самим ідентифікатором, що і newItem
якщо існує, збільшити кількість існуючого товару на кількість, вказану в newItem
якщо його не існує, додайте новий елемент до кошика
повертає оновлений масив кошика, не змінюючи оригінальний масив кошика.

Приклади застосування:
const cart = [
  { id: 1, name: "Laptop", price: 1200, quantity: 1 },
  { id: 2, name: "Smartphone", price: 800, quantity: 2 },
];
Приклад 1:
console.log(
  updateCart(cart, { id: 2, name: "Smartphone", price: 800, quantity: 1 })
);
Результат роботи в консолі:
[
  { id: 1, name: 'Laptop', price: 1200, quantity: 1 },
  { id: 2, name: 'Smartphone', price: 800, quantity: 3 }
]
Приклад 2:
console.log(
  updateCart(cart, { id: 3, name: "Tablet", price: 600, quantity: 1 })
);
Результат роботи в консолі:
[
  { id: 1, name: 'Laptop', price: 1200, quantity: 1 },
  { id: 2, name: 'Smartphone', price: 800, quantity: 2 },
  { id: 3, name: 'Tablet', price: 600, quantity: 1 }
]


*/

function updateCart(cart, newItem) {
    const itemIndex = cart.findIndex(item => item.id === newItem.id);

    if (itemIndex !== -1) {
        cart[itemIndex].quantity += newItem.quantity;
    } else {
        cart.push(newItem);
    }

    return cart;




}
const cart = [
    { id: 1, name: "Laptop", price: 1200, quantity: 1 },
    { id: 2, name: "Smartphone", price: 800, quantity: 2 },
  ];

console.log(
    updateCart(cart, { id: 2, name: "Smartphone", price: 800, quantity: 1 })
  );

  console.log(
    updateCart(cart, { id: 3, name: "Tablet", price: 600, quantity: 1 })
  );

// - - - - - - - - - - - - - - - - - - - -