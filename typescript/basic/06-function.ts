const sum = (x: number, y: number): number => {
    return 50
}

console.log(sum(2, 5))

// find the largest number from 2 numbers
//  and return the string saying largest number is ---

/*
    cosnt largest = (num1,num2) =>{
        logic gose here

        return "largest number is num2" + num2
    }

*/

const largest = (num1: number, num2: number): string => {
    return num1 > num2
        ? "largest value is num1 " + num1
        : "largest value is num2 " + num2
}