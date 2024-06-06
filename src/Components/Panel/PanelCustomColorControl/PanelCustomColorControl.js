/* eslint-disable no-unused-vars */
import { Fragment, useState } from 'react';
import { PanelColorPicker } from '../PanelColorPicker/PanelColorPicker';
import "./panelCustomColorControl.css";
import { Button, Dropdown, GradientPicker } from '@wordpress/components';
import {  } from "@wordpress/block-editor"
import { BButtonGroup } from '../BButtonGroup/BButtonGroup';
import { useSelect } from '@wordpress/data';
/**
 * PanelCustomColorControl Component
 * 
 * @param {object} props - The props object
 * @param {string} props.value - The value of the custom color control panel
 * @param {function} props.onChange - The function to handle changes in the custom color control panel value
 * @param {string} props.label - The label for the custom color control panel
 * @returns {JSX.Element} React component
 */

export const PanelCustomColorControl = (props) => {
  const {
    value,
    onChange = () => { },
    label = 'Color',
  } = props;
  const themeColors = useSelect('core/block-editor').getSettings().gradients
  const [tab, setTab] = useState('solid');
  const id = Math.floor(Math.random() * 9999999);
  const gradientValue = "linear-gradient(to bottom, #D8613C 0%, #F9F9F9 100%)";
  return (
    <div>
      <style>
        {`
        #customColorControlPanel-${id}-dualColor{
          ${value ? `background: ${value}` : `
          background-image: linear-gradient(
            45deg,
            #d5d8dc 25%,
            transparent 0,
            transparent 75%,
            #d5d8dc 0,
            #d5d8dc
          ),
          linear-gradient(
            45deg,
            #d5d8dc 25%,
            transparent 0,
            transparent 75%,
            #d5d8dc 0,
            #d5d8dc
          );
          background-size: 16px 16px;
          background-position: 0 0, calc(16px / 2) calc(16px / 2);
          `}
        }
        `}
      </style>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <span>{label}</span>
        </div>
        <Dropdown
          className="my-container-class-name"
          contentClassName="my-popover-content-classname"
          renderToggle={({ isOpen, onToggle, onClose }) => (
            <div
              style={{ display: "flex", alignItems: "center", gap: "5px" }}
            >
              <div id={`customColorControlPanel-${id}-dualColor`}
                style={{
                  height: '25px',
                  width: '25px',
                  borderRadius: '50%',
                  border: '1px solid #ccc',
                }}>

              </div>
              <Button onClick={onToggle}
                aria-expanded={isOpen} icon="edit" />
            </div>
          )}
          renderContent={({ isOpen, onToggle, onClose }) => (
            <div className="panel-custom-color-control-container">
              {/* <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <p style={{ marginBottom: '0px' }}>Type:</p>
                <div className="panel-custom-tab">
                  <div
                    className={`custom-single-tab ${tab === 'solid' ? 'active' : ''
                      }`}
                    onClick={() => setTab('solid')}
                  >
                    Solid
                  </div>
                  <div
                    className={`custom-single-tab ${tab === 'gradient' ? 'active' : ''
                      }`}
                    onClick={() => setTab('gradient')}
                  >
                    Gradient
                  </div>
                </div>
                
              </div> */}
              <BButtonGroup label="Type:" options={[{ label: "Solid", value: "solid" }, { label: "Gradient", value: "gradient" }]} value={tab} onChange={(val) => setTab(val)} />
              {tab === 'solid' && (
                <div style={{ marginTop: '20px' }}>
                  <PanelColorPicker
                    value={value}
                    label="Color :"
                    onChange={(value) => onChange(value)}
                  />
                </div>
              )}
              {tab === 'gradient' && (
                <div style={{ marginTop: '10px' }}>
                  <GradientPicker
                    value={value || gradientValue}
                    onChange={(value) => onChange(value)}
                    gradients={themeColors}

                  />
                </div>
              )}
              <div onClick={onClose}></div>
            </div>
          )}
        />
      </div>
    </div>
  );
};
