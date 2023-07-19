/**
 * This function splits an array into multiple subarrays based of a numerical value.
 *
 * @param {T[]} inputArray - The array you want to be divided
 * @param {number} numOfSubArrays - The amount of sub arrays you want to divide from the input array
 * @returns {T[][]} Returns a multidimentional array that contains the sub arrays
 * @example
 * groupArrayElements<number>([1,2,3], 3) // returns [[1], [2], [3]]
 */
function groupArrayElements<T>(inputArray: T[], numOfSubArrays: number): T[][] {
    if (inputArray.length === 0 || numOfSubArrays <= 0) {
        throw new Error('[ERR]: Array is empty or number of splits is non-positive.');
    }

    if (numOfSubArrays > inputArray.length) {
        throw new Error('[ERR]: Number of splits exceeds length of input array.');
    }

    // skip the logic, and just map the data to their own array
    if (numOfSubArrays == inputArray.length)
        return inputArray.map((data: T) => [data]);

    let result: T[][] = [];
    let start: number = 0;

    const remainder = inputArray.length % numOfSubArrays;
    let chunkSize = Math.floor(inputArray.length / numOfSubArrays);

    for (let i = 0; i < numOfSubArrays; i++) {
        if (i < remainder) {
            // Distribute the remainder among the first few chunks
            result.push(inputArray.slice(start, start + chunkSize + 1));
            start += chunkSize + 1;
        } else {
            result.push(inputArray.slice(start, start + chunkSize));
            start += chunkSize;
        }
    }

    return result;
}
console.log(
    'Given the array: [1,2,3,4,5], and the divider: 3 it outputs the following:'
);
try {
    console.log(groupArrayElements<number>([1, 2, 3, 4, 5], 3));
} catch (err: any) {
    console.log(err.message);
}

// Noted: given more time, I would of written tests
