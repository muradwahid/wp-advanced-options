import { InspectorControls } from "@wordpress/block-editor";
import {
  __experimentalNumberControl as NumberControl,
  PanelBody,
  TabPanel,
} from "@wordpress/components";
import { Fragment, useEffect, useState } from "react";
import { AdvancedOptions } from "./Components";
const Edit = (props) => {
  const { className, setAttributes, clientId, attributes } = props;
  useEffect(() => {
    clientId && setAttributes({ cId: clientId.substring(0, 10) });
  }, [clientId]); // Set & Update clientId to cId
  const { gradient } = attributes;
  const [items, setItems] = useState([
    { title: "title 1", value: "value 1" },
    { title: "title 2", value: "value 2" },
    { title: "title 3", value: "value 3" },
    { title: "title 4", value: "value 4" },
    { title: "title 5", value: "value 5" },
    { title: "title 6", value: "value 6" },
  ]);
  const [tab, setTab] = useState("content");
  window.onload = () => {
    const tabPanelEl = document.querySelector(`#hbHelloBlock-${clientId}`);
    const btn = document.createElement("button");
    btn.innerHTML = "Advanced";
    // Object.assign(btn, {
    //   type: "button",
    //   "aria-selected": "false",
    //   id: "tab-panel-0-tab1",
    //   role: "tab",
    //   "aria-controls": "tab-panel-0-tab1-view",
    //   className:
    //     "components-button components-tab-panel__tabs-item advanced-tab",
    //   tabIndex: "-1",
    // });

    // tabPanelEl.appendChild(btn);
    // console.log(tabPanelEl);
  };

  useEffect(() => {
    const tabPanelEl = document.querySelector(".components-tab-panel__tabs");
    const btn = document.createElement("button");
    btn.innerHTML = "Advanced";
    // Object.assign(btn, {
    //   type: "button",
    //   "aria-selected": "false",
    //   id: "tab-panel-0-tab1",
    //   role: "tab",
    //   "aria-controls": "tab-panel-0-tab1-view",
    //   className:
    //     "components-button components-tab-panel__tabs-item advanced-tab",
    //   tabIndex: "-1",
    // });

    // tabPanelEl.appendChild(btn);
    // console.log(tabPanelEl);
  }, []);
  return (
    <div className={className} id={`hbHelloBlock-${clientId}`}>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
        libero expedita soluta, porro voluptatum facilis quisquam similique in
        deserunt temporibus architecto praesentium odio repellendus cupiditate,
        optio laudantium. Dolorum, voluptatum delectus.
      </p>
      <InspectorControls>
        <AdvancedOptions attributes={attributes} setAttributes={setAttributes}/>
      </InspectorControls>
    </div>
  );
};
export default Edit;
