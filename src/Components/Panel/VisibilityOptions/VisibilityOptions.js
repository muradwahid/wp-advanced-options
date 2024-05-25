import {
  Flex,
  __experimentalNumberControl as NumberControl,
  SelectControl,
} from "@wordpress/components";
import { useState } from "react";
import { Device } from "../Device/Device";
import Label from "../Label/Label";
const overflowOptions = [
  { label: "Default", value: "default" },
  { label: "Auto", value: "auto" },
  { label: "Hidden", value: "hidden" },
  { label: "Visible", value: "visible" },
  { label: "Scroll", value: "scroll" },
];
const VisibilityOptions = ({ value, onChange,device}) => {
  const { zIndex, overflow = "default" } = value || {};
  return (
    <div>
      <Flex className="mb5" gap={4} align="center">
        <Label className="">Z-Index</Label>
        <Device />
      </Flex>
      <NumberControl
        value={zIndex || ""}
        onChange={(val) =>
          onChange({ ...value, zIndex: { ...zIndex, [device]: val } })
        }
      />

      <div className="mb5">
        <Label className="">Overflow</Label>
      </div>
      <div className="advExtraMargin">
        <SelectControl
          value={overflow || ""}
          options={overflowOptions}
          onChange={(val) => onChange({ ...value, overflow: val })}
        />
      </div>
    </div>
  );
};

export default VisibilityOptions;
