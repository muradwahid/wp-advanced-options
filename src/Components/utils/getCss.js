//get responsive css
const getResponsiveCss = (desktop, tablet, mobile, id, isHover = false) => {
  return `@media only screen and (max-width: 640px) {
    ${
      isHover
        ? `#${id}:hover{${mobile ? mobile : ""}}`
        : `#${id}{${mobile ? mobile : ""}}`
    }
}
@media only screen and (min-width:641px) and (max-width: 1024px) {
      ${
        isHover
          ? `#${id}:hover{${tablet ? tablet : ""}}`
          : `#${id}{${tablet ? tablet : ""}}`
      }
}
@media only screen and (min-width:1025px) {
      ${
        isHover
          ? `#${id}:hover{${desktop ? desktop : ""}}`
          : `#${id}{${desktop ? desktop : ""}}`
      }
}
`;
};

//getBoxCss
export const getBoxCss = (props, property) => {
  if (props) {
    const result = Object.keys(props).map(
      (key) => `${property}-${key}:${props[key]};`
    );
    return result.join(" ");
  }
  return "";
};
//dimension
export const getDimensionCss = (dimension, device) => {
  if (dimension) {
    return `${
      dimension?.margin ? getBoxCss(dimension?.margin[device], "margin") : ""
    }
    ${
      dimension?.padding ? getBoxCss(dimension?.padding[device], "padding") : ""
    }`;
  }
};

//gradient
export const getGradientCss = (gradient) => {
  const { type, radialType, colors, centerPositions, angel } = gradient;
  if (gradient) {
    const gradientColors = colors?.map(
      ({ color, position }) => `${color} ${position}%`
    );
    const liner = `linear-gradient(${angel}deg, ${gradientColors})`;
    const radial = `radial-gradient(${radialType} at ${centerPositions?.x}% ${centerPositions?.y}%,${gradientColors})`;

    return type === "linear" ? `background:${liner};` : `background:${radial};`;
  }
  return "";
};

//get image position

const getImagePosition = (img) => {
  return `${
    img?.position
      ? `background-position: ${
          img.position !== "custom"
            ? `${img.position};`
            : `${img.xPosition} ${img.yPosition};`
        }`
      : ""
  }
                ${
                  img?.attachment
                    ? `background-attachment: ${img.attachment};`
                    : ""
                }
                ${img?.repeat ? `background-repeat: ${img.repeat};` : ""}
                ${
                  img?.size
                    ? `background-size:${
                        img.size !== "custom"
                          ? img.size
                          : `${img.customSize} ${img.customSize}`
                      };`
                    : ""
                }`;
};

//background image
export const getImageCss = (img) => {
  let desktop, tablet, mobile;
  if (Object.keys(img).length > 1) {
    if (img?.desktop) {
      desktop = getImagePosition(img?.desktop, "desktop");
    }
    if (img?.tablet) {
      tablet = getImagePosition(img?.tablet, "tablet");
    }
    if (img?.mobile) {
      mobile = getImagePosition(img?.mobile, "mobile");
    }
  }
  if (img) {
    return {
      global: `background-image: url(${img.url})`,
      desktop,
      tablet,
      mobile,
    };
  }
  return "";
};

// {
//     "url": "http://localhost/my-plugins/wp-content/uploads/2024/04/flyshot-info-image-02.png",
//     "desktop": {
//         "position": "custom",
//         "xPosition": "2px",
//         "yPosition": "-1px",
//         "attachment": "default",
//         "repeat": "no-repeat",
//         "size": "default"
//     }
// }

const getColor = (color) => {
  return ` ${color ?`background: ${ color }`:""}`;
};

//background
export const getBackgroundCss = (background, id, device) => {
  const { normal, hover } = background;
  const { type, color, gradient, img } = normal;
  const {
    type: hoverType,
    color: hoverColor,
    gradient: hoverGradient,
    img: hoverImg,
    transition,
  } = hover;

  const bg =
    type === "color"
      ? getColor(color)
      : type === "gradient"
      ? getGradientCss(gradient)
      : type === "image"
      ? getImageCss(img).global
          : "";
  const hoverBg =
    hoverType === "color"
      ? getColor(hoverColor)
      : type === "gradient"
      ? getGradientCss(hoverGradient)
      : type === "image"
      ? getImageCss(hoverImg).global
          : "";
  // console.log(hoverGradient)
  return `#${id}{
      ${bg}
      ${transition ? `transition : all ${transition}s ease-in-out ;` : ""}}
        ${
          type === "image"
            ? getResponsiveCss(
                getImageCss(img).desktop,
                getImageCss(img).tablet,
                getImageCss(img).mobile,
                id
              )
            : ""
        }
        ${
          type === "image"
            ? getResponsiveCss(
                getImageCss(hoverImg).desktop,
                getImageCss(hoverImg).tablet,
                getImageCss(hoverImg).mobile,
                id,
                true
              )
            : ""
        }
        #${id}:hover{
          ${hoverBg}
        }
    
  `;
};

// {
//     "normal": {
//       "type": "color",
//       "color": "",
//       "gradient": {},
//       "img": {}
//     },
//     "hover": {
//       "type": "color",
//       "color": "",
//       "gradient": {},
//       "img": {}
//     },
//     "hoverType": "normal"
//   }

//gradient
// {
//     type: value.type || "linear",
//     radialType: value.radialType || "ellipse",
//     colors: value.colors || [
//       { color: "", position: 0 },
//       { color: "", position: 0 }
//     ],
//     centerPositions: value.centerPositions || { x: 0, y: 0 },
//     angel: value.angel || 90
//   }
