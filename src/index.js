module.exports = function reverse (n) {
	if (n < 0) {
		n = n * (-1);
	}
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
