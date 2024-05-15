import { RangeControl } from "@wordpress/components";
import React, { Fragment, useEffect, useRef, useState } from "react";
const RangeUnitControl = ({
  label,
  units,
  className,
  style,
  value = "0px",
  min=0,
  max=100,
  onChange = () => {},
  ...props
}) => {
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
  const defaultUnits = defaults || units;
  // const number = value
  //   .split("")
  //   .filter((char) => !isNaN(char) && char !== "%")
  //   .join("");
  const number = parseInt(unit) || 0;
  const unit ="px" || value.slice(number.toString().length);
  // const unit = value
  //   .split("")
  //   .filter((char) => isNaN(char) || char === "%")
  //   .join("");
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
  const id = Math.floor(Math.random() * 999999);
  // const wrapper = `#unitId-${id} .unitRangeWrapper`;
  // const rangeWrapper = `${wrapper} .rangeControlWrapper`;
  // const unitContainer = `${rangeWrapper} .unitControlWrapper`;
  // const button = `${unitContainer} .unitControlBtn`;
  // const unitWrapper = `${rangeWrapper} .unitListWrapper`;
  // const unitList = `${rangeWrapper} .unitList`;
  return (
    <Fragment>
      <style>{`
        .labelWrapper {
            display: flex;
            justify-content: space-between;
          }
          .rangeControlWrapper {
            display: flex;
          }

          .unitControlBtn {
            font-size: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
            border: 1px solid rgb(168, 168, 168);
            border-left: none;
            cursor: pointer;
            font-weight: 600;
            background-color: #0000;
            height: 30px;
            width: 21px;
            border-radius: 0 2px 2px 0;
            text-transform: uppercase;
            margin-left: -1px;
          }

          .unitControlBtn:focus {
            border-color: #3858e9;
            border-left: 1px solid #3858e9;
          }
          .unitControlWrapper {
            position: relative;
          }
          .unitListWrapper {
            position: absolute;
            right: 0px;
            z-index: 9999 !important;
            background: #fff;
            font-weight: 600;
            border: 1px solid rgb(168, 168, 168);
            width: 19px;
            text-align: center;
            border-radius: 0 0 2px 2px;
          }
          .unitList {
            margin: 0;
            cursor: default;
            font-size: 10px;
          }
          .unitList:hover {
            background-color: #3858e9;
            color: aliceblue;
          }
          .hoverBgColor {
            background-color: #3858e9;
            color: aliceblue;
          }


      `}</style>
      <div
        id={`unitId-${id}`}
        className={`unitRangeWrapper ${className}`}
        style={style}
      >
        <div className="labelWrapper">
          <label htmlFor="">{label}</label>
        </div>
        <div className="rangeControlWrapper">
          <div style={{ width: "100%" }}>
            <RangeControl
              value={currentNumber}
              onChange={(val) => setCurrentNumber(val)}
              {...props}
              min={min}
              max={max}
            />
          </div>
          <div ref={unitRef} className="unitControlWrapper">
            <button
              onClick={() => setToggle(!toggle)}
              className="unitControlBtn"
            >
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
    </Fragment>
  );
};

export default RangeUnitControl;
