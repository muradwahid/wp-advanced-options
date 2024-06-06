import { InspectorControls } from "@wordpress/block-editor";
import { useEffect } from "react";
import { AdvancedOptions } from "./Components";
window["AdvancedOptions"] = AdvancedOptions;

const Advanced=window.AdvancedOptions;
const Edit = (props) => {
  const { className, setAttributes, clientId, attributes } = props;
  const { cId } = attributes;
  useEffect(() => {
    clientId && setAttributes({ cId: clientId.substring(0, 10) });
  }, [clientId]); // Set & Update clientId to cId
  const { advanced } = attributes;
  useEffect(() => {
    // console.log(advanced.overlay)
  }, [advanced.overlay]);

  // console.log({background:attributes.advanced.background});

  // useEffect(() => {
  //   const element = document.getElementById("hbHelloBlock-123456");
  //   const elementRect = element.getBoundingClientRect();
  //   const viewportHeight =
  //     window.innerHeight || document.documentElement.clientHeight;
  //   // console.log(elementRect.top, elementRect.bottom, viewportHeight);
  //   if (elementRect.top >= 0 && elementRect.bottom <= viewportHeight) {
  //     const btnClassList = element?.classList;

  //     if (btnClassList) {
  //       element.setAttribute("data-aos", advanced.animation.type);
  //       btnClassList.remove("aos-init");
  //       btnClassList.remove("aos-animate");
  //       setTimeout(() => {
  //         btnClassList.add("aos-init");
  //         btnClassList.add("aos-animate");
  //       }, 500);
  //     }
  //   }
  // });

  // console.log(attributes.advanced.background.normal);

  const elId = `hbHelloBlock-${cId}`;
  return (
    <div
      className={className}
      id={elId}
      data-bblocks-advanced={JSON.stringify(attributes.advanced)}
    >
      {/* <style>{`${getAdvancedCSS(advanced, "hbHelloBlock-123456").replace(/\s+/g, " ").trim()}`}</style> */}
      {/* <style>{`${getAdvancedCSS(advanced, "hbHelloBlock-123456")}`}</style> */}

      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
        libero expedita soluta, porro voluptatum facilis quisquam similique in
        deserunt temporibus architecto praesentium odio repellendus cupiditate,
        optio laudantium. Dolorum, voluptatum delectus.
      </p>
      <InspectorControls>
        <Advanced attributes={attributes} setAttributes={setAttributes} />
      </InspectorControls>
    </div>
  );
};
export default Edit;
