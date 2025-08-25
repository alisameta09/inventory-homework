// let inventory = [
//     {id: 1, name: "Apple", price: 0.5, quantity: 200},
//     {id: 2, name: "Banana", price: 0.3, quantity: 150},
//     {id: 3, name: "Cherry", price: 0.9, quantity: 50}
// ];


// 1. Получите все продукты и выведите их названия на консоль.

// for (const {name: fruitName} of inventory) {
//     console.log(fruitName);
// }

// const products = inventory.map((element) => {
//     return element.name;
// })

// console.log(products)


// 2. Напишите функцию updateInventory(productId, amount), которая обновляет количество определенного ID товара.
// Количество может быть положительным (добавление к инвентарю) или отрицательным (вычитание из инвентаря).
// Убедитесь, что функция не позволяет инвентарю опуститься ниже 0.

// function updateInventory(productId, amount) {
//     const productIndex = inventory.findIndex(product => product.id === productId);
//
//     if (productIndex !== -1) {
//         const productName = inventory[productIndex].name;
//         let newAmount = inventory[productIndex].quantity + amount;
//
//         if (newAmount < 0) {
//             newAmount = 0;
//         }
//         console.log(`Количество товара ${productName} изменено на ${newAmount}`);
//     } else {
//         console.log(`Товар с ID ${productId} не найден.`);
//     }
// }
//
// updateInventory(3, -300);


// 3. Поиск товаров с низким запасом. Напишите функцию findLowStock(threshold), которая возвращает массив названий товаров, количество которых ниже определенного порога.

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
//
// function totalInventoryValue() {
//     const inventoryVal = Object.values(inventory);
//     let total = 0;
//
//     for (const num of inventoryVal) {
//         total += num;
//     }
//     return total;
// }
//
// console.log(totalInventoryValue());
