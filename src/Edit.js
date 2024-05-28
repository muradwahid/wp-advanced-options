import { InspectorControls } from "@wordpress/block-editor";
import { useEffect } from "react";
import {
  AdvancedOptions,
} from "./Components";
import { getOverlayCss } from "./Components/utils/getCss";

const Edit = (props) => {
  const { className, setAttributes, clientId, attributes, cId } = props;
  useEffect(() => {
    clientId && setAttributes({ cId: clientId.substring(0, 10) });
  }, [clientId]); // Set & Update clientId to cId
  const { advanced } = attributes;

  // useEffect(() => {
  // console.log(advanced.background)
  // }, [advanced.background])

  // console.log({background:attributes.advanced.background});

  return (
    <div
      className={className}
      id={`hbHelloBlock-123456`}
      data-bblocks-advanced={JSON.stringify(attributes.advanced)}
    >
      <style>
        {`
        #hbHelloBlock-123456{
          ${getOverlayCss(advanced.overlay)}
        }
        
        
        `}
      </style>

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
