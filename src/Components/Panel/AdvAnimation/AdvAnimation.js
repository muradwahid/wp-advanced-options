import { RangeControl, SelectControl } from "@wordpress/components";
import React, { useEffect } from "react";
import Label from "../Label/Label";
import AOS from "./animationStyle/aos";
import "./animationStyle/aos.css";
import { animationOptions } from "./options";
window["AOS"] = AOS;
const AdvAnimation = ({ value, onChange }) => {
  useEffect(() => {
    window["AOS"]?.init();
  }, []);

  useEffect(() => {
    const animatedWrapper = document.querySelector("#hbHelloBlock-123456");
    const btnClassList = animatedWrapper.classList;

    animatedWrapper.setAttribute("data-aos", value.type);
    btnClassList.remove("aos-init");
    btnClassList.remove("aos-animate");

    setTimeout(() => {
      btnClassList.add("aos-init");
      btnClassList.add("aos-animate");
    }, 500);
  }, [value.type, value.delay, value.speed]);

  return (
    <div>
      <div className="mt20 mb5">
        <Label className="">Select Animation</Label>
      </div>
      <div className="advExtraMargin">
        <SelectControl
          value={value.type}
          options={animationOptions}
          onChange={(val) => onChange({ ...value, type: val })}
        />
      </div>
      <RangeControl
        label="Animation Speed"
        value={value.speed}
        onChange={(val) => onChange({ ...value, speed: val })}
        min={0}
        max={5}
        step={0.01}
      />

      <RangeControl
        label="Animation Delay"
        value={value.delay}
        onChange={(val) => onChange({ ...value, delay: val })}
        min={0}
        max={5}
        step={0.01}
      />
    </div>
  );
};

export default AdvAnimation;
