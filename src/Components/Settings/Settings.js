import { InspectorControls } from '@wordpress/block-editor';
import { __experimentalUnitControl as UnitControl } from '@wordpress/components';
import React from 'react';
import { BGradient } from '../Panel/BGradient/BGradient';
import { useEffect } from '@wordpress/element';

const Settings = (props) => {
  console.log(props)
  const { attributes, setAttributes } = props;
  const { advanced } = attributes;
  
  // console.log(attributes)
  useEffect(() => {
    console.log(advanced)
  },[advanced])
  return (
    <InspectorControls>
      <UnitControl value={advanced?.width} onChange={val => setAttributes({ advanced: { ...advanced, width: val } })} />
      <BGradient value={advanced?.gradient} onChange={(val) => setAttributes({ advanced: {...advanced,gradient:val} })} />
    </InspectorControls>
  );
};

export default Settings;