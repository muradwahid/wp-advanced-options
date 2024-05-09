/* eslint-disable no-unused-vars */
import { useState } from 'react';
import {  Button,
  ColorPalette,
  Dashicon,
  Dropdown } from "@wordpress/components";

export const PanelColorControl = (props) => {
  const { label, value, colors, onChange = () => { }, style,className } = props;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={className} style={style}>
      <style>
        {`
          .custom-color-palette-style{
            width: 20px;
            height: 20px;
            border:1px solid #ccc;
            border-radius: 50%;
          }
          `}
      </style>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <p style={{ margin: '0' }}>{label}</p>
        <Dropdown
          className="my-container-class-name"
          contentClassName="my-popover-content-classname"
          renderToggle={({ isOpen, onToggle, onClose }) => (
            <div
              onClick={onToggle}
              aria-expanded={isOpen}
              style={{ display: 'flex', alignItems: 'center', gap: '20px' }}
            >
              <span
                style={{ backgroundColor: value }}
                className="custom-color-palette-style"
              ></span>
              <Button onClick={() => setIsOpen(!isOpen)}>
                <Dashicon icon="edit" />
              </Button>
            </div>
          )}
          renderContent={({ isOpen, onToggle, onClose }) => (
            <div style={{ padding: '10px' }}>
              <ColorPalette
                colors={colors}
                value={value}
                onChange={(val) => onChange(val)}
              />
              <div onClick={onClose}></div>
            </div>
          )}
        />
      </div>
    </div>
  );
};
