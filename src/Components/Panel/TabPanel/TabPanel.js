const { Dashicon } = wp.components;
import React from 'react';
import "./tabpanel.css";

export const TabPanel = (props) => {
  const { value, onChange = () => { } } = props;
  return (
    <>
      <div className="tab-panel-container">
        <div
          onClick={() => onChange('content')}
          className={`single-tab ${value === 'content'
            ? 'is-tab-active active-tab-color'
            : 'deActive-tab-color'
            }`}
        >
          <Dashicon icon="edit" />
          <span>Content</span>
        </div>
        <div
          onClick={() => onChange('style')}
          className={`single-tab ${value === 'style'
            ? 'is-tab-active active-tab-color'
            : 'deActive-tab-color'
            }`}
        >
          <svg style={{ paddingBottom: '4px', fontSize: '20px' }} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M448 256c0-106-86-192-192-192V448c106 0 192-86 192-192zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"></path></svg>
          <span>Style</span>
        </div>
      </div>
    </>
  );
};
