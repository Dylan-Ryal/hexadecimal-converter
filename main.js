//Converts a hexadecimal character to it's corresponding decimal value
const charToDecimal = (char) => {
    const hexValues = {A: 10, B: 11, C: 12, D: 13, E: 14, F: 15};
    if (isNaN(char)) {
        char = hexValues[char];
    } else {
        char = Number(char);
    }
    return char;
};

//Converts hexadecimal to decimal for every character in the array
const charArrayToDecimal = (chars) => chars.map(charToDecimal);

//Converts the array of decimal values to a rgb
const decimalToRGB = (nums) => {
    let rgbValues = [];
    for (let i = 0; i < nums.length; i += 2) {
        const value = (nums[i] * 16) + nums[i + 1];
        rgbValues.push(value);
    }
    return rgbValues;
};

//Inverts rgb values by subtracting them from the maximum rgb values
const invertRGB = (rgbValues) => {
    const invertedRGB = [...rgbValues];
    return invertedRGB.map(value => 255 - value);
};

//Sums two values
const reducer = (accumulator, currentValue) => accumulator + currentValue;

//Calculates and returns the average of the rgb values
const averageGray = (rgbValues) => {
    const average = rgbValues.reduce(reducer) / 3;
    return rgbValues.map(value => value = average);
};

//Formats the hexdecimal value for conversion
const input = '#A458E1';
const chars = input.split('');
chars.shift();

//Calls functions to convert the hexdecimal value to rgb
const nums = charArrayToDecimal(chars);
const rgbValues = decimalToRGB(nums);

//Logs the hexadecimal and rgb values
console.log(`${input} : (${rgbValues[0]}, ${rgbValues[1]}, ${rgbValues[2]})`);

//Calls the function to invert the rgb values
const invertedRGB = invertRGB(rgbValues);

//Logs the inverted rgb values
console.log(`Inverted: (${invertedRGB[0]}, ${invertedRGB[1]}, ${invertedRGB[2]})`);

//Calls the function to get the average rgb values
const averageRGB = averageGray(rgbValues);

//Logs the average rgb values
console.log(`Average Grayscale: (${averageRGB[0]}, ${averageRGB[1]}, ${averageRGB[2]})`);
