/* TASK 1: ARRAY FILTERING AND MAPPING
-CREATE AN ARRAY OF OBJECTS, EACH REPRESENTING A PERSON WITH PROPERTIES LIKE NAME, AGE, AND GENDER. WRITE A FUNCTION TO FILTER OUT ALL FEMALES AND THEN MAP THE REMAINING PEOPLE TO AN ARRAY OF NAMES. PRINT THE FINAL RESULT.
*/

type Person = { name: string; age: number; gender: "male" | "female" };

const people: Person[] = [
	{ name: "Monica Geller", age: 28, gender: "female" },
	{ name: "John Smith", age: 30, gender: "male" },
	{ name: "Mili Brown", age: 22, gender: "female" },
	{ name: "Mark Will", age: 35, gender: "male" },
];

const getMaleNames = (persons: Person[]): string[] =>
	persons.filter((p) => p.gender === "male").map((p) => p.name);

console.log("Male Names Only:", getMaleNames(people));

/* TASK 2: OBJECT MANIPULATION
-CREATE AN ARRAY OF OBJECTS REPRESENTING BOOKS WITH PROPERTIES LIKE TITLE, AUTHOR, AND YEAR. WRITE A FUNCTION THAT TAKES THE ARRAY AND RETURNS A NEW ARRAY WITH ONLY THE BOOK TITLES. PRINT THE RESULT.
*/
type Book = { title: string; author: string; year: number };

const books: Book[] = [
	{ title: "Norwegian Wood", author: "Haruki Murakami", year: 1987 },
	{ title: "Chuti", author: "Rabindranath Thakur", year: 1892 },
	{ title: "Gone Girl", author: "Gillian Flynn", year: 2012 },
];

const getBookTitles = (bookArray: Book[]): string[] =>
	bookArray.map((book) => book.title);

console.log("Book Titles Only:", getBookTitles(books));

/**
 * TASK 3: FUNCTION COMPOSITION
-WRITE THREE FUNCTIONS: ONE TO SQUARE A NUMBER, ONE TO DOUBLE A NUMBER, AND ONE TO ADD 5 TO A NUMBER. COMPOSE THESE FUNCTIONS TO CREATE A NEW FUNCTION THAT SQUARES A NUMBER, DOUBLES THE RESULT, AND THEN ADDS 5.
 */

const square = (n: number): number => n * n;
const double = (n: number): number => n * 2;
const addFive = (n: number): number => n + 5;

const combinedFunction = (n: number): number => addFive(double(square(n)));

console.log("Combined Result:", combinedFunction(3));

/**
 * TASK 4: SORTING OBJECTS
-CREATE AN ARRAY OF OBJECTS REPRESENTING CARS WITH PROPERTIES LIKE MAKE, MODEL, AND YEAR. WRITE A FUNCTION TO SORT THE ARRAY OF CARS BY THE YEAR OF MANUFACTURE IN ASCENDING ORDER. PRINT THE SORTED ARRAY.
*/
type Car = { make: string; model: string; year: number };

const cars: Car[] = [
	{ make: "Volvo", model: "XC70", year: 2025 },
	{ make: "Volkswagen", model: "Tharu", year: 2018 },
	{ make: "Toyota", model: "GR Corolla", year: 2022 },
];

const sortCarsByYear = (carArray: Car[]): Car[] =>
	carArray.sort((a, b) => a.year - b.year);

console.log("Sorted Array:", sortCarsByYear(cars));

/*
TASK 5: FIND AND MODIFY
-WRITE A FUNCTION THAT SEARCHES AN ARRAY OF OBJECTS FOR A SPECIFIC PERSON BY NAME. IF FOUND, MODIFY THEIR AGE PROPERTY. PRINT THE UPDATED ARRAY.
*/

const updatePersonAge = (
	arr: Person[],
	name: string,
	newAge: number
): Person[] | void => {
	if (!Array.isArray(arr)) return;

	const personToUpdate = arr.find((person) => person.name === name);
	if (personToUpdate) {
		personToUpdate.age = newAge;
		// console.log("Updated array:", arr);
		return arr;
	}
};

// console.log("Updated People:", updatePersonAge(people, "John Smith", 26));

/*
TASK 6: ARRAY REDUCTION
-CREATE AN ARRAY OF NUMBERS. WRITE A FUNCTION THAT USES THE REDUCE METHOD TO CALCULATE THE SUM OF ALL EVEN NUMBERS IN THE ARRAY.
*/
const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8];

const sumOfEvenNumbers = (arr: number[]): number =>
	arr.reduce((sum, num) => (num % 2 === 0 ? sum + num : sum), 0);

console.log("Sum of Even Numbers:", sumOfEvenNumbers(numbers));

/*
TASK 7: UNIQUE VALUES
-CREATE AN ARRAY OF NUMBERS WITH SOME DUPLICATE VALUES. WRITE A FUNCTION TO FILTER OUT THE DUPLICATE VALUES AND RETURN A NEW ARRAY WITH ONLY UNIQUE NUMBERS. PRINT THE RESULT.
*/
const containsDuplicatesNumbers: number[] = [1, 2, 2, 3, 4, 4, 5, 6, 6, 7];
const uniqueValuesOnly = (arr: number[]): number[] => {
	return [...new Set(arr)];
};

// console.log(
// 	"Unique Numbers Only:",
// 	uniqueValuesOnly(containsDuplicatesNumbers)
// );

/*
TASK 8. CAPITALIZE FIRST LETTER OF EACH WORD
*/
function capitalizeWords(str: string): string {
	return str.replace(/\b\w/g, (char) => char.toUpperCase());
}

// console.log(capitalizeWords("hello world"));

/*
TASK 9. FIND FIRST NON-REPEATING CHARACTER
*/
function firstNonRepeat(str: string): string | null {
	for (let char of str) {
		if (str.indexOf(char) === str.lastIndexOf(char)) return char;
	}
	return null;
}
console.log(firstNonRepeat("keep"));

/*
TASK 10. FIND DUPLICATES IN AN ARRAY
*/
function findDuplicates(arr: number[]): number[] | unknown {
	const seen = new Set();
	const duplicates = new Set();
	for (let num of arr) {
		seen.has(num) ? duplicates.add(num) : seen.add(num);
	}
	return Array.from(duplicates);
}

// console.log(findDuplicates([1, 2, 2, 3, 4, 5]));

/*
TASK 11: FLATTEN NESTED ARRAYS
*/

function flattenArray(arr: any[]): any[] {
	return arr.reduce((flat, curr) => flat.concat(curr), []);
}
console.log(flattenArray([1, 2, [3, 4], [5, 6]])); // [1, 2, 3, 4, 5, 6]

/*
TASK 12: COUNT OCCURRENCES OF EACH ELEMENT
*/
function countOccurrences(arr: string[]): Record<string, number> {
	return arr.reduce((acc, val) => {
		acc[val] = (acc[val] || 0) + 1;
		return acc;
	}, {} as Record<string, number>);
}
console.log(countOccurrences(["a", "b", "a", "c", "b", "a"]));
// { a: 3, b: 2, c: 1 }

/*
TASK 13: REMOVE FALSY VALUES
*/

function removeFalsy(arr: any[]): any[] {
	return arr.filter(Boolean);
}
console.log(removeFalsy([0, "hello", false, "", 42, null, "JS", undefined])); // ["hello", 42, "JS"]

/*
TASK 14: CHUNK AN ARRAY INTO SMALLER ARRAYS
*/
function chunkArray<T>(arr: T[], size: number): T[][] {
	const result: T[][] = [];
	for (let i = 0; i < arr.length; i += size) {
		result.push(arr.slice(i, i + size));
	}
	return result;
}
console.log(chunkArray([1, 2, 3, 4, 5, 6], 2)); // [[1,2],[3,4],[5,6]]

/*
TASK 15: FIND MAX AND MIN WITHOUT USING MATH
*/
function findMinMax(arr: number[]): { min: number; max: number } {
	let min = arr[0],
		max = arr[0];
	for (let num of arr) {
		if (num < min) min = num;
		if (num > max) max = num;
	}
	return { min, max };
}
console.log(findMinMax([2, 5, 1, 9, -3, 7])); // { min: -3, max: 9 }

/*
TASK 16: REVERSE EACH WORD IN A STRING
*/
function reverseWords(str: string): string {
	return str
		.split(" ")
		.map((word) => word.split("").reverse().join(""))
		.join(" ");
}
console.log(reverseWords("JavaScript is fun")); // tpircSavaJ si nuf

/*
TASK 17: FIND COMMON ELEMENTS BETWEEN TWO ARRAYS
*/
function findCommonElements(arr1: number[], arr2: number[]): number[] {
	return arr1.filter((val) => arr2.includes(val));
}
console.log(findCommonElements([1, 2, 3, 4], [3, 4, 5, 6])); // [3,4]

/*
TASK 18: CONVERT STRING TO CAMEL CASE
*/
function toCamelCase(str: string): string {
	return str
		.split(/[-_ ]+/)
		.map((word, index) =>
			index === 0 ? word.toLowerCase() : word[0].toUpperCase() + word.slice(1)
		)
		.join("");
}
console.log(toCamelCase("hello-world_js string")); // helloWorldJsString

/*
TASK 19: FIND SECOND LARGEST NUMBER
*/
function secondLargest(arr: number[]): number | null {
	const uniqueSorted = Array.from(new Set(arr)).sort((a, b) => b - a);
	return uniqueSorted[1] ?? null;
}
console.log(secondLargest([1, 2, 3, 4, 4, 5])); // 4
