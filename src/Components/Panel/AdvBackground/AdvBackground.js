import { PanelBody } from '@wordpress/components';
import { Fragment, useEffect, useState } from 'react';
import { MediaArea } from '../MediaArea/MediaArea';
import { Tab } from '../Tab/Tab';
import { PanelCustomColorControl } from '../PanelCustomColorControl/PanelCustomColorControl';

export const AdvBackground = ({ value, onChange = () => { } }) => {
  const [hover, setHover] = useState("normal");
  const [tab, setTab] = useState({
    background: {
      bgType: "classic",
      overlay: {
        isOverlay: false,
        bgOverlay: "normal",
        overlayType: "classic",
        isCssFilter: false
      }
    },
  })
  const [bgValue, setBgValue] = useState({ normal: { classic: {}, gradient: {} }, hover: { classic: {}, gradient: {} } })
  useEffect(() => {
    // console.log(value)
    onChange(bgValue)
  }, [bgValue])
  return (
    <PanelBody title="Background" className='bPlPanelBody' initialOpen={true}>
      <Tab options={["Normal", "Hover"]} value={hover} onChange={(val) => setHover(val)} />

      <div style={{ marginBottom: "-7px" }}>
        <label>Background Type</label>
      </div>
      <Tab options={["Classic", "Gradient"]} value={tab.background.bgType} onChange={(val) => setTab({ ...tab, background: { ...tab.background, bgType: val } })} />

      {
        tab.background.bgType === "classic" ?
          <Fragment>
            <PanelCustomColorControl label="Background Color" value={bgValue[hover].classic.bg} onChange={val => setBgValue({ ...bgValue, [hover]: { ...bgValue.hover, ...bgValue.normal, classic: { ...bgValue.hover.classic, ...bgValue.normal.classic, bg: val } } })} />

            <div>
              <label>Background Image</label>
            </div>
            <MediaArea label="Upload Image" value={bgValue[hover].classic.bgImage} onChange={val => setBgValue({ ...bgValue, [hover]: { ...bgValue.hover, ...bgValue.normal, classic: { ...bgValue.hover.classic, ...bgValue.normal.classic, bgImage: { url: val.url } } } })} width="100%" height="100%" />
          </Fragment> : null
        // <Fragment>
        //   <BButtonGroup label={__("Gradient Type", textDomain)} value={tab.background.gradientType} onChange={val => setTab({ ...tab, background: { ...tab.background, gradientType: val } })} options={[{ label: "Linear", value: "linear" }, { label: "Radial", value: "radial" }]} />

        //   {
        //     tab.background.gradientType === "radial" && <BButtonGroup label={__("Radial Type", textDomain)} value={tab.background.radialType} onChange={val => setTab({ ...tab, background: { ...tab.background, radialType: val } })} options={[{ label: "Ellipse", value: "ellipse" }, { label: "Circle", value: "circle" }]} />
        //   }

        //   <Fragment>
        //     <PanelColorPicker label={__("First Color", textDomain)} onChange={val => setColor(val)} />


        //     <PanelColorPicker label={__("Second Color", textDomain)} onChange={val => setColor(val)} />

        //     <div className='bplAdvRangeColor'>
        //       <div style={{ marginBottom: "-4px" }}>
        //         <label>{__("First Color Position", textDomain)}</label>
        //       </div>
        //       <RangeControl min={0} max={100} />
        //     </div>
        //     <div className='bplAdvRangeColor'>
        //       <div style={{ marginBottom: "-4px" }}>
        //         <label>{__("Second Color Position", textDomain)}</label>
        //       </div>
        //       <RangeControl min={0} max={100} />
        //     </div>
        //     <div className='bplAdvRangeColor'>
        //       <div style={{ marginBottom: "-4px" }}>
        //         <label>{__("Center X Position", textDomain)}</label>
        //       </div>
        //       <RangeControl min={0} max={100} />
        //     </div>
        //     <div className='bplAdvRangeColor'>
        //       <div style={{ marginBottom: "-4px" }}>
        //         <label>{__("Center Y Position", textDomain)}</label>
        //       </div>
        //       <RangeControl min={0} max={100} defaultValue={40} value={color} onChange={val => setColor(val)} />
        //     </div>
        //   </Fragment>

        // </Fragment>
        // <BGradient value={bgValue[hover].gradient} onChange={val => setBgValue({ ...bgValue, [hover]: { ...bgValue.hover, ...bgValue.normal, gradient: val } })} />
      }
    </PanelBody>
  );
};
