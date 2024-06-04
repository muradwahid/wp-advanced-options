import { useBlockProps } from "@wordpress/block-editor";
import { RangeControl, SelectControl } from "@wordpress/components";
import React, { useEffect } from "react";

import Label from "../Label/Label";
// import AOS from "./assets/aos";
// import "./assets/aos.css";
import { animationOptions } from "./options";
// window["AOS"] = AOS;
const AdvAnimation = ({ value, onChange }) => {
  const blockProps = useBlockProps();
  // useEffect(() => { 
  //   console.log(blockProps)
  // },[])
  useEffect(() => {
    window["AOS"]?.init();
  }, []);
  // useEffect(() => {
  //   const parentId = blockProps.id;

  //   const blockWrapper = document.querySelector(`#${parentId}`);
  //   const animatedWrapper = blockWrapper.childNodes[0];
  //   const animatedClassList = animatedWrapper?.classList;
  //   if (animatedClassList) {
  //     const transitionClass = Array.from(animatedClassList).filter((str) =>
  //       /advBpl/.test(str)
  //     )[0];

  //     animatedClassList.remove(transitionClass);
  //     animatedWrapper.setAttribute("data-aos", value.type);
  //     animatedClassList.remove("aos-init");
  //     animatedClassList.remove("aos-animate");
  //     setTimeout(() => {
  //       animatedClassList.add("aos-init");
  //       animatedClassList.add("aos-animate");
  //       setTimeout(() => {
  //         // animatedClassList.add(transitionClass);
  //       },600);
  //     }, 500);
  //   }
  // }, [value.type, value.delay, value.speed]);

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
