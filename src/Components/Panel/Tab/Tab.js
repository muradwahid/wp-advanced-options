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
  const { options, onChange = () => { }, value, paddingY = 4, paddingX = 0 } = props;
  const id = Math.floor(Math.random() * 99999999);
  return (
    <>
      <style>
        {`
          .includeExclude {
            display: flex;
            justify-content: space-between;
            border: 1px solid #ccc;
            margin:8px 0px;
          }
          .isActive-include {
            background: #d7d7d7;
          }
          .single-includeExclude {
            display: flex;
            width: 100%;
            justify-content: center;
            transition: background 0.2s ease-in-out;
            cursor: pointer;
            white-space:nowrap;
            border-right: 1px solid #d7d7d7;
          }
          .single-includeExclude:last-child{
            border-right:0px
          }
          .dynamic-${id}.single-includeExclude p {
              margin: 0;
              padding: ${paddingY}px ${paddingX}px;
            }
          .single-includeExclude-hover:hover {
            background: #ebebeb;
          }
          `}
      </style>
      <div className="includeExclude">
        {options?.map((option, i) => (
          <div
            key={i}
            onClick={() => onChange(option.replace(/\s/g, "").toLowerCase())}
            className={`dynamic-${id} single-includeExclude ${value === option.replace(/\s/g, "").toLowerCase()
              ? 'isActive-include'
              : 'single-includeExclude-hover'
              }`}
          >
            <p style={{ textTransform: 'capitalize' }}>{option}</p>
          </div>
        ))}
      </div>
    </>
  );
};
