import { __experimentalNumberControl as NumberControl, PanelRow, RangeControl, Tooltip } from '@wordpress/components';
import { Fragment,useState,useEffect } from 'react';
import { BButtonGroup } from '../BButtonGroup/BButtonGroup';

import { produce } from 'immer';
import { PanelColorPicker } from '../PanelColorPicker/PanelColorPicker';
import "./bGradientStyle.css";

export const BGradient = ({ value, onChange }) => {
  const [advGradient, setAdvGradient] = useState({
    type: value?.type || "linear",
    radialType: value?.radialType || "ellipse",
    colors: value?.colors || [
      { color: "", position: 0 },
      { color: "", position: 0 }
    ],
    centerPositions: value?.centerPositions || { x: 0, y: 0 },
    angel: value?.angel || 90
  });
  const { type, radialType, colors, centerPositions, angel } = advGradient;

  // const { type, radialType, colors = [
  //   { color: "", position: 0 },
  //   { color: "", position: 0 }
  // ], centerPositions, angel } = value || {};





  const updateColorsProperty = (index, t, val) => {
    const newColors = produce(advGradient.colors, draft => {
      draft[index][t] = val;
    });
    setAdvGradient({ ...advGradient, colors: newColors });
  }
  // const updateColorsProperty = (index, t, val) => {
  //   const newColors = produce(value.colors, draft => {
  //     draft[index][t] = val;
  //   });
  //   onChange({ ...value, colors: newColors });
  // }


  useEffect(() => {
    onChange(advGradient);
  }, [advGradient, value])

  return (
    <Fragment>
      <BButtonGroup label="Gradient Type" value={type} onChange={val => setAdvGradient({ ...advGradient, type: val })} options={[{ label: "Linear", value: "linear" }, { label: "Radial", value: "radial" }]} />

      {
        type === "radial" && <BButtonGroup label="Radial Type" value={radialType} onChange={val => setAdvGradient({ ...advGradient, radialType: val })} options={[{ label: "Ellipse", value: "ellipse" }, { label: "Circle", value: "circle" }]} />
      }

      <Fragment>
        {colors.map((c, i) => {
          return <PanelRow key={i}>
            {/* <Tooltip delay={300} text="Color" placement='top'> */}
            <PanelColorPicker value={c.color} onChange={val => updateColorsProperty(i, 'color', val)} tooltip='Color' />

            {/* </Tooltip> */}
            <Tooltip delay={300} text="Position" placement='top'>
              <NumberControl value={c.position} onChange={val => updateColorsProperty(i, 'position', val)} min={0} max={100} />
            </Tooltip>
          </PanelRow>
        })}

        {type === "radial" ? <Fragment>
          <RangeControl label='Center X Position' value={centerPositions?.x} onChange={val => setAdvGradient({ ...advGradient, centerPositions: { ...centerPositions, x: val } })} min={0} max={100} />

          <RangeControl label="Center Y Position" value={centerPositions?.y} onChange={val => setAdvGradient({ ...advGradient, centerPositions: { ...centerPositions, y: val } })} min={0} max={100} />
        </Fragment> :
          <RangeControl label="Angle" value={angel} onChange={val => setAdvGradient({ ...advGradient, angel: val })} min={0} max={360} />}
      </Fragment>

    </Fragment>

    // <Fragment>
    //   <BButtonGroup label="Gradient Type" value={value?.type} onChange={val => onChange({ ...value, type: val })} options={[{ label: "Linear", value: "linear" }, { label: "Radial", value: "radial" }]} />

    //   {
    //     value?.type === "radial" && <BButtonGroup label="Radial Type" value={value?.radialType} onChange={val => onChange({ ...value, radialType: val })} options={[{ label: "Ellipse", value: "ellipse" }, { label: "Circle", value: "circle" }]} />
    //   }

    //   <Fragment>
    //     {colors.map((c, i) => {
    //       return <PanelRow key={i}>
    //         {/* <Tooltip delay={300} text="Color" placement='top'> */}
    //         <PanelColorPicker value={c.color} onChange={val => updateColorsProperty(i, 'color', val)} tooltip='Color' />

    //         {/* </Tooltip> */}
    //         <Tooltip delay={300} text="Position" placement='top'>
    //           <NumberControl value={c.position} onChange={val => updateColorsProperty(i, 'position', val)} min={0} max={100} />
    //         </Tooltip>
    //       </PanelRow>
    //     })}

    //     {value?.type === "radial" ? <Fragment>
    //       <RangeControl label='Center X Position' value={centerPositions?.x} onChange={val => onChange({ ...value, centerPositions: { ...centerPositions, x: val } })} min={0} max={100} />

    //       <RangeControl label="Center Y Position" value={centerPositions?.y} onChange={val => onChange({ ...value, centerPositions: { ...centerPositions, y: val } })} min={0} max={100} />
    //     </Fragment> :
    //       <RangeControl label="Angle" value={angel} onChange={val => onChange({ ...value, angel: val })} min={0} max={360} />}
    //   </Fragment>

    // </Fragment>
  );
};
