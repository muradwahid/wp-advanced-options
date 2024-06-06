import React, { useEffect, useRef, useState } from "react";
import "./unitControl.css";


/**
 * BUnitControl Component
 * 
 * @param {object} props - The props object
 * @param {string} props.label - The label for the unit control
 * @param {array} props.units - The units available for selection
 * @param {string} props.className - The class name for the unit control
 * @param {object} props.style - The style object for the unit control
 * @param {string} props.value - The value of the unit control
 * @param {function} props.onChange - The function to handle changes in the unit control value
 * @param {string} props.labelPosition - The position of the label
 * @returns {JSX.Element} React component
 */


const BUnitControl = (props) => {
  const {
    label,
    units,
    className,
    style,
    value = "0px",
    onChange = () => {},
    labelPosition = "top",
    ...rest
  } = props;
  const unitRef = useRef();
  const [toggle, setToggle] = useState(false);
  const defaults = [
    { label: "px", value: "px" },
    { label: "%", value: "%" },
    { label: "em", value: "em" },
    { label: "rem", value: "rem" },
    { label: "vw", value: "vw" },
    { label: "vh", value: "vh" },
  ];
  const defaultUnits = units || defaults;
  const number = value
    .split("")
    .filter((char) => !isNaN(char) && char !== "%")
    .join("");
  const unit = value
    .split("")
    .filter((char) => isNaN(char) || char === "%")
    .join("");
  const [currentNumber, setCurrentNumber] = useState(number);
  const [currentUnit, setCurrentUnit] = useState(unit);
  useEffect(() => {
    onChange(`${currentNumber}${currentUnit}`);
  }, [currentNumber, currentUnit]);

  useEffect(() => {
    const handle = (e) => {
      if (!unitRef?.current?.contains(e.target)) {
        setToggle(false);
      }
    };
    document.addEventListener("mousedown", handle);
    return () => {
      document.removeEventListener("mousedown", handle);
    };
  });
  return (
    <div
      {...rest}
      className={`unitControlContainer ${labelPosition} ${className}`}
    >
      <div className="label-wrapper">
        <label>{label}</label>
      </div>
      <div style={style} className="unitControlSubContainer">
        <input
          className="unitInputBox"
          type="number"
          value={number}
          onChange={(e) => setCurrentNumber(e.target.value)}
        />
        {/* <div className="unitInputBoxWrapper">
        </div> */}
        <div ref={unitRef} className="unitControlWrapper">
          <button onClick={() => setToggle(!toggle)} className="unitControlBtn">
            {unit}
          </button>
          {toggle && (
            <div className="unitListWrapper">
              {defaultUnits?.map((val, i) => (
                <p
                  key={i}
                  onClick={() => {
                    setCurrentUnit(val.value);
                    setToggle(false);
                  }}
                  className={`unitList ${
                    val.value === currentUnit ? "hoverBgColor" : ""
                  } `}
                >
                  {val.label}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BUnitControl;
