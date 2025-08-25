let inventory = [
    {id: 1, name: "Apple", price: 0.5, quantity: 200},
    {id: 2, name: "Banana", price: 0.3, quantity: 150},
    {id: 3, name: "Cherry", price: 0.9, quantity: 50}
];


// 1. Получите все продукты и выведите их названия на консоль.

// 1.1
// for (const {name: fruitName} of inventory) {
//     console.log(fruitName);
// }

// 1.2
// for (let i = 0; i < inventory.length; i++) {
//     console.log(inventory[i].name);
// }

// 1.3
// const products = inventory.map(element => element.name);
// console.log(products)

// 1.4
// const allProducts = inventory.map(product => product.name).join(', ');
// console.log(`Продукты на складе: ${allProducts}.`);


// 2. Напишите функцию updateInventory(productId, amount), которая обновляет количество определенного ID товара.
// Количество может быть положительным (добавление к инвентарю) или отрицательным (вычитание из инвентаря).
// Убедитесь, что функция не позволяет инвентарю опуститься ниже 0.

// 2.1
// function updateInventory(productId, amount) {
//     let product = inventory.find(item => item.id === productId);
//
//     if (!product) {
//         console.log(`Товар с ID ${productId} не найден.`);
//         return;
//     }
//     const productName = product.name;
//     let newAmount = product.quantity + amount;
//
//     product.quantity = Math.max(0, product.quantity + amount);
//
//     if (newAmount < 0) {
//         console.log(`Количество товара: ${productName} не может быть отрицательным`)
//     } else {
//         console.log(`Количество товара ${productName} изменено на ${newAmount}`);
//     }
// }

// 2.2
// let updateInventory = (productId, amount) => {
//     let product = inventory.find(item => item.id === productId);
//
//     if (product) {
//         product.quantity = Math.max(0, product.quantity + amount);
//     } else {
//         console.log(`Товар с ID ${productId} не найден в инвентаре.`);
//     }
// }
//
// updateInventory(2, -300);
// console.log(inventory);


// 3. Поиск товаров с низким запасом. Напишите функцию findLowStock(threshold), которая возвращает массив названий товаров, количество которых ниже определенного порога.

// 3.1
// function findLowStock(threshold) {
//     let inventoryName = [];
//
//     inventory.find((element) => {
//         if (element.quantity < threshold) {
//             inventoryName.push(element.name);
//         }
//     })
//     return inventoryName;
// }

// console.log(findLowStock(200));

// 3.2
// let findLowStock = (threshold) => {
//     return inventory
//         .filter(item => item.quantity < threshold)
//         .map(item => item.name);
// };
//
// console.log(findLowStock(200));

// 4. Меняем на объект и теперь нужно выполнить используя Object.entries() для работы с ключом и данными каждого товара.

// let inventory = {
//     Apple: 200,
//     Banana: 150,
//     Cherry: 50
// };
//
// console.log(Object.entries(inventory));


// 5. Вычислить общую стоимость запасов: Напишите функцию totalInventoryValue(), которая вычисляет и возвращает общую стоимость запасов.

// let inventory = {
//     Apple: 200,
//     Banana: 150,
//     Cherry: 50
// };

// Общее кол-во запасов:
// function totalInventoryValue() {
//     const inventoryVal = Object.values(inventory);
//     let total = 0;
//
//     for (const num of inventoryVal) {
//         total += num;
//     }
//     return total;
// }


// Правильное задание и решение:
// let totalInventoryValue = () => {
//     return inventory.reduce((a, b) => {
//         return a + (b.price * b.quantity)
//     }, 0);
// }
//
// console.log(totalInventoryValue());
