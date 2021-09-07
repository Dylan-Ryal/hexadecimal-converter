class Converter {

    constructor(inputHex, threshold) {
        this._hex = inputHex.split('');
        this._hex.shift();
        this._decimal = this.hexArrayToDecimal();
        this._rgb = this.decimalToRGB();
        this._invRGB = this.invertRGB();
        this._grey = this.averageGrey();
        this._bw = this.thresholdBW(threshold);
    }

    //Getters and Setters

    //Converts a hexadecimal character to it's corresponding decimal value
    charToDecimal (char) {
        const hexValues = {A: 10, B: 11, C: 12, D: 13, E: 14, F: 15};
        if (isNaN(char)) {
            char = hexValues[char];
        } else {
            char = Number(char);
        }
        return char;
    };

    //Converts hexadecimal to decimal for every character in the array
    hexArrayToDecimal() {
        return this._hex.map(this.charToDecimal);
    }

    //Converts the array of decimal values to a rgb
    decimalToRGB() {
        let rgbValues = [];
        for (let i = 0; i < this._decimal.length; i += 2) {
            const value = (this._decimal[i] * 16) + this._decimal[i + 1];
            rgbValues.push(value);
        }
        return rgbValues;
    };

    //Inverts rgb values by subtracting them from the maximum rgb values
    invertRGB() {
        return this._rgb.map(value => 255 - value);
    };

    //Calculates and returns the average of the rgb values
    averageGrey() {
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        const average = this._rgb.reduce(reducer) / 3;
        return this._rgb.map(value => value = average);
    };

    //Calculate the threshold value and returns black or white rgb values depending on the average rgb values
    thresholdBW(thresholdPercent) {
        const threshold = Math.floor((thresholdPercent / 100) * 255);
        const color = this._grey[0] >= threshold ? 255 : 0;
        return this._grey.map(value => value = color);
    }
}


const input = '#A458E1';
const conv = new Converter(input, 75);

console.log(`${input} : (${conv._rgb[0]}, ${conv._rgb[1]}, ${conv._rgb[2]})`);
console.log(`Inverted: (${conv._invRGB[0]}, ${conv._invRGB[1]}, ${conv._invRGB[2]})`);
console.log(`Average Grayscale: (${conv._grey[0]}, ${conv._grey[1]}, ${conv._grey[2]})`);
console.log(`Black / White Convertion: (${conv._bw[0]}, ${conv._bw[1]}, ${conv._bw[2]})`); 