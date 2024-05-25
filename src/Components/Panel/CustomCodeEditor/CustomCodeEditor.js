import React from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/theme-monokai";

const CustomCodeEditor = ({ value, onChange,height="300px",width="100%" }) => {
  const id = Math.floor(Math.random() * 99999999);

  return (
    <div>
      <AceEditor
        mode="css"
        theme="monokai"
        name={`advEditor-${id}`}
        // onLoad={this.onLoad}
        onChange={val=>onChange(val)}
        fontSize={14}
        lineHeight={19}
        height={height}
        width={width}
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={true}
        value={value}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
          showLineNumbers: true,
          tabSize: 2,
        }}
      />
    </div>
  );
};

export default CustomCodeEditor;
