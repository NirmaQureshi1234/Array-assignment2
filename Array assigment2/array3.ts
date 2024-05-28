 
// =========== part- 3 ============ 
//Step 1:
//Define a type alias named Employee with the following properties.// • name (string): The name of the employee.
// • hoursWorked (number): The number of hours the employee worked.
// • hourlyRate (number): The hourly rate of the employee.
// • salary (number): The base salary of the employee. 
// type Employee = { 
//   name: string;
//   hoursWorked: number;
//   hourlyRate: number;
//   salary: number;
// }; 

// //Step 2: Define an Array of Employees
//Each employee object should include a name, hoursWorked, hourlyRate, and salary.
 
// const employees: Employee[] = [
//   { name: "Alice", hoursWorked: 25, hourlyRate: 15, salary: 500 },
//   { name: "Bob", hoursWorked: 18, hourlyRate: 20, salary: 600 },
//   { name: "Charlie", hoursWorked: 30, hourlyRate: 25, salary: 800 },
// ];console.log(employees) 
 

// //Step 3: Implement the calculateSalary Function
// //Implement a function named calculateSalary that calculates the salary for each employee based on the hours worked and hourly rate. If an employee has worked 20 hours or more, apply a 10% bonus to their salary.
// function calculateSalary(employee: Employee): number {
//   let totalSalary = employee.hoursWorked * employee.hourlyRate;
  
//   if (employee.hoursWorked >= 20) {
//     totalSalary += totalSalary * 0.10; // Apply 10% bonus
//   }
  
//   return totalSalary;
// } 
// console.log(calculateSalary) 

//Step 4: Calculate and Print the Salaries
// 4. If an empolyee has worked 20 hours or more, apply a 10% bonus to their salary*/Step 1: Define the Employee Type Alias
  
// Step 1: Define the Employee type alias
// type Employees = {
//   name: string;
//   hoursWorked: number;
//   hourlyRate: number;
//   salary: number;
// };

// // Step 2: Define an array of employees
// const employees: Employees[] = [
//   { name: "Aman", hoursWorked: 25, hourlyRate: 15, salary: 500 },
//   { name: "Fatima", hoursWorked: 18, hourlyRate: 20, salary: 600 },
//   { name: "Sonia", hoursWorked: 30, hourlyRate: 25, salary: 800 },
// ];console.log(employees)

// // Step 3: Implement the calculateSalary function
// function calculateSalary(employee: Employees): number {
//   let totalSalary = employee.hoursWorked * employee.hourlyRate;
  
//   if (employee.hoursWorked >= 20) {
//     totalSalary += totalSalary * 0.10; // Apply 10% bonus
//   }
  
//   return totalSalary;
// }

// // Step 4: Calculate and print the salaries
// employees.forEach(employee => {
//   const calculatedSalary = calculateSalary(employee);
//   console.log(`${employee.name}'s calculated salary: $${calculatedSalary.toFixed(2)}`);
// });
// //This code defines the required type alias, initializes an array of employee objects, implements the salary calculation logic, and prints the calculated salaries for each employee, applying the 10% bonus where applicable.

//made by nirma qureshi complete array assignment 




 
 
