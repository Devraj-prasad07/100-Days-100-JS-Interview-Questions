//*---------------------------------------------------
//* Interview Question:
//*---------------------------------------------------

//? Write a function called checkTriangleType that takes three parameters representing the lengths of the sides of a triangle. The function should return a string indicating the type of triangle: "Equilateral","Isosceles",or "Scalene".

// todo the function should adhere to the following rules:
//? If all three sides are of equal length, return "Equilateral".
//? If two sides are of equal length, return "Isosceles".
//? If all sides are not equal length, return "Scalene".

const checkTriangleType = (a,b,c) =>{
    if(typeof a === "number" && typeof b ==="number" && typeof c === "number"){
        if(a === b && b === c){
            return "Equilateral";
        } else if (a === b || b === c || c === a){
            return "Isosceles";
        } else {
            return "Scalene"
        }
    } else {
        return "Please Add Number in the Given Parameters"
    }
}
console.log(checkTriangleType(1,1,1)); // Equilateral
console.log(checkTriangleType(1,2,1)); // Isosceles
console.log(checkTriangleType(1,2,3)); // Scalene