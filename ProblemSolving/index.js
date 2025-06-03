"use strict";
/* TASK 1: ARRAY FILTERING AND MAPPING
-CREATE AN ARRAY OF OBJECTS, EACH REPRESENTING A PERSON WITH PROPERTIES LIKE NAME, AGE, AND GENDER. WRITE A FUNCTION TO FILTER OUT ALL FEMALES AND THEN MAP THE REMAINING PEOPLE TO AN ARRAY OF NAMES. PRINT THE FINAL RESULT.
*/
const people = [
    { name: "Monica Geller", age: 28, gender: "female" },
    { name: "John Smith", age: 30, gender: "male" },
    { name: "Mili Brown", age: 22, gender: "female" },
    { name: "Mark Will", age: 35, gender: "male" },
];
const getMaleNames = (persons) => persons.filter((p) => p.gender === "male").map((p) => p.name);
console.log("Male Names Only:", getMaleNames(people));
const books = [
    { title: "Norwegian Wood", author: "Haruki Murakami", year: 1987 },
    { title: "Chuti", author: "Rabindranath Thakur", year: 1892 },
    { title: "Gone Girl", author: "Gillian Flynn", year: 2012 },
];
const getBookTitles = (bookArray) => bookArray.map((book) => book.title);
console.log("Book Titles Only:", getBookTitles(books));
/**
 * TASK 3: FUNCTION COMPOSITION
-WRITE THREE FUNCTIONS: ONE TO SQUARE A NUMBER, ONE TO DOUBLE A NUMBER, AND ONE TO ADD 5 TO A NUMBER. COMPOSE THESE FUNCTIONS TO CREATE A NEW FUNCTION THAT SQUARES A NUMBER, DOUBLES THE RESULT, AND THEN ADDS 5.
 */
const square = (n) => n * n;
const double = (n) => n * 2;
const addFive = (n) => n + 5;
const combinedFunction = (n) => addFive(double(square(n)));
console.log("Combined Result:", combinedFunction(3));
const cars = [
    { make: "Volvo", model: "XC70", year: 2025 },
    { make: "Volkswagen", model: "Tharu", year: 2018 },
    { make: "Toyota", model: "GR Corolla", year: 2022 },
];
const sortCarsByYear = (carArray) => carArray.sort((a, b) => a.year - b.year);
console.log("Sorted Array:", sortCarsByYear(cars));
/*
TASK 5: FIND AND MODIFY
-WRITE A FUNCTION THAT SEARCHES AN ARRAY OF OBJECTS FOR A SPECIFIC PERSON BY NAME. IF FOUND, MODIFY THEIR AGE PROPERTY. PRINT THE UPDATED ARRAY.
*/
const updatePersonAge = (arr, name, newAge) => {
    return arr.map((person) => person.name === name ? Object.assign(Object.assign({}, person), { age: newAge }) : person);
};
console.log("Updated People:", updatePersonAge(people, "John Smith", 26));
/*
TASK 6: ARRAY REDUCTION
-CREATE AN ARRAY OF NUMBERS. WRITE A FUNCTION THAT USES THE REDUCE METHOD TO CALCULATE THE SUM OF ALL EVEN NUMBERS IN THE ARRAY.
*/
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const sumOfEvenNumbers = (arr) => arr.reduce((sum, num) => (num % 2 === 0 ? sum + num : sum), 0);
console.log("Sum of Even Numbers:", sumOfEvenNumbers(numbers));
/*
TASK 7: UNIQUE VALUES
-CREATE AN ARRAY OF NUMBERS WITH SOME DUPLICATE VALUES. WRITE A FUNCTION TO FILTER OUT THE DUPLICATE VALUES AND RETURN A NEW ARRAY WITH ONLY UNIQUE NUMBERS. PRINT THE RESULT.
*/
const containsDuplicatesNumbers = [1, 2, 2, 3, 4, 4, 5, 6, 6, 7];
const uniqueValuesOnly = (arr) => {
    return [...new Set(arr)];
};
console.log("Unique Numbers Only:", uniqueValuesOnly(containsDuplicatesNumbers));
