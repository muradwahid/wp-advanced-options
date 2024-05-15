import {
  RangeControl,
  SelectControl,
  ToggleControl,
} from "@wordpress/components";
import { produce } from "immer";
import { Fragment, useState } from "react";
import { advBgOptions } from "../../utils/options";
import { AdvBackground } from "../AdvBackground/AdvBackground";

const blendOptions = [
  { label: "Normal", value: "normal" },
  { label: "Multiply", value: "multiply" },
  { label: "Screen", value: "screen" },
  { label: "Overlay", value: "overlay" },
  { label: "Darken", value: "darken" },
  { label: "Lighten", value: "lighten" },
  { label: "Color Dodge", value: "color-dodge" },
  { label: "Saturation", value: "saturation" },
  { label: "Color", value: "color" },
  { label: "Luminosity", value: "luminosity" },
];

const AdvOverlay = ({ value, onChange }) => {
  const [overlay, setOverlay] = useState(value || {
    isEnabled:false,
    colors:advBgOptions,
    opacity:1,
    blend:"normal",
    isCssFilter:false,
    blur:0,
    brightness:100,
    contrast:100,
    saturation:100,
    hue:0,
  });
  // let overlay = value || { colors, opacity, blend };
  const {
    isEnabled=false,
    colors = advBgOptions,
    opacity = 1,
    blend = "normal",
    isCssFilter = false,
    blur = 0,
    brightness = 100,
    contrast = 100,
    saturation = 100,
    hue = 0,
  } = overlay;
  const updateOverlay = (property, value, childP = null) => {
    const newBG = produce(overlay, (draft) => {
      if (null !== childP) {
        draft[property][childP] = value;
      } else {
        draft[property] = value;
      }
    });
    setOverlay(newBG);
    onChange(newBG);
  };
  return (
    <Fragment>
      <div className="advExtraMargin">
        <ToggleControl
          label="Enable Overlay"
          checked={isEnabled}
          value={isEnabled}
          onChange={(val) => updateOverlay("isEnabled", val)}
        />
      </div>
      {isEnabled && (
        <Fragment>
          <AdvBackground
            value={colors}
            onChange={(val) => updateOverlay("colors", val)}
          />
          <hr />
          <div className="advExtraMargin">
            <RangeControl
              label="Opacity"
              min={0}
              max={1}
              value={opacity}
              step={0.01}
              onChange={(val) => updateOverlay("opacity", val)}
            />
          </div>
          <div className="advExtraMargin">
            <SelectControl
              label="Blend Mode"
              labelPosition="left"
              options={blendOptions}
              value={blend}
              onChange={(val) => updateOverlay("blend", val)}
            />
          </div>
          <div className="advExtraMargin">
            <ToggleControl
              label="CSS Filters"
              checked={isCssFilter}
              value={isCssFilter}
              onChange={(val) => updateOverlay("isCssFilter", val)}
            />
          </div>
          {isCssFilter && (
            <Fragment>
              <div className="advExtraMargin">
                <RangeControl
                  label="Blur"
                  min={0}
                  max={10}
                  value={blur}
                  onChange={(val) => updateOverlay("blur", val)}
                />
              </div>
              <div className="advExtraMargin">
                <RangeControl
                  label="Brightness"
                  min={0}
                  max={200}
                  value={brightness}
                  onChange={(val) => updateOverlay("brightness", val)}
                />
              </div>
              <div className="advExtraMargin">
                <RangeControl
                  label="Contrast"
                  min={0}
                  max={200}
                  value={contrast}
                  onChange={(val) => updateOverlay("contrast", val)}
                />
              </div>
              <div className="advExtraMargin">
                <RangeControl
                  label="Saturation"
                  min={0}
                  max={200}
                  value={saturation}
                  onChange={(val) => updateOverlay("saturation", val)}
                />
              </div>
              <div className="advExtraMargin">
                <RangeControl
                  label="Hue"
                  min={0}
                  max={360}
                  value={hue}
                  onChange={(val) => updateOverlay("hue", val)}
                />
              </div>
            </Fragment>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

export default AdvOverlay;
