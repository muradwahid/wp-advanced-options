import React from 'react';
import "./style.scss"
import { TabPanel } from '@wordpress/components';
const Transform = ({ value, onChange }) => {
  const defaultValues = {
    hoverType: "normal",
    rotate: {
      desktop: { value: "" },
      tablet: { value: "" },
      mobile: { value: "" },
      threeDRotate: false,
    },
    offset: {
      desktop: { x: "", y: "" },
      tablet: { x: "", y: "" },
      mobile: { x: "", y: "" },
    },
    scale: {
      proportions: true,
      desktop: { value: "" },
      tablet: { value: "" },
      mobile: { value: "" },
    },
    skew: {
      desktop: { x: "", y: "" },
      tablet: { x: "", y: "" },
      mobile: { x: "", y: "" },
    },
    flipX: false,
    flipY: false,
  };
  return (
    <div className=''>
      <TabPanel  >
        

    </TabPanel>
    </div>
  );
};

export default Transform;