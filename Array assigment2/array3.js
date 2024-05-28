//1.Define a type alias named Employee with the following prperties: 
// • name (string): The name of the employee.
// • hoursWorked (number): The number of hours the employee worked.
// • hourlyRate (number): The hourly rate of the employee.
// • salary (number): The base salary of the employee.
// 2. Define an array named employee containing employee objects. Each
// employee object should include a name, hoursWorked, hourlyRate, and salary.
// 3. Implement a function named calculateSalary that calculate the salary for each employee base on the hours worked and hourly rate.
// 4. If an empolyee has worked 20 hours or more, apply a 10% bonus to their salary*/Step 1: Define the Employee Type Alias
// Step 2: Define an array of employees
var employees = [
    { name: "Alice", hoursWorked: 25, hourlyRate: 15, salary: 500 },
    { name: "Bob", hoursWorked: 18, hourlyRate: 20, salary: 600 },
    { name: "Charlie", hoursWorked: 30, hourlyRate: 25, salary: 800 },
];
// Step 3: Implement the calculateSalary function
function calculateSalary(employee) {
    var totalSalary = employee.hoursWorked * employee.hourlyRate;
    if (employee.hoursWorked >= 20) {
        totalSalary += totalSalary * 0.10; // Apply 10% bonus
    }
    return totalSalary;
}
// Step 4: Calculate and print the salaries
employees.forEach(function (employee) {
    var calculatedSalary = calculateSalary(employee);
    console.log("".concat(employee.name, "'s calculated salary: $").concat(calculatedSalary.toFixed(2)));
});
//This code defines the required type alias, initializes an array of employee objects, implements the salary calculation logic, and prints the calculated salaries for each employee, applying the 10% bonus where applicable.
