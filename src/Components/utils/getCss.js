//get responsive css
const getResponsiveCss = (desktop, tablet, mobile, id, isHover = false) => {
  return `${
    mobile
      ? `@media only screen and (max-width: 640px) {
    ${
      isHover
        ? `#${id}:hover{${mobile ? mobile : ""}}`
        : `#${id}{${mobile ? mobile : ""}}`
    }
}`
      : ""
  }
${
  tablet
    ? `@media only screen and (min-width:641px) and (max-width: 1024px) {
      ${
        isHover
          ? `#${id}:hover{${tablet ? tablet : ""}}`
          : `#${id}{${tablet ? tablet : ""}}`
      }
}`
    : ""
}
${
  desktop
    ? `@media only screen and (min-width:1025px) {
      ${
        isHover
          ? `#${id}:hover{${desktop ? desktop : ""}}`
          : `#${id}{${desktop ? desktop : ""}}`
      }
}`
    : ""
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
const getImageCss = (img) => {
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
      global: `background-image: url(${img.url});`,
      desktop,
      tablet,
      mobile,
    };
  }
  return "";
};

//background color
const getColor = (color) => {
  return ` ${color ? `background: ${color};` : ""}`;
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
  return "";
};

//background
export const getBackgroundCss = (background) => {
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
      : hover.type === "gradient"
      ? getGradientCss(hoverGradient)
      : hover.type === "image"
      ? getImageCss(hoverImg).global
      : "";
  return {
    normal: {
      background: bg,
      desktop: getImageCss(img).desktop,
      tablet: getImageCss(img).tablet,
      mobile: getImageCss(img).mobile,
    },
    hover: {
      background: hoverBg,
      desktop: getImageCss(hover.img).desktop,
      tablet: getImageCss(hover.img).tablet,
      mobile: getImageCss(hover.img).mobile,
    },
    transition: `transition:all ${
      transition ? transition : 0.25
    }s ease-in-out;`,
  };
};

//overlay
export const getOverlayCss = (overlay) => {
  const { colors } = overlay;
  const { opacity, blend, isCssFilter, blur, brightness, contrast, saturation, hue } = overlay;
  const filter = isCssFilter
    ? `filter:brightness(${brightness}%) contrast(${contrast}%) saturation(${saturation}%) blur(${blur}px) hue-rotate(${hue}deg);
    -webkit-filter:brightness(${brightness}%) contrast(${contrast}%) saturation(${saturation}%) blur(${blur}px) hue-rotate(${hue}deg);`
    : "";
  return {
    normal: {
      background: getBackgroundCss(colors).normal.background,
      desktop: getBackgroundCss(colors).normal.desktop,
      tablet: getBackgroundCss(colors).normal.tablet,
      mobile: getBackgroundCss(colors).normal.mobile,
    },
    hover: {
      background: getBackgroundCss(colors).hover.background,
      desktop: getBackgroundCss(colors).hover.desktop,
      tablet: getBackgroundCss(colors).hover.tablet,
      mobile: getBackgroundCss(colors).hover.mobile,
    },
    transition: getBackgroundCss(colors).transition,
    opacity: opacity ? `opacity: ${opacity};` : "",
    blend: blend ? `mix-blend-mode: ${blend};` : "",
    filter,
  }
};

