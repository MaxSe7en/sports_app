import React from "react";
import styles from "./about.module.css"; //"./page.module.css";
import { check, roadPredictorColorMapper } from "./roadBetHelperFunction";
// Define the types for your props here
type DerivedRoadColorsSectionProps = {
  keyName: string;
  derivedRoadSection: string[];
  nextColor: Record<string, Record<string, Record<string, string>>>;
  _form: string;
  _key: string;
  checkColor: Record<string, string>;
};

const DerivedRoadColorsSection: React.FC<DerivedRoadColorsSectionProps> = ({
  keyName,
  derivedRoadSection,
  nextColor,
  _form,
  _key,
  checkColor,
}) => {
  return (
    <div className={styles.road_bet}>
      <span className={` ${styles.main}`}>
        &nbsp;&nbsp;
        {`${
          ["Y", "M", "J"].includes(keyName)
            ? roadPredictorColorMapper[keyName]
            : keyName
        }: `}
        &nbsp;&nbsp;
        {/* {JSON.stringify(derivedRoadSection)} */}
        <span className={`${styles.items}`}>
          {derivedRoadSection.map((derivedRoadSectionKey, index) => {
            const colorKey = Object.values(
              nextColor[_form + "|" + _key][derivedRoadSectionKey]
            )[0];

            return (
              <span className={styles.derivedRoadColors} key={index}>
                {nextColor[_form + "|" + _key][
                  derivedRoadSectionKey
                ].hasOwnProperty(keyName) ? (
                  <>
                    {index === 0 && (
                      <span
                        style={
                          nextColor[_form + "|" + _key][derivedRoadSectionKey][
                            keyName
                          ] === "R"
                            ? stylesColor.redNotfillArc
                            : stylesColor.blueNotfillArc
                        }
                      ></span>
                    )}
                    {index === 1 && (
                      <span
                        style={
                          nextColor[_form + "|" + _key][derivedRoadSectionKey][
                            keyName
                          ] === "R"
                            ? stylesColor.redFillArc
                            : stylesColor.blueFillArc
                        }
                      ></span>
                    )}
                    {index === 2 && (
                      <span
                        style={
                          nextColor[_form + "|" + _key][derivedRoadSectionKey][
                            keyName
                          ] === "R"
                            ? stylesColor.redLine
                            : stylesColor.blueLine
                        }
                      ></span>
                    )}
                  </>
                ) : (
                  <>
                    {index === 0 && (
                      <span
                        style={
                          checkColor[colorKey] === "R"
                            ? stylesColor.redNotfillArc
                            : stylesColor.blueNotfillArc
                        }
                      ></span>
                    )}
                    {index === 1 && (
                      <span
                        style={
                          checkColor[colorKey] === "R"
                            ? stylesColor.redFillArc
                            : stylesColor.blueFillArc
                        }
                      ></span>
                    )}
                    {index === 2 && (
                      <span
                        style={
                          checkColor[colorKey] === "R"
                            ? stylesColor.redLine
                            : stylesColor.blueLine
                        }
                      ></span>
                    )}
                  </>
                )}
              </span>
            );
          })}
        </span>
      </span>
    </div>
  );
};

const stylesColor = {
  redNotfillArc: {
    display: "inline-block",
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    border: "3px solid #ff001e",
  },
  blueNotfillArc: {
    display: "inline-block",
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    border: "3px solid #007aff",
  },
  blueFillArc: {
    display: "inline-block",
    width: "10px",
    height: "10px",
    borderRadius: "10px",
    background: "#007aff",
  },
  redFillArc: {
    display: "inline-block",
    width: "10px",
    height: "10px",
    borderRadius: "10px",
    background: "#ff001e",
  },
  blueLine: {
    display: "inline-block",
    width: "8px",
    height: "2px",
    borderRadius: "5px",
    background: "#007aff",
    transform: "rotate(-45deg) scale(1.2)",
    marginBottom: "4px",
    marginLeft: "2px",
  },
  redLine: {
    display: "inline-block",
    width: "8px",
    height: "2px",
    borderRadius: "5px",
    background: "#ff001e",
    transform: "rotate(-45deg) scale(1.2)",
    marginBottom: "4px",
    marginLeft: "2px",
  },
};
export default DerivedRoadColorsSection;
