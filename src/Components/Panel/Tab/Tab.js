import React from 'react';

/**
 * Tab Component
 * 
 * @param {object} props - The props object
 * @param {array} props.options - The options for the tab component
 * @param {function} props.onChange - The function to handle changes in the tab value
 * @param {string} props.value - The value of the tab
 * @param {number} props.paddingY - The vertical padding for the tab
 * @param {number} props.paddingX - The horizontal padding for the tab
 * @returns {JSX.Element} React component
 */
export const Tab = (props) => {
  const { options, onChange = () => { }, value, paddingY = 4, paddingX = 0, borderColor = "#4527a4", hoverColor = "#4527a4", activeColor = "#4527a4",color="#fff" } = props;
  const id = Math.floor(Math.random() * 99999999);
  return (
    <>
      <style>
        {`
          #bpl-tab-${id}.bpl-tab {
            display: flex;
            justify-content: space-between;
            border: 1px solid ${borderColor};
            margin:8px 0px;
          }
          #bpl-tab-${id} .dynamic-${id}.isActive {
            background: ${activeColor};
            color: ${color};
          }
          #bpl-tab-${id} .dynamic-${id}.single-bpl-tab {
            display: flex;
            width: 100%;
            justify-content: center;
            transition: background 0.2s ease-in-out;
            cursor: pointer;
            white-space:nowrap;
            border-right: 1px solid ${borderColor};
          }
          #bpl-tab-${id} .single-bpl-tab:last-child{
            border-right:0px
          }
          #bpl-tab-${id} .dynamic-${id}.single-bpl-tab p {
              margin: 0;
              padding: ${paddingY}px ${paddingX}px;
            }
          #bpl-tab-${id} .single-bpl-tab-hover:hover {
            background: ${hoverColor};
            color: ${color};
          }
        `}
      </style>
      <div id={`bpl-tab-${id}`} className="bpl-tab">
        {options?.map((option, i) => (
          <div
            key={i}
            onClick={() => onChange(option.replace(/\s/g, "").toLowerCase())}
            className={`dynamic-${id} single-bpl-tab ${value === option.replace(/\s/g, "").toLowerCase()
              ? 'isActive'
              : 'single-bpl-tab-hover'
              }`}
          >
            <p style={{ textTransform: 'capitalize' }}>{option}</p>
          </div>
        ))}
      </div>
    </>
  );
};
