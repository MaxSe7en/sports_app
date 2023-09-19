import Featured from "@/components/Featured/Featured";
import React, { useState } from "react";

type Props = {};

const HomePage = (props: Props) => {
  const grid = [
    ["B", "S", "B", "S", "B", "S", "B", "S", "B", "S", "B"],
    ["B", "S", "", "S", "B", "S", "B", "S", "B", "S",""],
    ["B", "S", "", "S", "B", "S", "", "", "B", "", ""],
    ["B", "S", "", "S", "B", "S", "", "", "B", "", ""],
    ["B", "S", "", "S", "B", "S", "", "", "B", "", ""],
    ["B", "", "", "S", "", "", "", "", "", "", ""],
    ["B", "", "", "S", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", ""],
  ];

  const maxGridLength = grid.reduce((acc, curr) => Math.max(acc, curr.length), 0);

  const grid2 = [
    ["B", "S", "B", "S", "B", "S", "B", "S", "B", "S", "B"],
    ["B", "S", "", "S", "B", "S", "B", "S", "B", "S", ""],
    ["B", "", "", "S", "B", "S", "", "", "B", "", ""],
    ["B", "", "", "S", "B", "S", "", "", "B", "", "", "KK"],
    ["B", "", "", "S", "B", "B", "B", "B", "B", "", ""],
    ["B", "", "", "S", "S", "S", "S", "S", "B", "", ""],
    ["", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", ""],
  ];

  let abc: any = [
    // [0, 0],
  ];
  // console.log(abc.length)

  const ifExists = (i: any, j: any) => {
    // await checkDepth(i, j)
    if (i > 5) return [true];

    // console.log(abc)
    if (abc.length === 0) return [false];
    return abc.map((arr: any) => arr[0] === i && arr[1] === j);
  };

  // function checkDepth(i: any) {
  //   // console.log("iiiiiiiii",i)
  //   if (i > 5) return [true];
  // }

  function test() {
    for (let rows = 0; rows < 11; rows++) {
      for (let columns = 0; columns < grid.length; columns++) {
        // if (i == 6 && columns === 0) {
        // if (grid[columns][rows] === "") {
        //   // continue;
        // }
        console.log([rows, columns, grid[rows]?.[columns]]);
        // console.log(ifExists(rows, columns)[0]);
        // if (ifExists(i, columns)[0] === false) {
        // abc.push([rows, columns, grid[rows][columns]]);
        // }
        // else {
        //   console.log("else");
        //   let remainder = i - 5;
        //   abc.push([5, remainder, grid[i][j]]);
        // }
        // }
      }
    }
    // console.log("abccc", abc);
    return abc;
  }

  // B: 1, S: 2

  // [row, col, value]
  const hhh = [
    [
        0,
        0,
        "S"
    ],
    [
        0,
        1,
        "B"
    ],
    [
        0,
        2,
        "S"
    ],
    [
        1,
        2,
        "S"
    ],
    [
        2,
        2,
        "S"
    ],
    [
        3,
        2,
        "S"
    ],
    [
        0,
        3,
        "B"
    ],
    [
        0,
        4,
        "S"
    ],
    [
        1,
        4,
        "S"
    ],
    [
        2,
        4,
        "S"
    ],
    [
        3,
        4,
        "S"
    ],
    [
        4,
        4,
        "S"
    ],
    [
        0,
        5,
        "B"
    ],
    [
        1,
        5,
        "B"
    ],
    [
        0,
        6,
        "S"
    ],
    [
        1,
        6,
        "S"
    ],
    [
        2,
        6,
        "S"
    ],
    [
        3,
        6,
        "S"
    ],
    [
        4,
        6,
        "S"
    ],
    [
        5,
        6,
        "S"
    ],
    [
        5,
        7,
        "S"
    ],
    // [
    //     5,
    //     8,
    //     "S"
    // ],
    // [
    //     5,
    //     9,
    //     "S"
    // ],
    // [
    //     0,
    //     7,
    //     "B"
    // ],
    // [
    //     1,
    //     7,
    //     "B"
    // ],
    // [
    //     2,
    //     7,
    //     "B"
    // ],
    // [
    //     0,
    //     8,
    //     "S"
    // ],
    // [
    //     1,
    //     8,
    //     "S"
    // ],
    // [
    //     2,
    //     8,
    //     "S"
    // ],
    // [
    //     3,
    //     8,
    //     "S"
    // ],
    [
        4,
        8,
        "S"
    ],
    [
        4,
        9,
        "S"
    ],
    [
        4,
        10,
        "S"
    ],
    // [
    //     5,
    //     10,
    //     "S"
    // ],
    // [
    //     5,
    //     11,
    //     "S"
    // ],
    // [
    //     0,
    //     9,
    //     "B"
    // ],
    // [
    //     1,
    //     9,
    //     "B"
    // ],
    // [
    //     2,
    //     9,
    //     "B"
    // ],
    // [
    //     3,
    //     9,
    //     "B"
    // ],
    // [
    //     0,
    //     10,
    //     "S"
    // ],
    // [
    //     1,
    //     10,
    //     "S"
    // ],
    // [
    //     2,
    //     10,
    //     "S"
    // ],
    // [
    //     3,
    //     10,
    //     "S"
    // ],
    // [
    //     3,
    //     11,
    //     "S"
    // ],
    [
        4,
        11,
        "S"
    ],
    [
        4,
        12,
        "S"
    ],
    [
        5,
        12,
        "S"
    ],
    // [
    //     5,
    //     13,
    //     "S"
    // ]
]

  // console.log(grid)
  const [data, setData] = useState([]);
  return (
    <div>
      {maxGridLength}
      <br />
      <br />
      {JSON.stringify(data)}
      <br />
      <br />
      <button
        onClick={() => {
          console.log(test());
        }}
      >
        test
      </button>
      <button onClick={() => setData(abc)}>Data</button>
      <table>
        <tbody>
          {grid.map((row, i) => (
            <tr key={i}>
              {i}
              {row.map((cell, j) => (
                <td
                  key={j}
                  style={{
                    border: "1px solid black",
                    width: "15px",
                    height: "15px",
                    textAlign: "center",
                    fontWeight: "bold",
                    margin: 0,
                    // color: values[0] === cell ? firstValueColor : "blue",
                  }}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <br />
      <table>
        <tbody>
          {Array(15).fill(null).map((cell, row_index) => (
            <tr key={row_index}>
              {row_index}
              {Array(20).fill(null).map((cell, cell_index) => (
                <>
                  {/* {cell_index} */}
                  <td
                    key={cell_index}
                    style={{
                      border: "1px solid black",
                      width: 50,
                      // height: 5,
                      // textAlign: "center",
                      fontWeight: "bold",
                      // margin: 0,
                      // color: values[0] === cell ? firstValueColor : "blue",
                    }}>
                    {/* {hhh?.[0]?.[0] == row_index && hhh?.[0]?.[1] == cell_index && hhh?.[0]?.[2] == "B" ? "B" : ""} */}
                    {hhh.map((_, index) => (
                      <>
                      <h1 key={index}
                        style={{ color: hhh?.[index]?.[2] == "B" ? 'red' : 'blue' }}
                      >
                        {hhh?.[index]?.[0] == row_index && hhh?.[index]?.[1] == cell_index && hhh?.[index]?.[2]}

                      </h1>
                       {/* <h4> {hhh?.[index]?.[0] == 5 && hhh?.[index]?.[1] == 6 && hhh?.[index]?.[2]}</h4> */}
                       </>
                    ))}
                    {/* {row_index==5 && cell_index== 7 && "E"} */}
                    {/* {row_index==3 && cell_index== 6 && "T"} */}
                    {/* {row_index==4 && cell_index== 7 && "T"} */}
                    {/* {row_index <= 5 && (
                      <h2 style={{ color: grid[row_index]?.[cell_index] == "B" ? 'red' : 'blue' }}>{grid[row_index]?.[cell_index]} </h2>
                    )}
                    R{row_index}C{cell_index}
                    {row_index == 6 && grid[row_index]?.[cell_index] === 'S' ? "" : row_index == 5 && cell_index == 4 && 
                       <h3 style={{ color: grid[6]?.[0] == "B" ? 'red' : 'blue' }}>{grid[row_index]?.[cell_index]}S</h3>
                    }
                    {row_index == 6 && grid[row_index]?.[cell_index] === 'S' ? "" : row_index == 5 && cell_index == 5 && 
                       <h3 style={{ color: grid[6]?.[0] == "B" ? 'red' : 'blue' }}>S</h3>
                    }
                    {row_index == 6 && grid[row_index]?.[cell_index] === 'S' ? "" : row_index == 5 && cell_index == 6 && 
                       <h3 style={{ color: grid[6]?.[0] == "B" ? 'red' : 'blue' }}>S</h3>
                    }
                    {row_index == 6 && grid[row_index]?.[cell_index] === 'S' ? "" : row_index == 5 && cell_index == 7 && 
                       <h3 style={{ color: grid[6]?.[0] == "B" ? 'red' : 'blue' }}>S</h3>
                    } */}
                        {/* {row_index == 5 && cell_index == 4 && "AMA"} */}
                        {/* {grid[row_index]?.[cell_index]} */}
                        {}
                      </td>
                    </>
                  ))}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default HomePage;
