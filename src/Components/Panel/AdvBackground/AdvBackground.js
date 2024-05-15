import {
  Flex,
  SelectControl,
  __experimentalUnitControl as UnitControl,
} from "@wordpress/components";
import { produce } from "immer";
import { Fragment, useState } from "react";
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
export const AdvBackground = ({ value, onChange = () => {} }) => {
  const [device, setDevice] = useState("desktop");
  // const [tab, setTab] = useState({
  //   background: {
  //     bgType: "classic",
  //     overlay: {
  //       isOverlay: false,
  //       bgOverlay: "normal",
  //       overlayType: "classic",
  //       isCssFilter: false
  //     }
  //   },
  // })
  const [bgValue, setBgValue] = useState(
    value || {
      normal: {
        type: "color",
        color: "#0000",
        gradient: advGradientOptions,
        img: {position:"center-center",xPosition:0,yPosition:0,attachment:"default",repeat:"no-repeat",size:"default",customSize:"0px"},
      },
      hover: { type: "color", color: "#0000", gradient: {}, img: {} },
      hoverType: "normal",
    }
  );
  const {
    type = "color",
    color = "#0000",
    gradient = {},
    img = {},
  } = bgValue[bgValue.hoverType] || {};
  const {
    position = "center-center",
    xPosition = 0,
    yPosition = 0,
    attachment = "default",
    repeat = "no-repeat",
    size = "default",
    customSize = 0,
  } = img[device] || {};
  // useEffect(() => {
  //   console.log(bgValue)
  //   onChange(bgValue)
  // }, [bgValue])

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
  const updateHb = (value) => {
    const newHb = produce(bgValue, (draft) => {
      draft.hoverType = value;
    });
    setBgValue(newHb);
    onChange(newHb);
  };
  return (
    <Fragment>
      <Tab
        options={["Normal", "Hover"]}
        value={bgValue.hoverType}
        onChange={(val) => updateHb(val)}
      />

      <div style={{ marginBottom: "-7px" }}>
        <label>Background Type</label>
      </div>
      <Tab
        options={["Color", "Gradient", "Image"]}
        value={type}
        onChange={(val) => updateBG("type", val)}
      />

      {type === "color" && (
        <PanelCustomColorControl
          label="Background Color"
          value={color}
          onChange={(val) => updateBG("color", val)}
        />
      )}

      {type === "gradient" && (
        <BGradient
          value={gradient}
          onChange={(val) => updateBG("gradient", val)}
        />
      )}

      {type === "image" && (
        <Fragment>
          <div>
            <label>Background Image</label>
          </div>
          <MediaArea
            label="Upload Image"
            value={img}
            onChange={(val) => updateBG("img", val.url, "url")}
            width="100%"
            height="100%"
          />

          {img.url &&
          <Fragment>
            <Flex className="mt20 mb5" gap={4} align="center">
              <Label className="">Position</Label>
              <Device value={device} onChange={(val) => setDevice(val)} />
            </Flex>
            <div className="advExtraMargin">
              <SelectControl
                value={position}
                options={imgPositionOptions}
                onChange={(val) =>
                  updateBG("img", { ...img[device], position: val }, device)
                }
              />
            </div>

            {position === "custom" && (
              <Fragment>
                <Flex className="mt20 mb5" gap={4} align="center">
                  <Label className="">X Position</Label>
                  <Device value={device} onChange={(val) => setDevice(val)} />
                </Flex>
                <UnitControl
                  units={unitOptions}
                  value={xPosition}
                  min={-2000}
                  max={2000}
                  onChange={(val) =>
                    updateBG("img", { ...img[device], xPosition: val }, device)
                  }
                />

                <Flex className="mt20 mb5" gap={4} align="center">
                  <Label className="">Y Position</Label>
                  <Device value={device} onChange={(val) => setDevice(val)} />
                </Flex>
                <div className="advExtraMargin">
                  <UnitControl
                    units={unitOptions}
                    value={yPosition}
                    min={-2000}
                    max={2000}
                    onChange={(val) =>
                      updateBG(
                        "img",
                        { ...img[device], yPosition: val },
                        device
                      )
                    }
                  />
                </div>
              </Fragment>
            )}

            <Flex className="mt20 mb5" gap={4} align="center">
              <Label className="">Attachment</Label>
              <Device value={device} onChange={(val) => setDevice(val)} />
            </Flex>
            <div className="advExtraMargin">
              <SelectControl
                value={attachment}
                options={imgAttachmentOptions}
                onChange={(val) =>
                  updateBG("img", { ...img[device], attachment: val }, device)
                }
              />
            </div>

            <Flex className="mt20 mb5" gap={4} align="center">
              <Label className="">Repeat</Label>
              <Device value={device} onChange={(val) => setDevice(val)} />
            </Flex>
            <div className="advExtraMargin">
              <SelectControl
                value={repeat}
                options={imgRepeatOptions}
                onChange={(val) =>
                  updateBG("img", { ...img[device], repeat: val }, device)
                }
              />
            </div>

            <Flex className="mt20 mb5" gap={4} align="center">
              <Label className="">Repeat</Label>
              <Device value={device} onChange={(val) => setDevice(val)} />
            </Flex>
            <div className="advExtraMargin">
              <SelectControl
                value={size}
                options={imgSizeOptions}
                onChange={(val) =>
                  updateBG("img", { ...img[device], size: val }, device)
                }
              />
            </div>
            {size === "custom" && (
              <Fragment>
                <Flex className="mt20 mb5" gap={4} align="center">
                  <Label className="">Width</Label>
                  <Device value={device} onChange={(val) => setDevice(val)} />
                </Flex>
                <UnitControl
                  units={unitOptions}
                  value={customSize}
                  min={-2000}
                  max={2000}
                  onChange={(val) =>
                    updateBG("img", { ...img[device], customSize: val }, device)
                  }
                />
              </Fragment>
            )}
          </Fragment>
          }
        </Fragment>
      )}
    </Fragment>
  );
};
