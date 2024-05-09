import { useEffect, useState } from 'react';
import { BBoxControl } from "../Panel/BBoxControl/BBoxControl";
import { Device } from "../Panel/Device/Device";

import { AdvBackground } from "../Panel/AdvBackground/AdvBackground";
import "./advancedOptionsStyle.css";
const unitOptions = [
  { label: "px", value: "px" },
  { label: "%", value: "%" },
  { label: "em", value: "em" }
]
const AdvancedOptions = ({ attributes, setAttributes, enabled = ['background', 'padding'] }) => {
  const [device, setDevice] = useState("desktop");
  const { background } = attributes;
  const [bg, setBg] = useState({})
  useEffect(() => {
    // console.log(bg)
  }, [bg])

  return (
    <div>
      <div style={{ padding: "16px" }}>
        <div style={{ position: "relative" }}>
          <Device value={device} onChange={val => setDevice(val)} style={{ position: "absolute", left: "50px" }} />
          <BBoxControl label="Margin" />
        </div>
        <div style={{ position: "relative" }}>
          <Device value={device} onChange={val => setDevice(val)} style={{ position: "absolute", left: "50px" }} />
          <BBoxControl label="Padding" />
        </div>
      </div>
      {/* background */}
      {enabled.includes('background') && <AdvBackground value={background} onChange={val => setAttributes({ background: val })} />}

    </div>
  );
};

export default AdvancedOptions;