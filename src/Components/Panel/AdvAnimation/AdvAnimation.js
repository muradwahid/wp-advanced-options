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
  useEffect(() => {
    window["AOS"]?.init();
  }, []);
  useEffect(() => {
    const parentId = blockProps.id;

    const animatedWrapper = document.querySelector(`#${parentId}`);
    // const animatedWrapper = blockWrapper.childNodes[0];
    const animatedClassList = animatedWrapper?.classList;
    if (animatedClassList) {
      animatedWrapper.setAttribute("data-aos", value.type);
      animatedClassList.remove("aos-init");
      animatedClassList.remove("aos-animate");
      setTimeout(() => {
        animatedClassList.add("aos-init");
        animatedClassList.add("aos-animate");
      }, 500);
    }
    if (!animatedClassList.contains("is-selected")) {
      animatedClassList.add("aos-init");
      animatedClassList.add("aos-animate");
    }
    observer.observe(animatedWrapper, { attributes: true })
  }, [value.type]);

  const observer = new MutationObserver(mutations => { 
    mutations.map((mutation) => {
      if (!mutation.target.classList.contains("is-selected")) {
        mutation.target.classList.add("aos-init");
        // mutation.target.classList.add("aos-animate");
      }
    })
  })




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
