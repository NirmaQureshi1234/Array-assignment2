// =========== part-2 ============
//Multi-Dimensional Arrays And Tuples-Student Grades
//Tast 1: 
//1.Define a typeScript type alias named student to represent a student with the following properties:
//. name(string):The name of the student.
//. grades(number[]):An array of grades for different subjects.

// type Students = { 

//     name: string;
//     grades: number[];
    
// }; 
  
//Task 2:
 //  2. Create an array named students containing at least three product objects. Each 
 //  student object should include a name, price, and an array of grades. 

// const student: Students[] = [
//     {
//         name: "samra",
//         grades: [85, 92, 88, 79]
//     },
//     {
//         name: "Kiran",
//         grades: [90, 85, 83, 89]
//     },
//     {
//         name: "Wajhiha",
//         grades: [78, 81, 75, 80]
//     }
// ]; 
// console.log(student)
// //Task 3: 
// 3. Implement a function named calculateAverageGrades that takes a student's grades as input and returns the average grade for that student. This function should update the color property of the product and
 
// function calculateAverageGrades(grades: number[]): number {
//     const total = grades.reduce((sum, grade) => sum + grade, 0);
//     return total / grades.length;
// } console.log(calculateAverageGrades)  

// //Task 4: Display Each Student's Name and Average Grade
// //Iterate through the students array, calculate the average grade for each student using the calculateAverageGrades function, and print their name and average grade.

// Define the Student type alias
// type Student = {
//     name: string;
//     grades: number[];
// };

// // Create an array of students
// const students: Student[] = [
//     {
//         name: "Naila",
//         grades: [85, 92, 88, 79]
//     },
//     {
//         name: "Sania",
//         grades: [90, 85, 83, 89]
//     },
//     {
//         name: "Amna",
//         grades: [78, 81, 75, 80]
//     }
// ]; 
// console.log(students)

// // Implement the calculateAverageGrades function
// function calculateAverageGrades(grades: number[]): number {
//     const total = grades.reduce((sum, grade) => sum + grade, 0);
//     return total / grades.length;
// }

// // Display each student's name and average grade
// students.forEach(student => {
//     const averageGrade = calculateAverageGrades(student.grades);
//     console.log(`Student: ${student.name}, Average Grade: ${averageGrade.toFixed(2)}`);
// });
