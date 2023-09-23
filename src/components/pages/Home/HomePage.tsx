import Featured from "@/components/Featured/Featured";
import React, { useEffect, useState } from "react";

type Props = {};

const HomePage = (props: Props) => {




  const card = ["1st", "2nd", "3rd", "4th", "5th", "sum"]
  const [data, setData]: any = useState({
    "1st": [],
    "2nd": [],
    "3rd": [],
    "4th": [],
    "5th": [],
    "sum": []
  });

  // console.log(grid)

  useEffect(() => {
    let obj = {}
    card.forEach((card) => {
      const trees = buildTree(drawNumbers, card, "primeComposite");
      obj[card] = trees
    })
    setData(obj)

  }, [])
  return (
    <div>
      {/* {JSON.stringify(data)} */}
      {card.map((card: any, index) => (
        <div key={index}>
          {card}
          {/* {buildTree(drawNumbers, card)} */}
          <table  >
            <tbody>
              {Array(6).fill(null).map((cell, row_index) => (
                <tr key={row_index}>
                  {row_index}
                  {Array(100).fill(null).map((cell, cell_index) => (

                    <>
                      {/* {cell_index} */}
                      {/* {cell_index == 0 && 1} */}
                      {/* {cell_index} */}
                      <td
                        key={cell_index}
                        style={{
                          border: "1px solid black",
                          width: 50,
                          fontWeight: "bold",
                        }}>

                        {data?.[card].map((_: any, index: any) => (
                          <>
                            <h1 key={index}
                              style={{ color: ["B", "O", "P", "D"].includes(data?.[card]?.[index]?.[2]) ? 'red' : 'blue', textAlign: "center" }}
                            >
                              {data?.[card]?.[index]?.[0] == row_index && data?.[card]?.[index]?.[1] == cell_index && data?.[card]?.[index]?.[2]}

                            </h1>

                          </>
                        ))}

                      </td>
                    </>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <br /><br />
        </div>
      ))}
    </div>
  );
};

export default HomePage;








const drawNumbers = [
  [5, 2, 3, 7, 5],
  [5, 7, 3, 7, 5],
  [5, 2, 3, 7, 5],
  [1, 2, 3, 4, 6],
  [1, 2, 3, 5, 6],
  [6, 2, 4, 6, 6],
  [6, 2, 4, 6, 6],
  [1, 3, 4, 5, 6],
  [2, 3, 4, 6, 6],
  [9, 2, 4, 6, 6],
  [9, 3, 4, 5, 6],
  [4, 0, 4, 5, 1],
  [9, 7, 5, 5, 6],
  [9, 9, 4, 8, 6],
  [8, 3, 5, 5, 6],
  [9, 3, 5, 5, 2],
  [6, 3, 5, 5, 6],
  [9, 3, 5, 5, 6],
  [9, 3, 5, 5, 6],
  [9, 3, 5, 5, 6],
  [9, 3, 5, 5, 6],
  [9, 3, 5, 5, 6],
  [9, 3, 5, 5, 6],
  [9, 6, 5, 5, 6],
  [9, 6, 5, 5, 6],
  [9, 6, 5, 5, 6],
  [9, 3, 5, 5, 6],
  [9, 3, 5, 5, 6],
  [9, 3, 5, 5, 6],
  [9, 3, 5, 5, 6],
  [9, 3, 5, 5, 6],
  [9, 3, 5, 5, 6],
  [9, 3, 5, 5, 6],
  [9, 3, 5, 5, 6],
  [9, 3, 5, 5, 6],
  [9, 7, 5, 5, 6],
  [9, 7, 5, 5, 6],
  [9, 7, 5, 5, 6],
  [9, 7, 5, 5, 6],
  [9, 7, 5, 5, 6],
  [9, 7, 5, 5, 6],
  [9, 7, 5, 5, 6],
  [9, 7, 5, 5, 6],
  [9, 2, 5, 5, 6],
  [9, 2, 5, 5, 6],
  [9, 2, 5, 5, 6],
  [9, 2, 5, 5, 6],
  [9, 2, 5, 5, 6],
  [9, 2, 5, 5, 6],
  [9, 2, 5, 5, 6],
  [9, 2, 5, 5, 6],
  [9, 2, 5, 5, 6],
  [9, 6, 5, 5, 6],
  [9, 6, 5, 5, 6],
  [9, 6, 5, 5, 6],
  [9, 6, 5, 5, 6],
  [9, 6, 5, 5, 6],
  [9, 6, 5, 5, 6],
  [9, 6, 5, 5, 6],
];


function getBigSmallForBalls(ball: number): string {
  return ball >= 0 && ball <= 4 ? "S" : "B";
}

function getBigSmallForBall(ball: number): string {
  return ball >= 0 && ball <= 4 ? "S" : "B";
}

function firstAndLast<T>(arr: T[]): T[] {
  if (arr.length === 0) {
    return []; // Return an empty array for an empty input array.
  }

  const first = arr[0];
  const last = arr[arr.length - 1];

  return [first, last];
}

// Helper functions
function getOddEven(num: number): string {
  return num % 2 === 0 ? "E" : "O";
}

function getBigSmallForSum(sum: number): string {
  return sum >= 23 && sum <= 45 ? "B" : "S";
}

function getDragonTiger(lastTwo: string[]): string {
  if (lastTwo[0] > lastTwo[1]) {
    return "D";
  } else if (lastTwo[0] < lastTwo[1]) {
    return "T";
  } else {
    return "A";
  }
}

function getPrimeComposite(ball: number): string {
  const primes = [1, 2, 3, 5, 7];

  if (primes.includes(ball)) {
    return "P";
  } else {
    return "C";
  }
}

function analyzeDraw(drawNumbers: number[][], whatToAnalyze: string): {
  smallBig: string[];
  oddEven: string[]; // Add an array to store detailed
  primeComposite: string[];
} {
  const results: any = {
    smallBig: [], // Add an array to store detailed dragon-tiger-tie counts
    oddEven: [], // Add an array to store detailed
    primeComposite: [],
  };

  let prevBigSmall;

  for (const element of drawNumbers) {
    const draw: any = element;

    let ball;

    ball = draw[parseInt(whatToAnalyze) - 1];

    // let bigSmall = getBigSmallForBall(ball);

    // let ball;
    if (whatToAnalyze === "sum") {
      ball = draw.reduce((a: number, b: number) => a + b, 0);
    } else {
      ball = draw[parseInt(whatToAnalyze) - 1];
    }

    let oddEven, bigSmall, primeComposite, dragonTiger;

    if (whatToAnalyze === "sum") {
      console.log("dsfkjksdafkhsadhfkhsdakhfklsdfklhsdaf")
      oddEven = getOddEven(ball);
      bigSmall = getBigSmallForSum(ball);

      let lastTwo = firstAndLast(draw);
      dragonTiger = getDragonTiger(lastTwo as []);
    } else {
      oddEven = getOddEven(ball);
      bigSmall = getBigSmallForBall(ball);

      primeComposite = getPrimeComposite(ball);
      dragonTiger = getDragonTiger(["dragon", "tiger", "tie"]); // Initialize dragonTiger value
    }
    // Add the bigSmall value to the results array
    results.smallBig.push(bigSmall);
    results.oddEven.push(oddEven);
    results.primeComposite.push(primeComposite);

    // Update prev values
    prevBigSmall = bigSmall;
  }

  return results;
}

function buildTree(drawNumbers: number[][], whatToAnalyze: string, type: string ): [number, number, string][] {
  const tree: [number, number, string][] = [];
  const analyzedResults = analyzeDraw(drawNumbers, whatToAnalyze)[type];
  // const analyzedResults1 = analyzeDraw(drawNumbers, whatToAnalyze).oddEven;
  // const analyzedResults2 = analyzeDraw(drawNumbers, whatToAnalyze).primeComposite;
  
  console.log(analyzedResults);
  let row = 0;
  let col = 0;
  let whenColIncreaseByMaxRows = 0;
  let dua: Record<string, string> = {};

  analyzedResults.forEach((value: any, i: number) => {
    let previousLetter = analyzedResults[i - 1];
    let currentLetter = analyzedResults[i];
    let nextLetter = analyzedResults[i + 1];
    let newItem: any = [];

    if (currentLetter !== previousLetter) {
      col = whenColIncreaseByMaxRows;
    }
    if (previousLetter !== undefined && currentLetter !== previousLetter) {
      row = 0;
      col++;
      if (row === 0) {
        whenColIncreaseByMaxRows = col;
      }
    } else if (currentLetter === previousLetter) {
      row++;

      let prevCol = col - 1;
      const prev = dua[row + "|" + prevCol];

      if (prev === currentLetter) {
        row--;
        col++;
      }
    } else if (
      currentLetter !== previousLetter &&
      currentLetter !== nextLetter
    ) {
      col = 0;
      whenColIncreaseByMaxRows = col;
    }

    if (row > 5) {
      row = 5;
      col++;
    }
    console.log("row", row, "col", col, "currentLetter", currentLetter);
    newItem = [row, col, currentLetter];

    let duplicate = tree.some(
      (item) => item[0] === newItem[0] && item[1] === newItem[1]
    );

    if (duplicate) {
      row--;
      col++;
      newItem = [row, col, currentLetter];
    }

    dua[row + "|" + col] = currentLetter;
    tree.push(newItem);
  });

  // console.log(previousValues);
  console.log(tree);
  return tree;
}
