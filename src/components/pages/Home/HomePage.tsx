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
    [0, 0, "S"],
    [1, 0, "S"],
    [2, 0, "S"],
    [3, 0, "S"],
    [0, 1, "B"],
    [1, 1, "B"],
    [2, 1, "B"],
    [3, 1, "B"],
    [4, 1, "B"],
    [5, 1, "B"],
    [6, 1, "B"], //START BRANCHING
    [6, 2, "B"],
    [6, 3, "B"],
    [0, 2, "S"],
    [1, 2, "S"],
    [2, 2, "S"],
    [3, 2, "S"],
    [4, 2, "S"],
    [5, 2, "S"],
    [5, 3, "S"],
    [5, 4, "S"],
    [6, 4, "S"],
    [0, 3, "B"],
    [1, 3, "B"],
    [2, 3, "B"],
    [3, 3, "B"],
    [4, 3, "B"],
    [4, 4, "B"],
    [4, 5, "B"],
    [5, 5, "B"],
    [6, 5, "B"],
    [6, 6, "B"],
    [6, 7, "B"],
    [6, 8, "B"],
    [0, 4, "S"],
    [1, 4, "S"],
    [2, 4, "S"],
    [3, 4, "S"],
    [3, 5, "S"],
    [3, 6, "S"],
    [4, 6, "S"],
    [5, 6, "S"],
    [5, 7, "S"],
  ];

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
                      <h1 key={index}
                        style={{ color: hhh?.[index]?.[2] == "B" ? 'red' : 'blue' }}
                      >
                        {hhh?.[index]?.[0] == row_index && hhh?.[index]?.[1] == cell_index && hhh?.[index]?.[2]}

                      </h1>
                    ))}
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
