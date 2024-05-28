import {
  Button,
  Dashicon,
  __experimentalNumberControl as NumberControl,
  RangeControl,
  Tooltip,
} from "@wordpress/components";
import { Fragment, useEffect, useState } from "react";
import { BButtonGroup } from "../BButtonGroup/BButtonGroup";

import { produce } from "immer";
import { PanelColorPicker } from "../PanelColorPicker/PanelColorPicker";
import "./bGradientStyle.css";

export const BGradient = ({ value, onChange }) => {
  // const [advGradient, setAdvGradient] = useState({
  //   type: value.type || "linear",
  //   radialType: value.radialType || "ellipse",
  //   colors: value.colors || [
  //     { color: "", position: 0 },
  //     { color: "", position: 0 },
  //   ],
  //   centerPositions: value.centerPositions || { x: 0, y: 0 },
  //   angel: value.angel || 90,
  // });
  const [advGradient, setAdvGradient] = useState(
    value || {
      type: "linear",
      radialType: "ellipse",
      colors: [
        { color: "", position: 0 },
        { color: "", position: 0 },
      ],
      centerPositions: { x: 0, y: 0 },
      angel: 90,
    }
  );
  const { type, radialType, colors, centerPositions, angel } = advGradient;

  const updateColorsProperty = (index, t, val) => {
    const newColors = produce(advGradient.colors, (draft) => {
      draft[index][t] = val;
    });
    setAdvGradient({ ...advGradient, colors: newColors });
    onChange({ ...advGradient, colors: newColors });
  };

  const addColor = () => {
    const newColor = produce(advGradient.colors, (draft) => {
      draft.push({ color: "#f00", position: 0 });
    });
    setAdvGradient({ ...advGradient, colors: newColor });
    onChange({ ...advGradient, colors: newColor });
  };

  const removeColor = (index) => {
    const newColor = produce(advGradient.colors, (draft) => {
      draft.splice(index, 1);
    });
    setAdvGradient({ ...advGradient, colors: newColor });
    onChange({ ...advGradient, colors: newColor });
  };

  useEffect(() => {
    onChange(advGradient);
  }, [advGradient, value]);
  useEffect(() => {
    onChange(advGradient);
  },[advGradient,value])
  return (
    <Fragment>
      <BButtonGroup
        label="Gradient Type"
        value={type}
        onChange={(val) => setAdvGradient({ ...advGradient, type: val })}
        options={[
          { label: "Linear", value: "linear" },
          { label: "Radial", value: "radial" },
        ]}
      />

      {type === "radial" && (
        <BButtonGroup
          label="Radial Type"
          value={radialType}
          onChange={(val) =>
            setAdvGradient({ ...advGradient, radialType: val })
          }
          options={[
            { label: "Ellipse", value: "ellipse" },
            { label: "Circle", value: "circle" },
          ]}
        />
      )}

      <Fragment>
        {colors?.map((c, i) => {
          return (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "10px",
              }}
              key={i}
            >
              {/* <Tooltip delay={300} text="Color" placement='top'> */}
              <PanelColorPicker
                value={c.color}
                onChange={(val) => updateColorsProperty(i, "color", val)}
                tooltip="Color"
                style={{ marginBottom: "0" }}
              />

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                }}
                className="advExtraMargin"
              >
                {/* </Tooltip> */}
                <Tooltip delay={300} text="Position" placement="top">
                  <NumberControl
                    value={c.position}
                    onChange={(val) => updateColorsProperty(i, "position", val)}
                    min={0}
                    max={100}
                  />
                </Tooltip>
                {colors.length > 2 && (
                  <Dashicon
                    style={{ cursor: "pointer", color: "red" }}
                    onClick={() => removeColor(i)}
                    icon="trash"
                  />
                )}
              </div>
            </div>
          );
        })}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "10px 0",
          }}
        >
          <Button
            text="Add Color"
            variant="tertiary"
            style={{ background: "#4527a4", color: "#fff" }}
            icon="plus"
            iconPosition="right"
            onClick={addColor}
          />
        </div>
        {type === "radial" ? (
          <Fragment>
            <RangeControl
              label="Center X Position"
              value={centerPositions?.x}
              onChange={(val) =>
                setAdvGradient({
                  ...advGradient,
                  centerPositions: { ...centerPositions, x: val },
                })
              }
              min={0}
              max={100}
            />

            <RangeControl
              label="Center Y Position"
              value={centerPositions?.y}
              onChange={(val) =>
                setAdvGradient({
                  ...advGradient,
                  centerPositions: { ...centerPositions, y: val },
                })
              }
              min={0}
              max={100}
            />
          </Fragment>
        ) : (
          <RangeControl
            label="Angle"
            value={angel}
            onChange={(val) => setAdvGradient({ ...advGradient, angel: val })}
            min={0}
            max={360}
          />
        )}
      </Fragment>
    </Fragment>
  );
};
