import {
  Flex,
  RangeControl,
  SelectControl,
  __experimentalUnitControl as UnitControl,
} from "@wordpress/components";
import { produce } from "immer";
import { Fragment, useEffect, useState } from "react";
import {
  advGradientOptions,
  imgAttachmentOptions,
  imgPositionOptions,
  imgRepeatOptions,
  imgSizeOptions,
  unitOptions,
} from "../../utils/options";
import { BGradient } from "../BGradient/BGradient";
import { Device } from "../Device/Device";
import Label from "../Label/Label";
import { MediaArea } from "../MediaArea/MediaArea";
import { PanelCustomColorControl } from "../PanelCustomColorControl/PanelCustomColorControl";
import { Tab } from "../Tab/Tab";

/**
 * AdvBackground Component
 * 
 * @param {object} props - The props object
 * @param {string} props.name - The name of the background
 * @param {object} props.value - The value of the background
 * @param {function} props.onChange - The function to handle changes in the background value
 * @param {string} props.device - The device type (e.g., "desktop", "tablet", "mobile")
 * @returns {JSX.Element} React component
 */

export const AdvBackground = (props) => {
  const {
    name = "Background",
    value,
    onChange = () => { },
    device = "desktop",
  } = props;
  const [bgValue, setBgValue] = useState(value || { hoverType: "normal" });
  const { transition } = bgValue[bgValue.hoverType] || {};

  const updateBG = (property, value, childP = null) => {
    const newBG = produce(bgValue, (draft) => {
      if (null !== childP) {
        draft[bgValue.hoverType][property][childP] = value;
      } else {
        draft[bgValue.hoverType][property] = value;
      }
    });
    setBgValue(newBG);
    onChange(newBG);
  };
  const updateHb = (type, value) => {
    const newHb = produce(bgValue, (draft) => {
      draft[type] = value;
    });
    setBgValue(newHb);
    onChange(newHb);
  };
  useEffect(() => {
    onChange(bgValue);
  }, [bgValue])
  return (
    <Fragment>
      <Tab
        options={["Normal", "Hover"]}
        value={bgValue.hoverType}
        onChange={(val) => updateHb("hoverType", val)}
      />

      {bgValue.hoverType === "hover" && (
        <Fragment>
          <div className="advExtraMargin">
            <RangeControl
              label={`${name} Transition`}
              min={0}
              max={5}
              step={0.05}
              value={transition}
              onChange={(val) => updateBG("transition", val)}
            />
          </div>

          <Background
            name={name}
            value={bgValue.hover}
            onChange={(val) => {
              setBgValue({ ...bgValue, hover: val })
              onChange({ ...bgValue, hover: val })
            }}
            device={device}
          />
        </Fragment>
      )}
      {bgValue.hoverType === "normal" && (
        <Fragment>
          <Background
            name={name}
            value={bgValue.normal}
            onChange={(val) => {
              setBgValue({ ...bgValue, normal: val })
              onChange({ ...bgValue, normal: val })
            }}
            device={device}
          />
        </Fragment>
      )}
    </Fragment>
  );
};

const Background = ({ name, value, onChange, device }) => {
  const [bgValue, setBgValue] = useState(
    value || {
      type: "color",
      color: "#0000",
      gradient: advGradientOptions,
      img: {
        url: "",
        desktop: {
          position: "center-center",
          xPosition: 0,
          yPosition: 0,
          attachment: "default",
          repeat: "no-repeat",
          size: "default",
          customSize: "0px",
        },
        tablet: {
          position: "center-center",
          xPosition: 0,
          yPosition: 0,
          attachment: "default",
          repeat: "no-repeat",
          size: "default",
          customSize: "0px",
        },
        mobile: {
          position: "center-center",
          xPosition: 0,
          yPosition: 0,
          attachment: "default",
          repeat: "no-repeat",
          size: "default",
          customSize: "0px",
        },
      },
    }
  );
  const { type, color, gradient, img } = value || bgValue || {};
  const {
    position,
    xPosition,
    yPosition,
    attachment,
    repeat,
    size,
    customSize,
  } = img[device] || {};
  const updateBG = (property, value, secondP, thirdP = null) => {
    const newBG = produce(bgValue, (draft) => {
      if (null !== thirdP) {
        draft[property][secondP][thirdP] = value;
      } else if (property && secondP) {
        draft[property][secondP] = value;
      } else {
        draft[property] = value;
      }
    });
    setBgValue(newBG);
    onChange(newBG);
  };

  useEffect(() => onChange(bgValue), [bgValue])

  return (
    <Fragment>
      <div style={{ marginBottom: "-7px" }}>
        <label>{name} Type</label>
      </div>
      <Tab
        options={["Color", "Gradient", "Image"]}
        value={type}
        // onChange={(val) => updateBG("type", val)}
        onChange={(val) => onChange({ ...value, type: val })}
      />
      {type === "color" && (
        <PanelCustomColorControl
          label={`${name} Color`}
          value={color}
          // onChange={(val) => updateBG("color", val)}
          onChange={(val) => onChange({ ...value, color: val })}
        />
      )}
      {type === "gradient" && (
        <BGradient
          value={gradient}
          // onChange={(val) => updateBG("gradient", val)}
          onChange={(val) => onChange({ ...value, gradient: val })}
        />
      )}
      {type === "image" && (
        <Fragment>
          <div>
            <label>{name} Image</label>
          </div>
          <MediaArea
            label="Upload Image"
            value={value.img}
            // onChange={(val) => updateBG("img", val.url, "url")}
            onChange={(val) =>
              onChange({ ...value, img: { ...img, url: val.url } })
            }
            width="100%"
            height="100%"
          />
          {img.url && (
            <Fragment>
              <Flex className="mt20 mb5" gap={4} align="center">
                <Label className="">Position</Label>
                <Device />
              </Flex>
              <div className="advExtraMargin">
                <SelectControl
                  value={position}
                  options={imgPositionOptions}
                  // onChange={(val) =>
                  //   updateBG("img", { ...img[device], position: val }, device)
                  // }
                  onChange={val => onChange({ ...value, img: { ...img, [device]: { ...img[device], position: val } } })}
                />
              </div>

              {position === "custom" && (
                <Fragment>
                  <Flex className="mt20 mb5" gap={4} align="center">
                    <Label className="">X Position</Label>
                    <Device />
                  </Flex>
                  <UnitControl
                    units={unitOptions}
                    value={xPosition}
                    min={-2000}
                    max={2000}
                    // onChange={(val) =>
                    //   updateBG(
                    //     "img",
                    //     { ...img[device], xPosition: val },
                    //     device
                    //   )
                    // }
                    onChange={val => onChange({ ...value, img: { ...img, [device]: { ...img[device], xPosition: val } } })}
                  />

                  <Flex className="mt20 mb5" gap={4} align="center">
                    <Label className="">Y Position</Label>
                    <Device />
                  </Flex>
                  <div className="advExtraMargin">
                    <UnitControl
                      units={unitOptions}
                      value={yPosition}
                      min={-2000}
                      max={2000}
                      // onChange={(val) =>
                      //   updateBG(
                      //     "img",
                      //     { ...img[device], yPosition: val },
                      //     device
                      //   )
                      // }
                      onChange={val => onChange({ ...value, img: { ...img, [device]: { ...img[device], yPosition: val } } })}
                    />
                  </div>
                </Fragment>
              )}

              <Flex className="mt20 mb5" gap={4} align="center">
                <Label className="">Attachment</Label>
                <Device />
              </Flex>
              <div className="advExtraMargin">
                <SelectControl
                  value={attachment}
                  options={imgAttachmentOptions}
                  // onChange={(val) =>
                  //   updateBG("img", { ...img[device], attachment: val }, device)
                  // }
                  onChange={val => onChange({ ...value, img: { ...img, [device]: { ...img[device], attachment: val } } })}
                />
              </div>

              <Flex className="mt20 mb5" gap={4} align="center">
                <Label className="">Repeat</Label>
                <Device />
              </Flex>
              <div className="advExtraMargin">
                <SelectControl
                  value={repeat}
                  options={imgRepeatOptions}
                  // onChange={(val) =>
                  //   updateBG("img", { ...img[device], repeat: val }, device)
                  // }
                  onChange={val => onChange({ ...value, img: { ...img, [device]: { ...img[device], repeat: val } } })}
                />
              </div>

              <Flex className="mt20 mb5" gap={4} align="center">
                <Label className="">Size</Label>
                <Device />
              </Flex>
              <div className="advExtraMargin">
                <SelectControl
                  value={size}
                  options={imgSizeOptions}
                  // onChange={(val) =>
                  //   updateBG("img", { ...img[device], size: val }, device)
                  // }
                  onChange={val => onChange({ ...value, img: { ...img, [device]: { ...img[device], size: val } } })}
                />
              </div>
              {size === "custom" && (
                <Fragment>
                  <Flex className="mt20 mb5" gap={4} align="center">
                    <Label className="">Width</Label>
                    <Device />
                  </Flex>
                  <UnitControl
                    units={unitOptions}
                    value={customSize}
                    min={-2000}
                    max={2000}
                    // onChange={(val) =>
                    //   updateBG(
                    //     "img",
                    //     { ...img[device], customSize: val },
                    //     device
                    //   )
                    // }
                    onChange={val => onChange({ ...value, img: { ...img, [device]: { ...img[device], customSize: val } } })}
                  />
                </Fragment>
              )}
            </Fragment>
          )}
        </Fragment>
      )}{" "}
    </Fragment>
  );
};
