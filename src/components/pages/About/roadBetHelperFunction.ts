

export function getBigSmallForBall(ball: number) {
    return ball >= 0 && ball <= 4 ? "S" : "B";
}

export function firstAndLast(arr: string | any[]) {
    if (arr.length === 0) {
        return []; // Return an empty array for an empty input array.
    }

    const first = arr[0];
    const last = arr[arr.length - 1];

    return [first, last];
}

// Helper functions
export function getOddEven(num: number) {
    return num % 2 === 0 ? "E" : "O";
}

export function getBigSmallForSum(sum: number) {
    return sum >= 23 && sum <= 45 ? "B" : "S";
}

export function getDragonTiger(lastTwo: any[]) {
    if (lastTwo[0] > lastTwo[1]) {
        return "D";
    } else if (lastTwo[0] < lastTwo[1]) {
        return "T";
    } else {
        return "A";
    }
}

export function getPrimeComposite(ball: number) {
    const primes = [1, 2, 3, 5, 7];

    if (primes.includes(ball)) {
        return "P";
    } else {
        return "C";
    }
}

export function analyzeDrawNumbers(
    drawNumbers: number[][],
    whatToAnalyze: string
): any {
    const results: any = {
        "Big/Small": [],
        "Odd/Even": [],
        "P/C": [],
        "Dragon/Tiger/Tie": [],
    };

    for (const element of drawNumbers) {
        const draw: number[] = element;

        let ball: number;
        if (whatToAnalyze.toLowerCase() === "sum") {
            ball = draw.reduce((a, b) => a + b, 0);
        } else {
            ball = draw[parseInt(whatToAnalyze) - 1];
        }

        let oddEven: string,
            bigSmall: string,
            primeComposite: string,
            dragonTiger: string;

        if (whatToAnalyze.toLowerCase() === "sum") {
            oddEven = getOddEven(ball);
            bigSmall = getBigSmallForSum(ball);

            const lastTwo = firstAndLast(draw);
            dragonTiger = getDragonTiger(lastTwo);
            results["Dragon/Tiger/Tie"].push(dragonTiger);
        } else {
            oddEven = getOddEven(ball);
            bigSmall = getBigSmallForBall(ball);

            primeComposite = getPrimeComposite(ball);
            results["P/C"].push(primeComposite);
        }

        results["Big/Small"].push(bigSmall);
        results["Odd/Even"].push(oddEven);
    }

    return results;
}

export const countOccurrences = (
    arr: string[],
    form: string
): { [key: string]: string } => {
    const letterMapping: { [key: string]: string[] } = {
        "Big/Small": ["B", "S"],
        "Odd/Even": ["O", "E"],
        "P/C": ["P", "C"],
        "Dragon/Tiger/Tie": ["D", "T"],
        "Dragon/Tiger": ["D", "T"],
        "More First/Last": ["F", "L"],
        "More Odd/Even": ["O", "E"],
        "O/E Sum": ["O", "E"],
        "B/S Sum": ["B", "S"],
        "First/Last": ["F", "L"],
        "Sky/Ground": ["Y", "G"],
        "Poultry/Beast": ["M", "J"],
        "Tail B/S": ["B", "S"],
        "Big/Small(No Tie)": ["B", "S"],
        "P/C Tail Sum": ["P", "C"],
        "B/S Tail Sum": ["B", "S"],
    };
    const letter = letterMapping[form]; //|| ["D", "T"];
    // console.log("letter: =======>", letter, letterMapping, form)
    const counts: { [key: string]: number } = { [letter?.[0]]: 0, [letter?.[1]]: 0 };

    arr.forEach((item) => {
        counts[item]++;
    });

    const total = arr.length;
    return {
        [letter[0]]: isNaN(Number(((counts[letter[0]] / total) * 100).toFixed(0)))
            ? 0 + "%"
            : ((counts[letter[0]] / total) * 100).toFixed(0) + "%",
        [letter[1]]: isNaN(Number(((counts[letter[1]] / total) * 100).toFixed(0)))
            ? 0 + "%"
            : ((counts[letter[1]] / total) * 100).toFixed(0) + "%",
    };
};


export function convertAsToSucceedingLetter(arr: any[]) {
    const aSuccessor = findFirstNonA(arr);
    const preceedingAs = getPrecedingAs(arr);
    let count = 0;
    const indexesOfA = [];
    for (let i = 0; i < preceedingAs.length; i++) {
        arr[i] = aSuccessor;
        indexesOfA.push(i);
        count++;
    }
    return { arr, count, indexesOfA };
}

function findFirstNonA(arr: any[]) {
    let char = "";
    for (let i = 0; i < arr?.length; i++) {
        char = arr[i];
        if (char !== "A") {
            return char;
        }
    }
}


/**
 * Transposes the given array by moving "A"s to the beginning 
 * and replacing them with the succeeding non-"A" character.
 * 
 * @param arr - The array to transpose
 * @returns An object containing:
 * - newArr - The transposed array
 * - indexOfA - The original indices of "A" characters
 * - countOfA - Count of consecutive "A"s
 * - consecutiveAs - Map of {succeedingLetter}{count} pairs  
 */
export function transpose(arr: any[]) {
    let newArr = [];
    let indexOfA: any = [];
    let countOfA = 0;
    const consecutiveAs: any = {};
    // const consecutiveAs = new Map();
    let previousLetter: any;

    // removePrecedingAs(arr, precedingAs.length);

    const aSuccessor = findFirstNonA(arr);
    const precedingAs = getPrecedingAs(arr).length;
    if (precedingAs > 0) {
        indexOfA = [...indexOfA, ...convertAsToSucceedingLetter(arr).indexesOfA];
        console.log("------------------>", indexOfA);
    }

    for (let i = 0; i < arr?.length; i++) {
        let nextLetter = arr[i + 1];
        if (nextLetter === "A" && arr[i] !== "A") {
            previousLetter = arr[i];
        }
        // console.log("i", previousLetter, arr[i], previousLetter === undefined);
        if (arr[i] === "A" && previousLetter === undefined) {
            indexOfA.push(i);
            countOfA++;
            let nonAIndex = findNextNonALetterIndex(arr, i);
            // consecutiveAs.set(nextLetter, countOfA);
            consecutiveAs[`${nextLetter}${nonAIndex}`] = countOfA;

            newArr.push(nextLetter);
            countOfA = 0;
        } else if (arr[i] === "A") {
            countOfA++;
            let nonAIndex = findNextNonALetterIndex(arr, i);
            // consecutiveAs.set(`${previousLetter}${i}`, countOfA);
            consecutiveAs[`${previousLetter}${nonAIndex}`] = countOfA;
            indexOfA.push(i);
            newArr.push(previousLetter);
            // countOfA = 0;
        } else {
            countOfA = 0;
            newArr.push(arr[i]);
        }
    }

    // console.log("i ", newArr);
    // console.log("i ", countOfA);
    // console.log("i ", consecutiveAs);
    // console.log("i ", indexOfA);

    return { newArr, indexOfA, countOfA, consecutiveAs };
}

export function findNextNonALetterIndex(arr: any[], currentIndexOfA: number) {
    for (let i = currentIndexOfA + 1; i < arr.length; i++) {
        if (arr[i] !== "A") {
            return i;
        }
    }
    // Return -1 if no non-'A' letter is found after the current index
    return -1;
}
export function padNumberWithZeros(num: number): string {
    return num < 10 ? num?.toString().padStart(2, "0") : num?.toString();
  }

export const check: any = {
    B: "S",
    S: "B",
    P: "C",
    C: "P",
    O: "E",
    E: "O",
    D: "T",
    T: "D",
    F: "L",
    L: "F",
    Y: "G",
    G: "Y",
    J: "M",
    M: "J"
};
export function isEmpty(value: any): boolean {
    if (value === null || value === undefined || value === 0) {
      return true;
    }
  
    if (typeof value === 'string' && value.trim() === '') {
      return true;
    }
  
    if (Array.isArray(value) && value.length === 0) {
      return true;
    }
  
    if (typeof value === 'object' && Object.keys(value).length === 0) {
      return true;
    }
  
    return false;
  }
export const roadPredictorColorMapper:any = {
    M: "P",
    J: "B",
    Y: "S"
};
/**
 * @description function to format the game names for road bet
 * @param game the name of the game in road bet
 * @param lottery_type_id the lottery type id
 * @param gn_id game name id 
 * @returns string
 */
export function roadBetGameSelectionsMapper(game: string, lottery_type_id?: string, gn_id?: number | string): string {
    const nameMapper:any = {
        "O": "Odd Sum",
        "E Sum": "Even Sum",
        "B": lottery_type_id == "8" ? "Big Sum" : "Tail Sum Big",
        "S Sum": lottery_type_id === "5" ? "Tail Sum Small" :"Small Sum",
        "C Tail Sum": "Tail Sum Composite",
        "S Tail Sum": "Tail Sum Small",
        "Last": lottery_type_id == "8" ? "Zodiac Last" : "More Last",
        "Even": lottery_type_id === "10" ? 'More Even' : "Even",
        "Tail B": "Tail Big",
        "S": "Tail Small",
        "Sky": "Zodiac Sky",
        "Ground": "Zodiac Ground",
        "Poultry": "Zodiac Poultry",
        "Beast": "Zodiac Beast",
        "First": "Zodiac First",
        P: lottery_type_id === "5" ? "Tail Sum Prime" : "Prime",
        C: lottery_type_id === "5" ? "Tail Sum Composite" : "Composite",
        Big: lottery_type_id === "8" && gn_id == 1231 ? 'Big (No Tie)' : 'Big',
        "Small(No Tie)": "Small (No Tie)",
        "Odd": lottery_type_id === "10" && gn_id == 1233 ? 'More Odd' : 'Odd'
    }
    const mappedValue = nameMapper[game];
    return mappedValue !== undefined ? mappedValue : game;
}

/**
 * @description function to format the game names for road bet
 * @param game the name of the game in road bet
 * @param lottery_type_id the lottery type id
 * @param gn_id game name id 
 * @returns string
 */
export function twoSidesGameSelectionsMapper(game: string, lottery_type_id?: string, gn_id?: number | string): string {
    const nameMapper:any = {
        "Sum of Top Two Sum of Top Two": "Sum of Top Two",
        "T/S Ball 1": ""
    }
    const mappedValue = nameMapper[game];
    return mappedValue !== undefined ? mappedValue : game;
}



/**
 * Retrieves a sequence of preceding 'A' characters from an array.
 *
 * @param arr - The array from which to extract the preceding 'A' characters.
 * @returns An array containing the sequence of preceding 'A' characters.
 */
export function getPrecedingAs(arr: string[]): string[] {
    const result: string[] = [];
    let i = 0;

    // Keep going until we find a non-'A'
    while (i < arr?.length && arr[i] === "A") {
        result.push(arr[i]);
        i++;
    }

    // Stop looping once we hit a non-'A'
    return result;
}

/**
 * Removes a specified number of preceding 'A' characters from an array.
 *
 * @param arr - The array from which to remove preceding 'A' characters.
 * @param numberOfAsToRemove - The number of preceding 'A' characters to remove.
 * @returns An array containing the removed 'A' characters.
 */
export function removePrecedingAs(
    arr: string[],
    numberOfAsToRemove: number
): string[] {
    return arr.splice(0, numberOfAsToRemove);
}

/**
 * Gets the last array within a specific column that does not have the value "A".
 *
 * @param arr - The array to search in.
 * @param col - The column to search in.
 * @returns The last array without "A" in the specified column or the original array.
 */
export function getLastArrayWithColWithoutA(
    arr: [number, number, string][],
    col: number
): [number, number, string] {
    let last: [number, number, string] | any = null;
    let lastIndex = -1;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i][1] === col) {
            last = arr[i];
            lastIndex = i;
        }
    }

    if (lastIndex !== -1 && last[2] === "A") {
        // Search for the predecessor that is not "A" within the same column.
        for (let i = lastIndex - 1; i >= 0; i--) {
            if (arr[i][1] === col && arr[i][2] !== "A") {
                // Create a new array with the modified value.
                return [last[0], last[1], arr[i][2]];
            }
        }
    }

    return last || [0, 0, ""]; // Return the original array if no modification is needed.
}
