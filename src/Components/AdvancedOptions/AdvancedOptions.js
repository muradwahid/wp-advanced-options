import { useEffect, useState } from "react";
import { BBoxControl } from "../Panel/BBoxControl/BBoxControl";
import { Device } from "../Panel/Device/Device";

import { withSelect } from "@wordpress/data";

import { PanelBody, RangeControl, ToggleControl } from "@wordpress/components";
import AdvAnimation from "../Panel/AdvAnimation/AdvAnimation";
import { AdvBackground } from "../Panel/AdvBackground/AdvBackground";
import AdvOverlay from "../Panel/AdvOverlay/AdvOverlay";
import BMultiShadowControl from "../Panel/BMultiShadowControl/BMultiShadowControl";
import BorderControl from "../Panel/BorderControl/BorderControl";
import CustomCodeEditor from "../Panel/CustomCodeEditor/CustomCodeEditor";
import { Tab } from "../Panel/Tab/Tab";
import VisibilityOptions from "../Panel/VisibilityOptions/VisibilityOptions";
import { unitOptions } from "../utils/options";
import "./advancedOptionsStyle.css";
import { lowerCase } from "../utils/functions";

const AdvancedOptions = ({
  attributes,
  setAttributes,
  isDimension = true,
  isBackground = true,
  isOverlay = true,
  isBorderShadow = true,
  isVisibility = true,
  isResponsive = true,
  isAnimation = true,
  isCustomCss = true,
  device
}) => {
  const [shadowTab, setShadowTab] = useState("normal");

  const { advanced } = attributes;
  const {
    dimension,
    background,
    overlay,
    borderShadow,
    visibility,
    responsiveControl,
    animation,
    customCss,
  } = advanced || {};
  useEffect(() => {
    console.log(borderShadow)
  }, [borderShadow, device]);
  return (
    <div className="bplAdvControls">
      <div>
        {/* dimension */}
        {isDimension && (
          <PanelBody title="Margin & Padding" initialOpen={false}>
            <div>
            <div style={{ position: "relative" }}>
              <Device
                style={{ position: "absolute", right: "0px", top: "2px" }}
              />
              <BBoxControl
                label="Margin"
                units={unitOptions}
                values={dimension?.margin?.[device]}
                onChange={(val) =>
                  setAttributes({
                    advanced: {
                      ...advanced,
                      dimension: {
                        ...dimension,
                        margin: { ...dimension?.margin, [device]: val },
                      },
                    },
                  })
                }
              />
            </div>
            <div style={{ position: "relative" }}>
              <Device
                style={{ position: "absolute", right: "0px", top: "2px" }}
              />
              <BBoxControl
                label="Padding"
                units={unitOptions}
                values={dimension?.padding?.[device]}
                onChange={(val) =>
                  setAttributes({
                    advanced: {
                      ...advanced,
                      dimension: {
                        ...dimension,
                        padding: { ...dimension?.padding, [device]: val },
                      },
                    },
                  })
                }
              />
            </div>
          </div>
          </PanelBody>
        )}
        {/* background */}
        {isBackground && (
          <PanelBody
            title="Background"
            className="bPlAdvPanelBody"
            initialOpen={false}
          >
            <AdvBackground
              value={background || {}}
              device={device}
              onChange={(val) =>
                setAttributes({ advanced: { ...advanced, background: val } })
              }
            />
            <br />
            {isOverlay && (
              <AdvOverlay
                value={overlay || {}}
                device={device}
                onChange={(val) =>
                  setAttributes({ advanced: { ...advanced, overlay: val } })
                }
              />
            )}
          </PanelBody>
        )}

        {/* border and shadow */}
        {isBorderShadow && (
          <PanelBody
            title="Border & Shadow"
            initialOpen={true}
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
        )}

        {/* visibility options */}
        {isVisibility && (
          <PanelBody title="Visibility Options" initialOpen={false}>
            <VisibilityOptions
              value={visibility}
              device={device}
              onChange={(val) =>
                setAttributes({ advanced: { ...advanced, visibility: val } })
              }
            />
          </PanelBody>
        )}

        {/* responsive control */}
        {isResponsive && (
          <PanelBody
            title="Responsive Control"
            initialOpen={false}
            className="bPlAdvPanelBody"
          >
            <ToggleControl
              label="Hide on Desktop"
              value={responsiveControl?.desktop}
              checked={responsiveControl?.desktop}
              onChange={(val) =>
                setAttributes({
                  advanced: {
                    ...advanced,
                    responsiveControl: { ...responsiveControl, desktop: val },
                  },
                })
              }
            />
            <ToggleControl
              label="Hide on Tablet"
              value={responsiveControl?.tablet}
              checked={responsiveControl?.tablet}
              onChange={(val) =>
                setAttributes({
                  advanced: {
                    ...advanced,
                    responsiveControl: { ...responsiveControl, tablet: val },
                  },
                })
              }
            />
            <ToggleControl
              label="Hide on Mobile"
              value={responsiveControl?.mobile}
              checked={responsiveControl?.mobile}
              onChange={(val) =>
                setAttributes({
                  advanced: {
                    ...advanced,
                    responsiveControl: { ...responsiveControl, mobile: val },
                  },
                })
              }
            />
          </PanelBody>
        )}

        {/* animation */}
        {isAnimation && (
          <PanelBody
            title="Animation"
            initialOpen={false}
            className="bPlAdvPanelBody"
          >
            <AdvAnimation
              value={animation}
              onChange={(val) =>
                setAttributes({ advanced: { ...advanced, animation: val } })
              }
            />
          </PanelBody>
        )}

        {/* custom css */}
        {isCustomCss && (
          <PanelBody title="Custom CSS" initialOpen={false}>
            <CustomCodeEditor
              value={customCss}
              onChange={(val) =>
                setAttributes({ advanced: { ...advanced, customCss: val } })
              }
            />
          </PanelBody>
        )}
      </div>
    </div>
  );
};

export default withSelect((select) => {
  return {
    device: lowerCase(
      select("core/edit-post").__experimentalGetPreviewDeviceType()
    ),
  };
})(AdvancedOptions);
