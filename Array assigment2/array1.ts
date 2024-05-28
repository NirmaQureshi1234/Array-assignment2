 //====================ARRAY ASSIGNMENT 2=============
   // =========== part-1 :BASIC ARRAY ============
/*
1. Define a type alias named Product to represent a product with the following
properties:
• name (string): The name of the product.
• price (number): The price of the product.
• inventory (object): An object containing inventory details including:
• stock (number): The number of products available.
• colorOptions (string[ ]): An array listing available colors.
2. Create an array named products containing at least three product objects. Each
product object should include a name, price, and inventory details.
3. Implement a function named changeColor that takes a product object and a new
color as input. This function should update the color property of the product and
adjust the price based on the new color (implement your own logic, e.g., increase by
10% for red, decrease by 5% for blue).
4. Display each product's name, price, stock, and available colors. Iterate through the
products array and print each product's details.*/
// var products = [{
//     name: "LED",
//     price: 40000,
//     inventory: {
//         stock: 2000,
//         coloroption: ["black", "white"],
//     }
// },
// {
//     name: "smartphone",
//     price: 30000,
//     inventory: {
//         stock: 4000,
//         coloroption: ["blue", "black"],
//     }
// },
// {
//     name: "pc",
//     price: 30000,
//     inventory: {
//         stock: 1000,
//         coloroption: ["silver", "black"],
//     }
// },
// ];



 
// function changeColor(products, newcolor) {
// products.inventory.coloroption.push(newcolor);
// if (newcolor === "blue") {
//     products.price += products.price * 0.15;
// }
// else if (newcolor === "red") {
//     products.price -= products.price * 0.05;
// }
// else if (newcolor === "purple") {
//     products.price += products.price * 0.95;
// }
// else if (newcolor === "silver") {
//     products.price -= products.price * 0.10;
// }
// else {
//     console.log(" sorry ! this ".concat(newcolor, " is not available"));
// }
// }
// function displayproductdetails(product) {
// product.forEach(function (products) {
//     console.log("Name:".concat(products.name));
//     console.log("Price: ".concat(products.price));
//     console.log("Stock: ".concat(products.inventory.stock));
//     console.log("Available color :".concat(products.inventory.coloroption));
// });
// }
// changeColor(products[0], "blue");
// changeColor(products[1], "red");
// changeColor(products[2], "purple");
// displayproductdetails(products); 
 
 
// var employee = [{
//     name: "samra",
//     hoursWorked: 24,
//     hourlyRate: 45,
//     salary:"0",
// },
// {
//     name: "nimra",
//     hoursWorked: 23,
//     hourlyRate: 75,
//     salary:" 0",
// },
// {
//     name: "khani",
//     hoursWorked: 20,
//     hourlyRate: 85,
//     salary:"0",
// },
// ];
// function calculatesalary(employee) {
// employee.forEach(function (employee) {
//     employee.salary = employee.hoursWorked * employee.hourlyRate;
//     if (employee.hoursWorked >= 20) {
//         employee.salary *= 1.20;
//         console.log("bonusgiven");
//     }
// });
// }
// calculatesalary(employee);
// console.log(employee); 

// employee.forEach(function (employee)  
//      { return
//              (console.log("Employee:".concat(employee.name),"salary:".concat(employee.salary)))});

            
//               var student = [{
//     name: "sara",
//     grades: [86, 90, 91],
// },
// {
//     name: "Ali",
//     grades: [75, 78, 95],
// },
// {
//     name: "Areeba",
//     grades: [88, 86, 99],
// }
// ];
 
// function calculateaveragegrade(grades) {
// var total = 0;
// for (var _i = 0, grades_1 = grades; _i < grades_1.length; _i++) {
//     var grade = grades_1[_i];
//     total += grade;
// }
// return total / grades.length;
// }
// student.forEach(function (student) {
// var averagegrade = calculateaveragegrade(student.grades);
// console.log("".concat(student.name, ": Average grade =").concat(averagegrade.toFixed(2)));
// }); 
 
