import { useEffect, useState } from "react";
import { BBoxControl } from "../Panel/BBoxControl/BBoxControl";
import { Device } from "../Panel/Device/Device";

import { InspectorControls } from "@wordpress/block-editor";
import { PanelBody, ToggleControl } from "@wordpress/components";
import { AdvBackground } from "../Panel/AdvBackground/AdvBackground";
import AdvOverlay from "../Panel/AdvOverlay/AdvOverlay";
import BMultiShadowControl from "../Panel/BMultiShadowControl/BMultiShadowControl";
import BorderControl from "../Panel/BorderControl/BorderControl";
import { Tab } from "../Panel/Tab/Tab";
import { advBgOptions, unitOptions } from "../utils/options";
import "./advancedOptionsStyle.css";
import { RangeControl } from "@wordpress/components";

const AdvancedOptions = ({
  attributes,
  setAttributes,
  enabled = ["background", "padding"],
}) => {
  const [device, setDevice] = useState("desktop");
  const [shadowTab, setShadowTab] = useState("normal");

  // const [overlay,setOverlay] = useState({})
  const { advanced } = attributes;
  const {
    background,
    overlay,
    borderShadow,
    responsiveControl
  } = advanced;
  useEffect(() => {
    console.log(advanced);
  }, [advanced]);

  return (
    <div className="bplAdvControls">
      <div>
        <div style={{ padding: "16px" }}>
          <div style={{ position: "relative" }}>
            <Device
              value={device}
              onChange={(val) => setDevice(val)}
              style={{ position: "absolute", right: "0px", top: "2px" }}
            />
            <BBoxControl
              label="Margin"
              units={unitOptions}
              values={advanced?.dimension?.margin || {}}
              onChange={(val) =>
                setAttributes({
                  advanced: {
                    ...advanced,
                    dimension: { ...advanced.dimension, margin: val },
                  },
                })
              }
            />
          </div>
          <div style={{ position: "relative" }}>
            <Device
              value={device}
              onChange={(val) => setDevice(val)}
              style={{ position: "absolute", right: "0px", top: "2px" }}
            />
            <BBoxControl
              label="Padding"
              units={unitOptions}
              values={advanced?.dimension?.padding || {}}
              onChange={(val) =>
                setAttributes({
                  advanced: {
                    ...advanced,
                    dimension: { ...advanced.dimension, padding: val },
                  },
                })
              }
            />
          </div>
        </div>
        {/* background */}
        <PanelBody
          title="Background"
          className="bPlAdvPanelBody"
          initialOpen={true}
        >
          <AdvBackground
            value={background || {}}
            onChange={(val) =>
              setAttributes({ advanced: { ...advanced, background: val } })
            }
          />
          <br />
          <AdvOverlay
            value={overlay || {}}
            onChange={(val) =>
              setAttributes({ advanced: { ...advanced, overlay: val } })
            }
          />
        </PanelBody>

        {/* border and shadow */}
        <PanelBody
          title="Border & Shadow"
          initialOpen={false}
          className="bPlAdvPanelBody"
        >
          <Tab
            options={["normal", "hover"]}
            value={shadowTab}
            onChange={(val) => setShadowTab(val)}
          />
          <BorderControl
            value={borderShadow[shadowTab].border}
            onChange={(val) =>
              setAttributes({
                advanced: {
                  ...advanced,
                  borderShadow: {
                    ...borderShadow,
                    [shadowTab]: { ...borderShadow[shadowTab], border: val },
                  },
                },
              })
            }
          />
          {shadowTab === "hover" && (
            <div className="advExtraMargin">
              <RangeControl
                label="Border Radius Transition"
                value={borderShadow?.hover.transition}
                onChange={(val) =>
                  setAttributes({
                    advanced: {
                      ...advanced,
                      borderShadow: {
                        ...borderShadow,
                        hover: { ...borderShadow.hover, transition: val },
                      },
                    },
                  })
                }
                min={0}
                step={0.01}
                max={5}
              />
            </div>
          )}
          <BMultiShadowControl
            value={borderShadow[shadowTab].shadow}
            onChange={(val) =>
              setAttributes({
                advanced: {
                  ...advanced,
                  borderShadow: {
                    ...borderShadow,
                    [shadowTab]: { ...borderShadow[shadowTab], shadow: val },
                  },
                },
              })
            }
          />
        </PanelBody>

        {/* responsive control */}
        <PanelBody
          title="Responsive Control"
          initialOpen={true}
          className="bPlAdvPanelBody"
        >
          <ToggleControl
            label="Hide on Desktop"
            value={responsiveControl?.desktop}
            checked={responsiveControl?.desktop}
            onChange={(val) =>
              setAttributes({ advanced: { ...advanced, responsiveControl:{...responsiveControl,desktop:val}} })
            }
          />
          <ToggleControl
            label="Hide on Tablet"
            value={responsiveControl?.tablet}
            checked={responsiveControl?.tablet}
            onChange={(val) =>
              setAttributes({ advanced: { ...advanced, responsiveControl:{...responsiveControl,tablet:val}} })
            }
          />
          <ToggleControl
            label="Hide on Mobile"
            value={responsiveControl?.mobile}
            checked={responsiveControl?.mobile}
            onChange={(val) =>
              setAttributes({ advanced: { ...advanced, responsiveControl:{...responsiveControl,mobile:val}} })
            }
          />
        </PanelBody>
      </div>
    </div>
  );
};

export default AdvancedOptions;
