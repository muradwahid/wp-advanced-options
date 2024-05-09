/* eslint-disable no-unused-vars */
import { ColorPalette, Dropdown, Tooltip } from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import React from 'react';

/**
 * PanelColorPicker component.
 *
 * @component
 * @param {Object} props
 * @param {String} [props.label] - Optional
 * @param {String} [props.value] -Optional
 * @param {Array} [props.colors] - Optional
 * @param {Function} [props.onChange=() => {}]  -Optional
 * @param {JSX.Element} [props.children] - Optional
 * @returns {JSX.Element}
 */

export const PanelColorPicker = ((props) => {
  const { value, onChange = () => { }, label, colors, tooltip, children } = props;
  const id = Math.floor(Math.random() * 99999999);
  const themeColors = useSelect('core/block-editor').getSettings().colors
  return <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: "10px",
      gap: "10px"
    }}
  >
    <style>
      {`
        .panelColorPickerSelectColor-${id}{
          ${value ? `background-color: ${value}` : `
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
    <div>{label}</div>
    {children && children}
    <Dropdown
      className="my-container-class-name"
      contentClassName="my-popover-content-classname"
      renderToggle={({ isOpen, onToggle, onClose }) => (
        <TooltipChecker tooltip={tooltip}>
          <div
            style={{ display: "flex", alignItems: "center", gap: "5px" }}
          >
            <div onClick={onToggle} className={`panelColorPickerSelectColor-${id}`}
              style={{
                height: '25px',
                width: '25px',
                borderRadius: '50%',
                border: '1px solid #ccc',
                cursor: 'pointer',
              }}>
            </div>
          </div>
        </TooltipChecker>
      )}
      renderContent={({ isOpen, onToggle, onClose }) => (
        <div>
          <ColorPalette
            colors={colors || themeColors.slice(0, 10)}
            enableAlpha
            value={value}
            onChange={(value) => onChange(value)}
          />
          <div onClick={onClose}></div>
        </div>
      )}
    />
  </div>;
});

const TooltipChecker = ({ tooltip, children }) => tooltip ? <Tooltip delay={300} text={tooltip} placement='top'>{children}</Tooltip> : children