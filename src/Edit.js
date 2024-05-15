import { InspectorControls } from "@wordpress/block-editor";
import { useEffect, useState } from "react";
import { AdvancedOptions } from "./Components";
const Edit = (props) => {
  const { className, setAttributes, clientId, attributes, cId } = props;
  useEffect(() => {
    clientId && setAttributes({ cId: clientId.substring(0, 10) });
  }, [clientId]); // Set & Update clientId to cId
  const { advanced } = attributes;




  return (
    <div
 
      className={className}
      id={`hbHelloBlock-123456`}
    >
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
        libero expedita soluta, porro voluptatum facilis quisquam similique in
        deserunt temporibus architecto praesentium odio repellendus cupiditate,
        optio laudantium. Dolorum, voluptatum delectus.
      </p>
      <InspectorControls>
        <AdvancedOptions
          attributes={attributes}
          setAttributes={setAttributes}
        />
      </InspectorControls>
    </div>
  );
};
export default Edit;
