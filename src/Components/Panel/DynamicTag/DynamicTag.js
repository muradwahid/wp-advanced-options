import React from "react";
/**
 * DynamicTag Component
 * 
 * @param {object} props - The props object
 * @param {string} props.tagName - The tag name for the dynamic tag
 * @param {object} props.restProps - The rest of the props for the dynamic tag
 * @returns {JSX.Element} React component
 */
export const DynamicTag = ({ tagName: DynamicTag, ...restProps }) => {
  return (
    <DynamicTag
      {...restProps}
    >
    </DynamicTag>
  );
};
