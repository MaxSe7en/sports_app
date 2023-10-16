import React, { useEffect, useState } from "react";

type Props = {};

const Navbar = (props: Props) => {


  const card = ["1st", "2nd", "3rd", "4th", "5th", "sum"]
  const [data, setData]: any = useState({
    "1st": [],
    "2nd": [],
    "3rd": [],
    "4th": [],
    "5th": [],
    "sum": []
  });
  const [percent, setPercentage]: any = useState({
    "1st": [],
    "2nd": [],
    "3rd": [],
    "4th": [],
    "5th": [],
    "sum": []
  });

  let freeTree = [
    [
        0,
        1,
        "D"
    ],
    [
        0,
        2,
        "D"
    ],
    [
        0,
        3,
        "D"
    ],
    [
        0,
        4,
        "D"
    ],
    [
        0,
        5,
        "D"
    ],
    [
        0,
        6,
        "D"
    ],
    [
        0,
        7,
        "T"
    ],
    [
        0,
        8,
        "D"
    ],
    [
        0,
        9,
        "T"
    ],
    [
        0,
        10,
        "D"
    ],
    [
        0,
        11,
        "A"
    ],
    [
        0,
        12,
        "T"
    ],
    [
        0,
        13,
        "A"
    ],
    [
        0,
        14,
        "D"
    ],
    [
        0,
        15,
        "T"
    ],
    [
        0,
        16,
        "D"
    ],
    [
        0,
        17,
        "D"
    ],
    [
        0,
        18,
        "D"
    ],
    [
        0,
        19,
        "D"
    ],
    [
        0,
        20,
        "T"
    ],
    [
        0,
        21,
        "A"
    ],
    [
        1,
        21,
        "A"
    ],
    [
        2,
        21,
        "A"
    ],
    [
        3,
        21,
        "A"
    ],
    [
        4,
        21,
        "A"
    ],
    [
        5,
        21,
        "A"
    ],
    [
        4,
        23,
        "A"
    ],
    [
        5,
        23,
        "A"
    ]
]

  useEffect(() => {
    let obj: any = {}
    let obj1: any = {}
    card.forEach((card) => {
      const trees = freeTree//buildTree(drawNumbers, card, "smallBig")['tree'];
      const _percent = buildTree(drawNumbers, card, "smallBig")['percentage'];
      obj[card] = trees
      obj1[card] = _percent
    })
    setData(obj)
    setPercentage(obj1)

  }, [])
  return (
    <div>
      {card.map((card: any, index) => (
        <div key={index}>
          <p>{card}</p>
          {/* <p>{`${Object.keys(percent[card]) }: ${Object.values(percent[card])}` }</p>  */}
          {Object.keys(percent[card]).map((key: any, index: any) => (
            <span key={index}>{`${key}: ${percent[card][key]} `}</span>
          ))}
          <table style={{ borderCollapse: "collapse", width: "100%" }}>
            <tbody>
              {Array.from({ length: 6 }, (_, row_index) => (
                <tr key={row_index}>
                  {Array.from({ length: drawNumbers.length }, (_, cell_index) => (
                    <td
                      key={cell_index}
                      style={{
                        border: "1px solid black",
                        width: 50,
                        height: 25,
                        fontWeight: "bold",
                        textAlign: "center",
                        color: (() => {
                          const cellData = data?.[card] || [];
                          const matchingItem = cellData.find(
                            (item: any) =>
                              item[0] === row_index && item[1] === cell_index
                          );
                          return matchingItem &&
                            ["B", "O", "P", "D"].includes(matchingItem[2])
                            ? "red"
                            : "blue";
                        })()

                      }}
                    >

                      {(() => {
                        const cellData = data?.[card] || [];
                        const matchingItem = cellData.find(
                          (item: any) =>
                            item[0] === row_index && item[1] === cell_index
                        );
                        // console.log("mtching item ",matchingItem)
                        return matchingItem ? matchingItem[2] : null;
                      })()}
                    </td>
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

export default Navbar;


const drawNumbers = [
  [
    4,
    4,
    6,
    5,
    8
  ],
  [
    3,
    6,
    0,
    1,
    6
  ],
  [
    3,
    0,
    1,
    7,
    9
  ],
  [
    1,
    2,
    2,
    7,
    8
  ],
  [
    5,
    3,
    5,
    3,
    0
  ],
  [
    8,
    8,
    2,
    1,
    3
  ],
  [
    7,
    4,
    4,
    7,
    9
  ],
  [
    4,
    9,
    7,
    5,
    5
  ],
  [
    8,
    8,
    2,
    1,
    2
  ],
  [
    1,
    1,
    5,
    4,
    1
  ],
  [
    4,
    7,
    5,
    2,
    9
  ],
  [
    8,
    1,
    1,
    7,
    2
  ],
  [
    2,
    6,
    5,
    8,
    8
  ],
  [
    5,
    2,
    6,
    9,
    1
  ],
  [
    9,
    7,
    2,
    9,
    9
  ],
  [
    3,
    5,
    8,
    2,
    7
  ],
  [
    1,
    4,
    7,
    9,
    8
  ],
  [
    4,
    4,
    5,
    1,
    7
  ],
  [
    6,
    3,
    7,
    2,
    6
  ],
  [
    1,
    3,
    0,
    3,
    9
  ],
  [
    2,
    1,
    1,
    4,
    9
  ],
  [
    7,
    3,
    9,
    8,
    6
  ],
  [
    6,
    3,
    5,
    6,
    0
  ],
  [
    9,
    7,
    9,
    6,
    3
  ],
  [
    9,
    1,
    4,
    0,
    0
  ],
  [
    9,
    5,
    4,
    8,
    4
  ],
  [
    0,
    2,
    9,
    4,
    3
  ],
  [
    6,
    6,
    7,
    2,
    1
  ],
  [
    2,
    3,
    3,
    2,
    3
  ],
  [
    3,
    2,
    6,
    5,
    0
  ],
  [
    8,
    6,
    9,
    6,
    8
  ],
  [
    6,
    1,
    5,
    7,
    2
  ],
  [
    5,
    6,
    9,
    3,
    1
  ],
  [
    8,
    6,
    5,
    5,
    2
  ],
  [
    7,
    0,
    0,
    7,
    7
  ],
  [
    2,
    1,
    7,
    4,
    0
  ],
  [
    8,
    8,
    2,
    3,
    0
  ],
  [
    6,
    4,
    8,
    4,
    1
  ],
  [
    5,
    0,
    0,
    2,
    7
  ],
  [
    2,
    2,
    2,
    8,
    1
  ],
  [
    9,
    0,
    3,
    0,
    0
  ],
  [
    8,
    1,
    5,
    5,
    3
  ],
  [
    1,
    0,
    3,
    6,
    6
  ],
  [
    4,
    2,
    9,
    0,
    9
  ],
  [
    1,
    3,
    3,
    6,
    7
  ],
  [
    8,
    4,
    3,
    5,
    6
  ],
  [
    2,
    5,
    0,
    4,
    3
  ],
  [
    1,
    6,
    6,
    0,
    1
  ],
  [
    5,
    9,
    7,
    1,
    2
  ],
  [
    4,
    3,
    0,
    5,
    1
  ],
  [
    0,
    4,
    1,
    9,
    5
  ],
  [
    0,
    8,
    4,
    7,
    2
  ],
  [
    2,
    0,
    0,
    9,
    3
  ],
  [
    7,
    7,
    5,
    3,
    2
  ],
  [
    7,
    2,
    1,
    4,
    5
  ],
  [
    4,
    1,
    1,
    6,
    7
  ],
  [
    5,
    3,
    9,
    7,
    7
  ],
  [
    2,
    7,
    5,
    3,
    3
  ],
  [
    3,
    8,
    9,
    5,
    7
  ],
  [
    4,
    7,
    6,
    1,
    2
  ],
  [
    8,
    6,
    0,
    3,
    4
  ],
  [
    7,
    5,
    9,
    1,
    0
  ],
  [
    0,
    6,
    9,
    3,
    1
  ],
  [
    3,
    8,
    1,
    4,
    2
  ],
  [
    2,
    5,
    3,
    9,
    8
  ],
  [
    1,
    5,
    5,
    1,
    1
  ],
  [
    6,
    9,
    7,
    4,
    3
  ],
  [
    8,
    3,
    1,
    0,
    4
  ],
  [
    7,
    9,
    5,
    3,
    8
  ],
  [
    0,
    6,
    5,
    2,
    5
  ],
  [
    6,
    8,
    5,
    4,
    3
  ],
  [
    1,
    3,
    8,
    7,
    4
  ],
  [
    6,
    1,
    3,
    9,
    4
  ],
  [
    3,
    5,
    0,
    2,
    3
  ],
  [
    3,
    6,
    1,
    5,
    4
  ],
  [
    8,
    1,
    9,
    5,
    1
  ],
  [
    2,
    2,
    0,
    2,
    7
  ],
  [
    2,
    7,
    2,
    6,
    3
  ],
  [
    3,
    2,
    5,
    3,
    4
  ],
  [
    2,
    9,
    6,
    6,
    4
  ],
  [
    5,
    8,
    2,
    9,
    9
  ],
  [
    9,
    2,
    5,
    6,
    8
  ],
  [
    5,
    9,
    0,
    8,
    0
  ],
  [
    7,
    6,
    9,
    3,
    9
  ],
  [
    8,
    1,
    2,
    5,
    3
  ],
  [
    4,
    5,
    6,
    6,
    4
  ],
  [
    6,
    0,
    9,
    2,
    0
  ],
  [
    6,
    1,
    1,
    3,
    1
  ],
  [
    1,
    9,
    9,
    3,
    6
  ],
  [
    9,
    8,
    9,
    2,
    3
  ],
  [
    0,
    3,
    6,
    2,
    5
  ],
  [
    5,
    2,
    4,
    6,
    3
  ],
  [
    2,
    5,
    3,
    5,
    7
  ],
  [
    2,
    2,
    0,
    8,
    9
  ],
  [
    7,
    9,
    4,
    7,
    5
  ],
  [
    1,
    9,
    2,
    7,
    7
  ],
  [
    9,
    4,
    5,
    9,
    7
  ],
  [
    9,
    1,
    8,
    9,
    1
  ],
  [
    2,
    8,
    8,
    3,
    5
  ]
]


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

    let ball = draw[parseInt(whatToAnalyze) - 1];

    // let bigSmall = getBigSmallForBall(ball);

    // let ball;
    if (whatToAnalyze === "sum") {
      ball = draw.reduce((a: number, b: number) => a + b, 0);
    } else {
      ball = draw[parseInt(whatToAnalyze) - 1];
    }

    let oddEven, bigSmall, primeComposite, dragonTiger;

    if (whatToAnalyze === "sum") {
      // console.log("dsfkjksdafkhsadhfkhsdakhfklsdfklhsdaf")
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

const countOccurrences = (arr, type) => {
  
  let letter = type == "smallBig" ? ['B', 'S'] : type === 'oddEven' ? ['O', 'E'] : type === 'primeComposite' ? ['P', 'C'] : ['D', 'T'];
  const counts = { [letter[0]]: 0, [letter[1]]: 0 };
  
  arr.forEach(item => {
    counts[item]++
  });
  
  const total = arr.length;

  return {
    [letter[0]]: (counts[letter[0]] / total * 100).toFixed(0) + '%',
    [letter[1]]: (counts[letter[1]]/ total * 100).toFixed(0) + '%'
  }
}

function buildTree(drawNumbers: number[][], whatToAnalyze: string, type: string): [number, number, string][] {
  const tree: [number, number, string][] = [];
  const analyzedResults = analyzeDraw(drawNumbers, whatToAnalyze)[type];
  console.log(analyzedResults);
  let percentage = countOccurrences(analyzeDraw(drawNumbers, whatToAnalyze)[type], type);
  // const analyzedResults1 = analyzeDraw(drawNumbers, whatToAnalyze).oddEven;
  // const analyzedResults2 = analyzeDraw(drawNumbers, whatToAnalyze).primeComposite;

  console.log(percentage);
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
    // console.log("row", row, "col", col, "currentLetter", currentLetter);
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
  return { tree, percentage };
}
