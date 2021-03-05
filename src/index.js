module.exports = function reverse (n) {
    let arrayOfDigits = Array.from(String(n), Number);
    let reversedArray = [];
    let reversedArrayIndex = 0;
    for (let i = arrayOfDigits.length - 1; i >= 0; i--) {
            reversedArray[reversedArrayIndex] = arrayOfDigits[i];
            reversedArrayIndex++;
        }
   let stringOfDigits = reversedArray.join('');
    return Number(stringOfDigits);
}
