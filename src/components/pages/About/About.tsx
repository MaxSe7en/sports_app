import { useEffect, useState } from "react";
import styles from "./about.module.css";
import DerivedRoadColorsSection from "./DerivedRoadColorsSection";
import DerivedRoads from "./DerivedRoads";
import {
  check,
  countOccurrences,
  getLastArrayWithColWithoutA,
  isEmpty,
  transpose,
} from "./roadBetHelperFunction";
import { fnSelector } from "./road";
import MainRoad from "./MainRoad";

function RoadBet() {
  const aaaa: any = [
    [7, 7, 3, 0, 3],
    [7, 7, 3, 0, 0],
    [7, 7, 3, 0, 0],
    [7, 7, 3, 0, 0],
    [7, 7, 3, 0, 0],
    [7, 7, 3, 6, 6],
    [7, 7, 3, 6, 6],
    [7, 7, 3, 6, 6],
    [7, 7, 3, 6, 6],
    [7, 7, 3, 6, 6],
    [8, 1, 3, 9, 8],
    [2, 7, 1, 1, 4],
    [3, 4, 3, 2, 7],
    [6, 7, 3, 8, 8],
    [7, 0, 0, 5, 1],
    [9, 7, 8, 0, 5],
    [2, 2, 5, 6, 0],
    [9, 6, 2, 1, 9],
    [9, 2, 9, 7, 9],
    [4, 5, 9, 0, 8],
    [0, 4, 3, 1, 2],
    [9, 3, 5, 3, 2],
    [4, 7, 6, 8, 6],
    [8, 3, 0, 2, 4],
    [2, 6, 1, 6, 9],
    [1, 7, 3, 8, 8],
    [1, 2, 0, 1, 4],
    [1, 2, 0, 1, 4],
    // [9, 3, 5, 1, 6],
    // [3, 7, 5, 1, 3],
    // [3, 5, 8, 7, 7],
    // [3, 0, 7, 6, 0],
    // [8, 3, 7, 3, 0],
    // [9, 3, 8, 7, 5],
    // [4, 1, 6, 7, 9],
    // [7, 7, 0, 8, 2],
    // [5, 7, 7, 9, 4],
    // [2, 1, 0, 3, 2],
    // [1, 7, 9, 2, 3],
    // [7, 6, 9, 5, 5],
    // [3, 2, 0, 6, 5],
    // [5, 1, 5, 3, 0],
    // [1, 4, 0, 5, 3],
    // [9, 3, 7, 2, 3],
    // [3, 3, 9, 4, 3],
    // [0, 7, 2, 7, 2],
    // [4, 5, 5, 8, 6],
    // [2, 0, 0, 4, 0],
    // [8, 4, 5, 1, 8],
    // [4, 8, 4, 1, 8],
    // [2, 7, 5, 3, 4],
    // [0, 3, 0, 9, 0],
    // [9, 8, 1, 5, 9],
    // [4, 2, 8, 0, 4],
    // [5, 7, 4, 3, 0],
    // [5, 5, 2, 6, 1],
    // [7, 5, 5, 8, 3],
    // [6, 9, 7, 4, 6],
    // [6, 5, 5, 4, 3],
    // [7, 3, 2, 7, 8],
    // [9, 0, 9, 7, 7],
    // [9, 8, 1, 7, 2],
    // [6, 6, 4, 9, 6],
    // [3, 5, 8, 3, 2],
    // [1, 7, 5, 9, 6],
    // [1, 8, 4, 9, 9],
    // [3, 8, 3, 3, 8],
    // [6, 2, 4, 2, 0],
    // [2, 7, 0, 7, 5],
    // [1, 0, 9, 5, 0],
    // [0, 5, 4, 1, 0],
    // [2, 6, 2, 8, 4],
    // [3, 7, 2, 3, 7],
    // [3, 9, 9, 5, 4],
    // [6, 2, 5, 5, 9],
    // [8, 0, 5, 8, 1],
    // [3, 6, 1, 6, 3],
    // [2, 6, 5, 2, 6],
    // [6, 7, 7, 7, 1],
    // [6, 3, 8, 7, 1],
    // [1, 9, 7, 6, 5],
    // [5, 4, 1, 1, 9],
    // [7, 5, 2, 5, 0],
    // [8, 0, 0, 5, 1],
    // [5, 0, 9, 8, 1],
    // [7, 6, 9, 6, 2],
    // [6, 3, 5, 3, 3],
    // [6, 2, 6, 2, 9],
    // [1, 3, 3, 0, 7],
    // [8, 4, 6, 7, 7],
    // [8, 0, 6, 3, 5],
    // [7, 8, 4, 9, 2],
    // [6, 3, 1, 2, 7],
    // [1, 0, 7, 3, 2],
    // [8, 9, 6, 3, 5],
    // [6, 5, 1, 2, 0],
    // [8, 4, 2, 4, 3],
    // [9, 9, 2, 1, 4],
    // [7, 5, 2, 0, 5],
    // [8, 0, 6, 7, 1],
    // [4, 2, 3, 9, 1],
    // [0, 4, 2, 4, 0],
    // [9, 6, 6, 7, 1],
    // [4, 8, 2, 2, 7],
    // [9, 9, 3, 3, 3],
    // [8, 6, 3, 0, 6],
    // [9, 4, 6, 0, 8],
    // [4, 3, 3, 6, 6],
    // [2, 8, 7, 7, 9],
    // [7, 1, 4, 2, 8],
  ];
  //   const [activeFormCheckBox,setActiveFormCheckBox] = useState([])
  const [activeFormCheckBox, setActiveFormCheckBox] = useState<string[]>([
    "Big/Small",
  ]);
  const [placeCheckBox, setPlaceCheckBox] = useState<{ [key: string]: any }>({
    Sum: {
      "Big/Small": "Big/Small",
      "Odd/Even": {},
      "Dragon/Tiger/Tie": {},
    },
  });
  const [formCheckBox, setFormCheckBox] = useState<boolean>(true);

  const [data, setData] = useState();
  const [percentage, setPercentage] = useState<any>({});
  const [colWidth, setColWidth] = useState<any>({});
  const [bigRoadData, setBigRoadData] = useState<any>({});
  const [showSmallRoad, setShowSmallRoad] = useState<boolean>(false);
  const [cockroachData, setCockroachData] = useState<any>({});
  const [smallRoadData, setSmallRoadData] = useState<any>({});
  const [nextColor, setNextColor] = useState<any>({});
  const [aa, bb] = useState<Record<string, any>>({});
  const [isBlinking, setIsBlinking] = useState(false);
  const [roadForms, setRoadForms] = useState<any[]>([]);
  const [roadFormsColor, setRoadFormsColor] = useState<string>("");
  const lottery_type_id = 1;

  const checkColor = {
    R: "B",
    B: "R",
  };
  const [allSelect, setAllSelect] = useState(false);

  const [roadBetInfo, setRoadBetInfo] = useState([]);

  function sortPlaceCheckBox(): { [key: string]: any } {
    const sortedKeys = Object.keys(placeCheckBox).sort((a, b) =>
      a.localeCompare(b)
    );

    const sortedPlaceCheckBox: { [key: string]: any } = {};
    sortedKeys.forEach((key) => {
      sortedPlaceCheckBox[key] = placeCheckBox[key];
    });

    return sortedPlaceCheckBox;
  }
  const [drawNumbers, setDrawNumbers] = useState([]);
  const [isShowLottery, setIsShowLottery] = useState("");
  const [timeLeft, setTimeLeft] = useState(60);

  const ff = () => {
    fetch(
      "https://cdmapiaws.ujiew3n.com/coron/ticketmod/currentSaleIssue/list?ticketIds=45",
      {
        headers: {
          "Content-Type": "application/json",
          Token: "b934880ab85141c3a02be83cf4b24bcc1722337661177",
        },
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(
          "------------------------------------------------------",
          data
        );
        setIsShowLottery(data.data[0].planId);
        if (data.code === 0 && data.data.length > 0) {
          // Extracting the start and end time
          const { startTime, endTime } = data.data[0];
          // Calculating the time left in seconds
          const timeLeftInSeconds = (endTime - startTime) / 1000;
          setTimeLeft(timeLeftInSeconds);
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  useEffect(ff, []);

  useEffect(() => {
    const fetchDrawNumbers = async () => {
      try {
        const response = await fetch(
          "https://cdmapiaws.ujiew3n.com/coron/trendGraph/chart/history?ticketId=45&num=100",
          {
            headers: {
              "Content-Type": "application/json",
              Token: "b934880ab85141c3a02be83cf4b24bcc1722337661177",
            },
            method: "GET",
          }
        );
        if (response.ok) {
          const data = await response.json();
          const processedDrawNumbers = data.data.map((item: any) =>
            item.code.split(",").map(Number)
          );
          setDrawNumbers(processedDrawNumbers.reverse());
        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };
    setTimeout(() => {
      fetchDrawNumbers();
    }, 15000);
    // const intervalId = setInterval(fetchDrawNumbers, 60000);

    // return () => clearInterval(intervalId);
  }, [isShowLottery]);

  useEffect(() => {
    // Decrease timeLeft by 1 every second
    const timerId = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime === 1) {
          ff();
          return 60; // Reset the countdown after reaching 0
        }
        return prevTime - 1;
      });
    }, 1000); // 1000 ms = 1 second

    // Clean up the timer interval on component unmount
    return () => clearInterval(timerId);
  }, []);

  // useEffect(() => {
  //   let mainTree: any = {};
  //   let percentage: any = {};
  //   let columnWidth: any = {};
  //   let bigBoy: any = {};
  //   let cockroach: any = {};
  //   let smallRoad: any = {};
  //   let nextColor: any = {};
  //   const timerStart = performance.now();
  //   // Big/Small Sum
  //   // ['Big/Small']

  //   //   {
  //   //     "Sum": {
  //   //         "Big/Small": "Big/Small",
  //   //         "Odd/Even": {},
  //   //         "Dragon/Tiger/Tie": {}
  //   //     }
  //   // }
  //   Object.keys(placeCheckBox)
  //     .sort((a: any, b: any) => a - b)
  //     .forEach((place) => {
  //       activeFormCheckBox.forEach((form) => {
  //         console.log(
  //           "form place",
  //           form,
  //           place,
  //           activeFormCheckBox,
  //           placeCheckBox
  //         );
  //         let trees;
  //         let _percent;
  //         let _colWidth;
  //         let _bigBoy;
  //         let _cockroach;
  //         let _smallRoad;
  //         let _nextColor;
  //         if (place !== "Sum" && form === "Dragon/Tiger/Tie") return;
  //         if (place === "Sum" && form === "P/C") return;
  //         if (place === "Sum of Top Two" && form === "Dragon/Tiger") return;

  //         if (place === "Sum" && form === "P/C") return;
  //         if (place !== "Sum" && form === "Dragon/Tiger/Tie") return;
  //         if (place == "Sum") {
  //           if (
  //             [
  //               "B/S Sum",
  //               "O/E Sum",
  //               "Sky/Ground",
  //               "First/Last",
  //               "Poultry/Beast",
  //               "Tail B/S",
  //             ].includes(form)
  //           ) {
  //             return;
  //           }
  //         }
  //         if (place === "Sum of Top Two" && form === "Dragon/Tiger") return;
  //         if (place === "Extra No." && form === "Big/Small(No Tie)") return;
  //         if (place === "Ball 1" && form === "Sky/Ground") {
  //           return;
  //         } else if (place === "Ball 2" && form === "Sky/Ground") {
  //           return;
  //         }
  //         if (place === "Zodiac No.") {
  //           if (form === "Big/Small(No Tie)") return;
  //           if (form === "Poultry/Beast") return;
  //           if (form === "First/Last") return;
  //           if (form === "Sky/Ground") return;
  //           if (form === "Tail B/S") return;
  //           if (form === "Big/Small") return;
  //           if (form === "O/E Sum") return;
  //           if (form === "B/S Sum") return;
  //         }
  //         if (
  //           [
  //             "Ball 1",
  //             "Ball 2",
  //             "Ball 3",
  //             "Ball 4",
  //             "Ball 5",
  //             "Ball 6",
  //           ].includes(place)
  //         ) {
  //           if (form === "Big/Small(No Tie)") return;
  //           if (form === "Poultry/Beast") return;
  //           if (form === "First/Last") return;
  //           if (form === "Sky/Ground") return;
  //         }

  //         if (place === "1st/2nd") {
  //           if (["Big/Small", "Odd/Even", "P/C", "B/S Sum"].includes(form))
  //             return;
  //         }

  //         if (place === "1st/3rd") {
  //           if (["Big/Small", "Odd/Even", "P/C", "B/S Sum"].includes(form))
  //             return;
  //         }

  //         if (place === "2nd/3rd") {
  //           if (["Big/Small", "Odd/Even", "P/C", "B/S Sum"].includes(form))
  //             return;
  //         }

  //         if (place === "1st/2nd/3rd") {
  //           if (["Big/Small", "Odd/Even", "P/C"].includes(form)) return;
  //         }

  //         if (["1st", "2nd", "3rd"].includes(place)) {
  //           if (
  //             ["B/S Sum", "O/E Sum", "B/S Tail Sum", "P/C Tail Sum"].includes(
  //               form
  //             )
  //           )
  //             return;
  //         }

  //         if (place === "Sum of Top Two") {
  //           if (form === "Dragon/Tiger") return;
  //         }

  //         if (
  //           place === "6th" ||
  //           place === "7th" ||
  //           place === "8th" ||
  //           place === "9th" ||
  //           place === "10th"
  //         ) {
  //           // console.log("came here")
  //           if (form === "Dragon/Tiger") return;
  //         }

  //         if (
  //           ["1st", "2nd", "3rd", "4th", "5th"].includes(place) &&
  //           lottery_type_id.toString() !== "2"
  //         ) {
  //           if (form === "Dragon/Tiger") return;
  //         }
  //         // console.log("form place after");
  //         const regularTree = buildTree(
  //           drawNumbers,
  //           place,
  //           form,
  //           lottery_type_id.toString()
  //         );
  //         console.log("form place after", regularTree);
  //         trees = regularTree.tree;
  //         _percent = regularTree.percentage;
  //         _colWidth = regularTree.colWidth;
  //         _bigBoy = regularTree.bigBoy;
  //         _cockroach = regularTree.cockroach;
  //         _smallRoad = regularTree.smallRoad;
  //         _nextColor = regularTree.nextColor;
  //         // }

  //         if (
  //           trees &&
  //           _percent &&
  //           _colWidth &&
  //           _bigBoy &&
  //           _cockroach &&
  //           _smallRoad &&
  //           _nextColor
  //         ) {
  //           mainTree[form + "|" + place] = trees;
  //           percentage[form + "|" + place] = _percent;
  //           columnWidth[form + "|" + place] = _colWidth;
  //           bigBoy[form + "|" + place] = _bigBoy;
  //           cockroach[form + "|" + place] = _cockroach;
  //           smallRoad[form + "|" + place] = _smallRoad;
  //           nextColor[form + "|" + place] = _nextColor;
  //           console.log("mainTree", _bigBoy);
  //         }
  //       });
  //     });
  //   console.log(
  //     "mainTree",
  //     Object.keys(mainTree),
  //     Object.keys(mainTree).length
  //   );
  //   setData(mainTree);
  //   setPercentage(percentage);
  //   setColWidth(columnWidth);
  //   setBigRoadData(bigBoy);
  //   setCockroachData(cockroach);
  //   setSmallRoadData(smallRoad);
  //   setNextColor(nextColor);

  //   bb(sortPlaceCheckBox());

  //   const timerEnd = performance.now();
  //   const elapsedTime = timerEnd - timerStart;
  //   const seconds = (elapsedTime / 1000).toFixed(2);
  //   console.log(`Code execution time: ${seconds} seconds`);
  // }, [activeFormCheckBox, drawNumbers]);


  useEffect(() => {
    const timerStart = performance.now();
 
    const worker = new Worker(new URL('./worker.js', import.meta.url));

    worker.postMessage({
      placeCheckBox,
      drawNumbers,
      activeFormCheckBox,
      lottery_type_id,
    });

    worker.onmessage = (e) => {
      const { mainTree, percentage, columnWidth, bigBoy, cockroach, smallRoad, nextColor } = e.data;
      console.log(e.data)
      setData(mainTree);
      setPercentage(percentage);
      setColWidth(columnWidth);
      setBigRoadData(bigBoy);
      setCockroachData(cockroach);
      setSmallRoadData(smallRoad);
      setNextColor(nextColor);
  
      bb(sortPlaceCheckBox());

      // setData({ mainTree, percentage, columnWidth, bigBoy, cockroach, smallRoad, nextColor });
    };
    const timerEnd = performance.now();
    const elapsedTime = timerEnd - timerStart;
    const seconds = (elapsedTime / 1000).toFixed(2);
    console.log(`Code execution time: ${seconds} seconds`);
    return () => worker.terminate();
  }, [placeCheckBox, drawNumbers, activeFormCheckBox]);

  /**
   * this function is Old but gold. because it works perfectly but just long
   * since its working on about 100 lottery games
   * @param numbersCategory
   */
  function generateGridJSON(numbersCategory: string) {
    setPlaceCheckBox((prevPlaceCheckBox) => {
      // Create a copy of the previous state
      const updatedPlaceCheckBox = { ...prevPlaceCheckBox };
      console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxx", updatedPlaceCheckBox);

      Object.keys(updatedPlaceCheckBox).forEach((place) => {
        if (place === "Sum" && numbersCategory === "P/C") return;
        if (place !== "Sum" && numbersCategory === "Dragon/Tiger/Tie") return;
        if (place == "Sum") {
          if (
            [
              "B/S Sum",
              "O/E Sum",
              "Sky/Ground",
              "First/Last",
              "Poultry/Beast",
              "Tail B/S",
            ].includes(numbersCategory)
          ) {
            return;
          }
        }
        if (place === "Sum of Top Two" && numbersCategory === "Dragon/Tiger")
          return;
        if (place === "Extra No." && numbersCategory === "Big/Small(No Tie)")
          return;
        if (place === "Ball 1" && numbersCategory === "Sky/Ground") {
          return;
        } else if (place === "Ball 2" && numbersCategory === "Sky/Ground") {
          return;
        }
        if (place === "Zodiac No.") {
          if (numbersCategory === "Big/Small(No Tie)") return;
          if (numbersCategory === "Poultry/Beast") return;
          if (numbersCategory === "First/Last") return;
          if (numbersCategory === "Sky/Ground") return;
          if (numbersCategory === "Tail B/S") return;
          if (numbersCategory === "Big/Small") return;
          if (numbersCategory === "O/E Sum") return;
          if (numbersCategory === "B/S Sum") return;
        }
        if (
          ["Ball 1", "Ball 2", "Ball 3", "Ball 4", "Ball 5", "Ball 6"].includes(
            place
          )
        ) {
          if (numbersCategory === "Big/Small(No Tie)") return;
          if (numbersCategory === "Poultry/Beast") return;
          if (numbersCategory === "First/Last") return;
          if (numbersCategory === "Sky/Ground") return;
        }

        if (place === "1st/2nd") {
          if (
            ["Big/Small", "Odd/Even", "P/C", "B/S Sum"].includes(
              numbersCategory
            )
          )
            return;
        }

        if (place === "1st/3rd") {
          if (
            ["Big/Small", "Odd/Even", "P/C", "B/S Sum"].includes(
              numbersCategory
            )
          )
            return;
        }

        if (place === "2nd/3rd") {
          if (
            ["Big/Small", "Odd/Even", "P/C", "B/S Sum"].includes(
              numbersCategory
            )
          )
            return;
        }

        if (place === "1st/2nd/3rd") {
          if (["Big/Small", "Odd/Even", "P/C"].includes(numbersCategory))
            return;
        }

        if (["1st", "2nd", "3rd"].includes(place)) {
          if (
            ["B/S Sum", "O/E Sum", "B/S Tail Sum", "P/C Tail Sum"].includes(
              numbersCategory
            )
          )
            return;
        }

        if (place === "Sum of Top Two") {
          if (numbersCategory === "Dragon/Tiger") return;
        }

        if (
          ["1st", "2nd", "3rd", "4th", "5th"].includes(place) &&
          lottery_type_id.toString() !== "2"
        ) {
          if (numbersCategory === "Dragon/Tiger") return;
        }

        if (
          ["6th", "7th", "8th", "9th", "10th"].includes(place) &&
          lottery_type_id.toString() == "2"
        ) {
          if (numbersCategory === "Dragon/Tiger") return;
        }

        console.log("place zzzz", place, numbersCategory);
        // Update the specific property within the nested object
        updatedPlaceCheckBox[place] = {
          ...updatedPlaceCheckBox[place],
          [numbersCategory]: numbersCategory,
        };
      });
      console.log("place zzzz", numbersCategory);
      return updatedPlaceCheckBox; // Return the updated state
    });
  }

  useEffect(() => {
    console.log("xxxxxxxxxxxxxxxxxxxxxxxxx", activeFormCheckBox);
    if (activeFormCheckBox.length > 0) {
      activeFormCheckBox.forEach((place) => {
        console.log("xxxxxxxxxxxxxxxxxxxxxxxxx place", place);
        generateGridJSON(place);
      });
    }
  }, [activeFormCheckBox, formCheckBox]);

  return (
    <div className={styles.container}>
      <div className={styles.overflow}>
        <div className={styles.gopy}>
          <button
            className={styles.borp1}
            onClick={() => {
              console.log("lastCell", ["B", "O", "D", "P", "F"]);
              setRoadForms(["B", "O", "D", "P", "F", "S"]);
              setRoadFormsColor("R");
            }}
          >
            B,O,D,P
          </button>
          <button
            className={styles.borp2}
            onClick={() => {
              console.log("lastCell", ["S", "E", "T", "C", "L"]);
              setRoadForms(["S", "E", "T", "C", "L", "G", "B"]);
              setRoadFormsColor("B");
            }}
          >
            S,E,T,C
          </button>
          <div className={styles.glop}>
            <div className={styles.kju}>
              <input
                type="checkbox"
                id="small_road"
                onChange={() => setShowSmallRoad((prev) => !prev)}
              />
            </div>
            <label htmlFor="small_road" className={styles.kju}>
              Small Road
            </label>
          </div>
        </div>
        <div style={{ color: "white" }}>Next update in: {timeLeft} seconds</div>
      </div>
      <h1>{drawNumbers[99]}</h1>
      <h1>{isShowLottery}</h1>
      {
        <div className={styles.flowmainbox}>
          {Object.keys(aa).map((_key, index) => {
            let placeCheckBoxObjValues: any = Object.values(
              placeCheckBox[_key]
            ).filter((item) => typeof item === "string");
            if (placeCheckBoxObjValues.length > 0) {
              return (
                <div key={index}>
                  {/* {JSON.stringify(placeCheckBoxObjValues)} {JSON.stringify(_key)} */}
                  {placeCheckBoxObjValues.map((_form: string, i: number) => {
                    if (
                      lottery_type_id.toString() == "6" &&
                      _form === "Dragon/Tiger" &&
                      ["1st", "2nd", "3rd", "4th", "5th"].includes(_key)
                    ) {
                      return null;
                    }
                    return (
                      <div className={styles.contain} key={i}>
                        <div className={styles.dashes}>
                          <div className={styles.head}>
                            <div className={styles.nv}>
                              <span className={styles.places}>{_key}</span> -{" "}
                              <span className={styles.form}>{_form}</span>
                            </div>
                            <div
                              className={`${styles.nv} ${styles.derivedRoad}`}
                            >
                              {Object.keys(
                                percentage?.[_form + "|" + _key] || {}
                              ).map((key, index) => {
                                const derivedRoadSection = Object.keys(
                                  nextColor?.[_form + "|" + _key] ?? {}
                                );
                                return (
                                  <DerivedRoadColorsSection
                                    key={index}
                                    keyName={key}
                                    derivedRoadSection={derivedRoadSection}
                                    nextColor={nextColor}
                                    _key={_key}
                                    _form={_form}
                                    checkColor={checkColor}
                                  />
                                );
                              })}
                            </div>
                          </div>
                          <div className={styles.grew}>
                            <MainRoad
                              card={_key}
                              colWidth={colWidth[_form + "|" + _key]}
                              form={_form}
                              data={data}
                            />
                          </div>
                          {!showSmallRoad && (
                            <div className={styles.grew2}>
                              {/* { JSON.stringify(isBlinking)} */}
                              <DerivedRoads
                                card={_key}
                                colWidth={
                                  bigRoadData?.[_form + "|" + _key]?.[
                                    "colWidth"
                                  ]
                                }
                                form={_form}
                                data={bigRoadData}
                                derivedRoadType={"bigeyeboy"}
                                // drawNumbers={drawNumbers}
                                isBlinking={isBlinking}
                                // toggleBlinking={toggleBlinking}
                                roadFormsColor={roadFormsColor}
                                roadForms={drawNumbers}
                              />
                              <DerivedRoads
                                card={_key}
                                colWidth={
                                  cockroachData?.[_form + "|" + _key]?.[
                                    "colWidth"
                                  ]
                                }
                                form={_form}
                                data={cockroachData}
                                derivedRoadType={"cockroachpig"}
                                // drawNumbers={drawNumbers}
                                isBlinking={isBlinking}
                                // toggleBlinking={()=>toggleBlinking()}
                                // toggleBlinking={toggleBlinking}
                                roadFormsColor={roadFormsColor}
                                roadForms={drawNumbers}
                              />
                              <DerivedRoads
                                card={_key}
                                colWidth={
                                  smallRoadData?.[_form + "|" + _key]?.[
                                    "colWidth"
                                  ]
                                }
                                form={_form}
                                data={smallRoadData}
                                derivedRoadType={"smallroad"}
                                // drawNumbers={drawNumbers}
                                isBlinking={isBlinking}
                                // toggleBlinking={toggleBlinking}
                                roadFormsColor={roadFormsColor}
                                roadForms={drawNumbers}
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            }
          })}
        </div>
      }
    </div>
  );
}
export default RoadBet;

const generateInitialDrawNumbers = () => {
  const initialNumbers = [];
  for (let i = 0; i < 100; i++) {
    initialNumbers.push([
      Math.floor(Math.random() * 10),
      Math.floor(Math.random() * 10),
      Math.floor(Math.random() * 10),
      Math.floor(Math.random() * 10),
      Math.floor(Math.random() * 10),
    ]);
  }
  return initialNumbers;
};

// useEffect(() => {
//   // Replace with your actual fetch call
//   fetch(
//     // "http://192.168.1.40/task/chairman/api/v1/limvo/draw_data?drawInfo&lottery_id=1",
//     "https://cdmapiaws.ujiew3n.com/coron/ticketmod/currentSaleIssue/list?ticketIds=45",
//     {
//       headers: { 'Content-Type': 'application/json', 'Token': "b934880ab85141c3a02be83cf4b24bcc1722337661177" },
//       method: 'GET',
//     }
//   )
//     .then((response) => response.json())
//     .then((data) => {
//       if (data.type === "success" && data.timeLeft !== undefined) {
//         setTimeLeft(data.timeLeft);
//       }
//     })
//     .catch((error) => console.error("Error fetching data:", error));
// }, []); // Empty dependency array to run only once on component mount

// useEffect(() => {
//   const fetchDrawNumbers = async () => {
//     try {
//       const response = await fetch(
//         // "https://www.easyopen1573.com

//         "http://192.168.1.40/task/apis/road_draws.php?lottery_id=1"
//       );
//       if (response.ok) {
//         const data = await response.json();
//         console.log("-----------> ", data);
//         setDrawNumbers(data.reverse()); // Assume 'drawnNumbers' is the key in the response data
//       } else {
//         console.error("Failed to fetch data");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   // Fetch the data immediately on mount
//   fetchDrawNumbers();

//   // Set up the interval to fetch data every 60 seconds
//   const intervalId = setInterval(fetchDrawNumbers, 60000); // 60000 ms = 1 minute

//   // Clean up the interval on component unmount
//   return () => clearInterval(intervalId);
// }, []); // Empty dependency array ensures this runs once on mount and sets up the interval

// useEffect(() => {
//   // Initialize with 100 draw numbers
//   setDrawNumbers(generateInitialDrawNumbers());

//   const fetchDrawNumbers = async () => {
//     try {
//       const response = await fetch(
//         "https://www.easyopen1573.com/task/apis/road_draws.php?lottery_id=1"
//       );
//       // if (response.ok) {
//       //   const data = await response.json();
//       const newD = [
//         Math.floor(Math.random() * 10),
//         Math.floor(Math.random() * 10),
//         Math.floor(Math.random() * 10),
//         Math.floor(Math.random() * 10),
//         Math.floor(Math.random() * 10),
//       ];
//         console.log("---sssssss--------> ", newD);
//         setDrawNumbers((prevDrawNumbers:any) => {

//           // Assuming 'drawnNumbers' is the key in the response data
//           const newDrawNumbers = [...prevDrawNumbers, newD];
//           if (newDrawNumbers.length > 100) {
//             // Remove the oldest numbers to maintain only 100
//             newDrawNumbers.shift();
//           }
//           return newDrawNumbers;
//         });
//       // } else {
//       //   console.error("Failed to fetch data");
//       // }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   // Fetch the data immediately on mount
//   fetchDrawNumbers();

//   // Set up the interval to fetch data every 60 seconds
//   const intervalId = setInterval(fetchDrawNumbers, 60000); // 60000 ms = 1 minute

//   // Clean up the interval on component unmount
//   return () => clearInterval(intervalId);
// }, []);
// if (getLastArrayWithCol2Var && bigEyeBoy) {
//   if (currentLetterCurrentCol === "A") {
//     bigEyeBoyArr.push(updatedBigEyeRoadObj[currentLetterCurrentCol]);
//   } else if (getLastArrayWithCol2Var[0] === bigEyeBoy[0]) {
//     if (!Object.keys(bigEyeRoadObj).length) {
//       bigEyeRoadObj[nextLetterToBreakColumn] = "R";
//     } else {
//       Object.keys(bigEyeRoadObj).forEach((key) => delete bigEyeRoadObj[key]);
//       bigEyeRoadObj[nextLetterToBreakColumn] = "R";
//     }
//     // bigEyeBoyArr.push(updatedBigEyeRoadObj[currentLetterCurrentCol]);
//     console.log("sssssssss not pushed");
//   } else {
//     if (!Object.keys(bigEyeRoadObj).length) {
//       bigEyeRoadObj[nextLetterToBreakColumn] = "B";
//     } else {
//       Object.keys(bigEyeRoadObj).forEach((key) => delete bigEyeRoadObj[key]);
//       bigEyeRoadObj[nextLetterToBreakColumn] = "B";
//     }
//   }
//   if (!isEmpty(updatedBigEyeRoadObj)) {
//     if (
//       bigEyeRoadObj &&
//       Object.keys(updatedBigEyeRoadObj)[0] === currentLetterCurrentCol
//     ) {
//       // console.log(
//       //   "sssssssssss equal",
//       //   updatedBigEyeRoadObj[currentLetterCurrentCol],
//       //   JSON.stringify(bigEyeBoyArr)
//       // );

//       bigEyeBoyArr.push(updatedBigEyeRoadObj[currentLetterCurrentCol]);
//       console.log(
//         "sssssssss equal and after",
//         updatedBigEyeRoadObj[currentLetterCurrentCol],
//         JSON.stringify(bigEyeBoyArr)
//       );
//     } else {
//       const firstValue = letter(Object.values(updatedBigEyeRoadObj)[0]);
//       // console.log(
//       //   "ssssssssssss firstValue before",
//       //   firstValue,
//       //   JSON.stringify(bigEyeBoyArr)
//       // );
//       bigEyeBoyArr.push(firstValue);
//       console.log(
//         "sssssssss firstValue and after",
//         firstValue,
//         JSON.stringify(bigEyeBoyArr)
//       );
//     }
//   } else {
//     console.log("sssssssss it came here");
//   }
// } else {
//   console.log("sssssssss it came here 2");
// }
// console.log("indexof ssssssssssh ==========>xx", tree);

// if (getLastArrayWithCol2Var && smallRoad) {
//   if (currentLetterCurrentCol === "A") {
//     bigEyeBoyArr.push(updatedBigEyeRoadObj[currentLetterCurrentCol]);
//   } else if (getLastArrayWithCol2Var[0] === smallRoad[0]) {
//     if (!Object.keys(smallRoadObj).length) {
//       smallRoadObj[nextLetterToBreakColumn] = "R";
//     } else {
//       Object.keys(smallRoadObj).forEach((key) => delete smallRoadObj[key]);
//       smallRoadObj[nextLetterToBreakColumn] = "R";
//     }
//   } else {
//     if (!Object.keys(smallRoadObj).length) {
//       smallRoadObj[nextLetterToBreakColumn] = "B";
//     } else {
//       Object.keys(smallRoadObj).forEach((key) => delete smallRoadObj[key]);
//       smallRoadObj[nextLetterToBreakColumn] = "B";
//     }
//   }
//   if (!isEmpty(updatedSmallRoadObj)) {
//     if (
//       smallRoadObj &&
//       Object.keys(updatedSmallRoadObj)[0] === currentLetterCurrentCol
//     ) {
//       smallRoadArr.push(updatedSmallRoadObj[currentLetterCurrentCol]);
//     } else {
//       const firstValue = letter(Object.values(updatedSmallRoadObj)[0]);
//       smallRoadArr.push(firstValue);
//     }
//   }
// }

// if (getLastArrayWithCol2Var && cockroach) {
//   if (currentLetterCurrentCol === "A") {
//     bigEyeBoyArr.push(updatedBigEyeRoadObj[currentLetterCurrentCol]);
//   } else if (getLastArrayWithCol2Var[0] === cockroach[0]) {
//     if (!Object.keys(cockroachObj).length) {
//       cockroachObj[nextLetterToBreakColumn] = "R";
//     } else {
//       Object.keys(cockroachObj).forEach((key) => delete cockroachObj[key]);
//       cockroachObj[nextLetterToBreakColumn] = "R";
//     }
//   } else {
//     if (!Object.keys(cockroachObj).length) {
//       cockroachObj[nextLetterToBreakColumn] = "B";
//     } else {
//       Object.keys(cockroachObj).forEach((key) => delete cockroachObj[key]);
//       cockroachObj[nextLetterToBreakColumn] = "B";
//     }
//   }
//   if (!isEmpty(updatedCockroachObj)) {
//     if (
//       cockroachObj &&
//       Object.keys(updatedCockroachObj)[0] === currentLetterCurrentCol
//     ) {
//       cockroachArr.push(updatedCockroachObj[currentLetterCurrentCol]);
//     } else {
//       const firstValue = letter(Object.values(updatedCockroachObj)[0]);
//       cockroachArr.push(firstValue);
//     }
//   }
// }
// function derivedRoad(tree: [number, number, string][], col: number, {bigEyeRoadObj,
//   smallRoadObj,
//   cockroachObj,
//   bigEyeBoyArr,
//   smallRoadArr,
//   cockroachArr}): DerivedRoadResult {
//   const result: DerivedRoadResult = {
//     bigEyeRoadObj: {},
//     smallRoadObj: {},
//     cockroachObj: {},
//     bigEyeBoyArr: [],
//     smallRoadArr: [],
//     cockroachArr: []
//   };

//   const letter = (val: string) => (val === "R" ? "B" : "R");

//   const processRoad = (
//     roadObj: RoadObject,
//     roadArr: string[],
//     currentCol: [number, number, string] | undefined,
//     prevCol: [number, number, string] | undefined,
//     updatedRoadObj: RoadObject
//   ) => {
//     if (currentCol && prevCol) {
//       const currentLetterCurrentCol = currentCol[2];
//       const nextLetterToBreakColumn = check[currentCol[2]];

//       if (currentLetterCurrentCol === "A") {
//         roadArr.push(updatedRoadObj[currentLetterCurrentCol]);
//       } else if (currentCol[0] === prevCol[0]) {
//         roadObj[nextLetterToBreakColumn] = "R";
//       } else {
//         roadObj[nextLetterToBreakColumn] = "B";

//         if (!isEmpty(updatedRoadObj)) {
//           if (Object.keys(updatedRoadObj)[0] === currentLetterCurrentCol) {
//             roadArr.push(updatedRoadObj[currentLetterCurrentCol]);
//           } else {
//             const firstValue = letter(Object.values(updatedRoadObj)[0]);
//             roadArr.push(firstValue);
//           }
//         }
//       }
//     }
//   };

//   const currentCol = getLastArrayWithColWithoutA(tree, col);
//   const bigEyeBoy = getLastArrayWithColWithoutA(tree, col - 1);
//   const smallRoad = getLastArrayWithColWithoutA(tree, col - 2);
//   const cockroach = getLastArrayWithColWithoutA(tree, col - 3);

//   processRoad(result.bigEyeRoadObj, result.bigEyeBoyArr, currentCol, bigEyeBoy, { ...result.bigEyeRoadObj });
//   processRoad(result.smallRoadObj, result.smallRoadArr, currentCol, smallRoad, { ...result.smallRoadObj });
//   processRoad(result.cockroachObj, result.cockroachArr, currentCol, cockroach, { ...result.cockroachObj });
//   console.log("indexof ssssssssssh ==========>xx", result);
//   return result;
// }

// // Example usage:
// const tree: [number, number, string][] = [
//   // Your tree structure here
// ];

// const col = 24;
// const result = derivedRoad(tree, col);
// console.log(result);

// Helper function to get the last array without 'A' in a specific column

// Helper function to update a road object based on certain conditions
// function updateRoadObj(
//   roadObj: Record<string, string>,
//   nextLetter: string,
//   condition: boolean
// ) {
//   if (condition) {
//       roadObj[nextLetter] = "R";
//   } else {
//       roadObj[nextLetter] = "B";
//   }
// }

// Helper function to push a letter into an array based on conditions

// function derivedRoad(tree: [number, number, string][], col: number) {
//   let bigEyeRoadObj: any = {};
//   let smallRoadObj: any = {};
//   let cockroachObj: any = {};

//   const bigEyeBoyArr = [];
//   const smallRoadArr = [];
//   const cockroachArr = [];

//   let getLastArrayWithCol2Var = getLastArrayWithColWithoutA(tree, col);
//   let currentLetterCurrentCol =
//     getLastArrayWithCol2Var != null && getLastArrayWithCol2Var[2]; // Current letter in the current column
//   let nextLetterToBreakColumn =
//     getLastArrayWithCol2Var != null && check[getLastArrayWithCol2Var[2]]; // Next letter to break the column

//   let letter = (val: string) => (val === "R" ? "B" : "R");

//   let updatedBigEyeRoadObj = { ...bigEyeRoadObj };
//   let updatedSmallRoadObj = { ...smallRoadObj };
//   let updatedCockroachObj = { ...cockroachObj };
//   let bigEyeBoy = getLastArrayWithColWithoutA(tree, col - 1);
//   let smallRoad = getLastArrayWithColWithoutA(tree, col - 2);
//   let cockroach = getLastArrayWithColWithoutA(tree, col - 3);

//   if (getLastArrayWithCol2Var && bigEyeBoy) {
//     if (currentLetterCurrentCol === "A") {
//       bigEyeBoyArr.push(updatedBigEyeRoadObj[currentLetterCurrentCol]);
//     } else if (getLastArrayWithCol2Var[0] === bigEyeBoy[0]) {
//       if (!Object.keys(bigEyeRoadObj).length) {
//         bigEyeRoadObj[nextLetterToBreakColumn] = "R";
//       } else {
//         Object.keys(bigEyeRoadObj).forEach((key) => delete bigEyeRoadObj[key]);
//         bigEyeRoadObj[nextLetterToBreakColumn] = "R";
//       }
//     } else {
//       if (!Object.keys(bigEyeRoadObj).length) {
//         bigEyeRoadObj[nextLetterToBreakColumn] = "B";
//       } else {
//         Object.keys(bigEyeRoadObj).forEach((key) => delete bigEyeRoadObj[key]);
//         bigEyeRoadObj[nextLetterToBreakColumn] = "B";
//       }

//       if (!isEmpty(updatedBigEyeRoadObj)) {
//         if (
//           bigEyeRoadObj &&
//           Object.keys(updatedBigEyeRoadObj)[0] === currentLetterCurrentCol
//         ) {
//           bigEyeBoyArr.push(updatedBigEyeRoadObj[currentLetterCurrentCol]);
//         } else {
//           const firstValue = letter(Object.values(updatedBigEyeRoadObj)[0]);
//           bigEyeBoyArr.push(firstValue);
//         }
//       }
//     }
//   }
//   console.log("indexof ssssssssssh ==========>xx", tree);

//   if (getLastArrayWithCol2Var && smallRoad) {
//     if (currentLetterCurrentCol === "A") {
//       bigEyeBoyArr.push(updatedBigEyeRoadObj[currentLetterCurrentCol]);
//     } else if (getLastArrayWithCol2Var[0] === smallRoad[0]) {
//       if (!Object.keys(smallRoadObj).length) {
//         smallRoadObj[nextLetterToBreakColumn] = "R";
//       } else {
//         Object.keys(smallRoadObj).forEach((key) => delete smallRoadObj[key]);
//         smallRoadObj[nextLetterToBreakColumn] = "R";
//       }
//     } else {
//       if (!Object.keys(smallRoadObj).length) {
//         smallRoadObj[nextLetterToBreakColumn] = "B";
//       } else {
//         Object.keys(smallRoadObj).forEach((key) => delete smallRoadObj[key]);
//         smallRoadObj[nextLetterToBreakColumn] = "B";
//       }

//       if (!isEmpty(updatedSmallRoadObj)) {
//         if (
//           smallRoadObj &&
//           Object.keys(updatedSmallRoadObj)[0] === currentLetterCurrentCol
//         ) {
//           smallRoadArr.push(updatedSmallRoadObj[currentLetterCurrentCol]);
//         } else {
//           const firstValue = letter(Object.values(updatedSmallRoadObj)[0]);
//           smallRoadArr.push(firstValue);
//         }
//       }
//     }
//   }

//   if (getLastArrayWithCol2Var && cockroach) {
//     if (currentLetterCurrentCol === "A") {
//       bigEyeBoyArr.push(updatedBigEyeRoadObj[currentLetterCurrentCol]);
//     } else if (getLastArrayWithCol2Var[0] === cockroach[0]) {
//       if (!Object.keys(cockroachObj).length) {
//         cockroachObj[nextLetterToBreakColumn] = "R";
//       } else {
//         Object.keys(cockroachObj).forEach((key) => delete cockroachObj[key]);
//         cockroachObj[nextLetterToBreakColumn] = "R";
//       }
//     } else {
//       if (!Object.keys(cockroachObj).length) {
//         cockroachObj[nextLetterToBreakColumn] = "B";
//       } else {
//         Object.keys(cockroachObj).forEach((key) => delete cockroachObj[key]);
//         cockroachObj[nextLetterToBreakColumn] = "B";
//       }

//       if (!isEmpty(updatedCockroachObj)) {
//         if (
//           cockroachObj &&
//           Object.keys(updatedCockroachObj)[0] === currentLetterCurrentCol
//         ) {
//           cockroachArr.push(updatedCockroachObj[currentLetterCurrentCol]);
//         } else {
//           const firstValue = letter(Object.values(updatedCockroachObj)[0]);
//           cockroachArr.push(firstValue);
//         }
//       }
//     }
//   }

//   // console.log("bigRoad ssssssssssh ==========>", bigEyeBoyArr, bigEyeRoadObj)
//   // console.log("smallRoad ssssssssssh ==========>", smallRoadArr, smallRoadObj)
//   // console.log("cockroach ssssssssssh ==========>", cockroachArr, cockroachObj)
// }
