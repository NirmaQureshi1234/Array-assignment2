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
//     name: "laptop",
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
// Create an array of students
var students = [
    {
        name: "Alice",
        grades: [85, 92, 88, 79]
    },
    {
        name: "Bob",
        grades: [90, 85, 83, 89]
    },
    {
        name: "Charlie",
        grades: [78, 81, 75, 80]
    }
];
console.log(students);
// Implement the calculateAverageGrades function
function calculateAverageGrades(grades) {
    var total = grades.reduce(function (sum, grade) { return sum + grade; }, 0);
    return total / grades.length;
}
// Display each student's name and average grade
students.forEach(function (student) {
    var averageGrade = calculateAverageGrades(student.grades);
    console.log("Student: ".concat(student.name, ", Average Grade: ").concat(averageGrade.toFixed(2)));
}); 
  
//made by nirma qureshi
 //continoue questions next file see...........
