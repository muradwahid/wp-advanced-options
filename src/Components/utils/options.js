export const unitOptions = [
  { label: "px", value: "px" },
  { label: "%", value: "%" },
  { label: "em", value: "em" },
];

export const imgPositionOptions = [
  { label: "Default", value: "default" },
  { label: "Center Center", value: "center center" },
  { label: "Center Left", value: "center left" },
  { label: "Center Right", value: "center right" },
  { label: "Top Center", value: "center top" },
  { label: "Top Left", value: "left top" },
  { label: "Top Right", value: "left bottom" },
  { label: "Bottom Center", value: "right center" },
  { label: "Bottom Left", value: "right top" },
  { label: "Bottom Right", value: "right bottom" },
  { label: "Custom", value: "custom" },
];

export const imgAttachmentOptions = [
  { label: "Default", value: "default" },
  { label: "Fixed", value: "fixed" },
  { label: "Scroll", value: "scroll" },
];

export const imgRepeatOptions = [
  { label: "Default", value: "default" },
  { label: "Repeat", value: "repeat" },
  { label: "Repeat-X", value: "repeat-x" },
  { label: "Repeat-Y", value: "repeat-y" },
  { label: "No-Repeat", value: "no-repeat" },
];

export const imgSizeOptions = [
  { label: "Default", value: "default" },
  { label: "Auto", value: "auto" },
  { label: "Cover", value: "cover" },
  { label: "Contain", value: "contain" },
  { label: "Custom", value: "custom" },
];

export const advBgOptions = {
  normal: { type: "color", color: "#0000", gradient: {}, img: {} },
  hover: { type: "color", color: "#0000", gradient: {}, img: {} },
  hoverType: "normal",
};

export const advGradientOptions = {
  type: "linear",
  radialType: "ellipse",
  colors: [
    { color: "", position: 0 },
    { color: "", position: 0 },
  ],
  centerPositions: { x: 0, y: 0 },
  angel: 90,
};

export const borderStyles = [
  { label: "Solid", value: "solid" },
  { label: "Dashed", value: "dashed" },
  { label: "Dotted", value: "dotted" },
  { label: "Double", value: "double" },
  { label: "Groove", value: "groove" },
  { label: "Inset", value: "inset" },
  { label: "Outset", value: "outset" },
  { label: "Ridge", value: "ridge" },
];

export const pxUnit = (def = 0) => ({ value: "px", label: "px", default: def });
export const perUnit = (def = 0) => ({ value: "%", label: "%", default: def });
export const emUnit = (def = 0) => ({ value: "em", label: "em", default: def });
export const remUnit = (def = 0) => ({
  value: "rem",
  label: "rem",
  default: def,
});
export const vwUnit = (def = 0) => ({ value: "vw", label: "vw", default: def });
export const vhUnit = (def = 0) => ({ value: "vh", label: "vh", default: def });

export const sides = [
  { value: "all", label: "All Sides" },
  { value: "top", label: "Top" },
  { value: "right", label: "Right" },
  { value: "bottom", label: "Bottom" },
  { value: "left", label: "Left" },
  { value: "topRight", label: "Top Right" },
  { value: "topBottom", label: "Top Bottom" },
  { value: "topLeft", label: "Top Left" },
  { value: "topRightBottom", label: "Top Right Bottom" },
  { value: "topRightLeft", label: "Top Right Left" },
  { value: "topBottomLeft", label: "Top Bottom Left" },
  { value: "rightBottom", label: "Right Bottom" },
  { value: "rightLeft", label: "Right Left" },
  { value: "rightBottomLeft", label: "Right Bottom Left" },
  { value: "bottomLeft", label: "Bottom Left" },
];
