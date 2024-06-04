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

//getBorderCss
export const getBorderCSS = (border) => {
  const {
    width = "0px",
    style = "solid",
    color = "#0000",
    side = "all",
    radius = "0px",
  } = border || {};

  const borderSideCheck = (s) => {
    const bSide = side?.toLowerCase();
    return bSide?.includes("all") || bSide?.includes(s);
  };
  const borderCSS = `${width} ${style} ${color}`;

  const styles = `
		${["top", "right", "bottom", "left"]
      .map((side) =>
        borderSideCheck(side) ? `border-${side}: ${borderCSS};` : ""
      )
      .join("")}
		${!radius ? "" : `border-radius: ${radius};`}
	`;

  return styles;
};

//getShadowCSS
export const getShadowCSS = (shadow) => {
  const {
    type = "box",
    hOffset = "0px",
    vOffset = "0px",
    blur = "0px",
    spreed = "0px",
    color = "#7090b0",
    isInset = false,
  } = shadow || {};

  const inset = isInset ? "inset" : "";
  const offsetBlur = `${hOffset} ${vOffset} ${blur}`;

  const styles =
    "text" === type
      ? `${offsetBlur} ${color}`
      : `${offsetBlur} ${spreed} ${color} ${inset}`;

  return styles || "none";
};

//dimension
export const getDimensionCSS = (dimension, device) => {
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
export const getBackgroundCSS = (background) => {
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
    transition,
  };
};

//overlay
export const getOverlayCSS = (overlay) => {
  const { colors } = overlay;
  const {
    opacity,
    blend,
    isCssFilter,
    blur,
    brightness,
    contrast,
    saturation,
    hue,
  } = overlay;
  const filter = isCssFilter
    ? `filter:brightness(${brightness}%) contrast(${contrast}%) saturation(${saturation}%) blur(${blur}px) hue-rotate(${hue}deg);
    -webkit-filter:brightness(${brightness}%) contrast(${contrast}%) saturation(${saturation}%) blur(${blur}px) hue-rotate(${hue}deg);`
    : "";
  return {
    normal: {
      background: getBackgroundCSS(colors).normal.background,
      desktop: getBackgroundCSS(colors).normal.desktop,
      tablet: getBackgroundCSS(colors).normal.tablet,
      mobile: getBackgroundCSS(colors).normal.mobile,
    },
    hover: {
      background: getBackgroundCSS(colors).hover.background,
      desktop: getBackgroundCSS(colors).hover.desktop,
      tablet: getBackgroundCSS(colors).hover.tablet,
      mobile: getBackgroundCSS(colors).hover.mobile,
    },
    transition: getBackgroundCSS(colors).transition,
    opacity: opacity ? `opacity: ${opacity};` : "",
    blend: blend ? `mix-blend-mode: ${blend};` : "",
    filter,
  };
};

// border and shadow
export const getBorderShadowCSS = (props) => {
  const { normal, hover } = props;
  return {
    normal: `${getBorderCSS(normal?.border)}
    box-shadow:${getShadowCSS(normal?.shadow)};`,
    // normal: {
    //   border: getBorderCSS(normal?.border),
    //   shadow: `box-shadow:${getShadowCSS(normal?.shadow)};`,
    // },
    hover: `getBorderCSS(hover?.border)
    box-shadow:${getShadowCSS(hover?.shadow)};`
    // hover: {
    //   border: getBorderCSS(hover?.border),
    //   shadow: `box-shadow:${getShadowCSS(hover?.shadow)};`,
    // },
  };
};

//visibility
export const getVisibilityCSS = (props) => {
  const { zIndex, overflow } = props;
  return {
    global: overflow !== "default" && !!overflow ? `overflow:${overflow};` : "",
    // global:`overflow:${overflow};`,
    desktop: `${zIndex?.desktop ? `z-index:${zIndex?.desktop};` : ""}`,
    tablet: `${zIndex?.tablet ? `z-index:${zIndex?.tablet};` : ""}`,
    mobile: `${zIndex?.mobile ? `z-index:${zIndex?.mobile};` : ""}`,
  };
};

//responsive control
export const getResponsiveControl = (props) => {
  const { desktop, tablet, mobile } = props;
  return {
    desktop: desktop ? "display:none;" : "",
    tablet: tablet ? "display:none;" : "",
    mobile: mobile ? "display:none;" : "",
  };
};

const getObjKey = (obj) => {
  return Object.keys(obj);
};
// advanced css
export const getAdvancedCSS = (advanced, id) => {
  const {
    dimension,
    background,
    overlay,
    borderShadow,
    visibility,
    responsiveControl,
    animation,
    customCss
  } = advanced || {};
  return `#${id}{
    position:relative;
    ${getObjKey(dimension) ? getDimensionCSS(dimension, "desktop") : ""}
    ${getObjKey(background)? getBackgroundCSS(background).normal.background: ""}
    ${getObjKey(background) ? getBackgroundCSS(background).normal.desktop : ""}
    ${getObjKey(borderShadow) ? getBorderShadowCSS(borderShadow).normal : ""}
    ${getObjKey(visibility) ? getVisibilityCSS(visibility).global : ""}
    ${getObjKey(visibility) ? getVisibilityCSS(visibility).desktop : ""}
    ${getObjKey(responsiveControl) ? getResponsiveControl(responsiveControl).desktop : ""}
  }
  #${id}bpl{
    ${
      getObjKey(background)
        ? `transition:background ${
            getBackgroundCSS(background).transition
          }s ease-in-out;`
        : ""
    }
  }
  #${id}:hover{
    ${getObjKey(background) ? getBackgroundCSS(background).hover.background : ""}
    ${getObjKey(background) ? getBackgroundCSS(background).hover.desktop : ""}
    ${getObjKey(borderShadow) ? getBorderShadowCSS(borderShadow).hover : ""}
  }

  #${id}::after{
    content:"";
    position:absolute;
    inset:0;
    ${getObjKey(overlay) ? getOverlayCSS(overlay).normal.background : ""}
    ${getObjKey(overlay) ? getOverlayCSS(overlay).normal.desktop : ""}
    ${getObjKey(overlay) ? getOverlayCSS(overlay).blend : ""}
    ${getObjKey(overlay) ? getOverlayCSS(overlay).filter : ""}
    ${getObjKey(overlay) ? getOverlayCSS(overlay).opacity : ""}
    ${
      getObjKey(overlay)
        ? `transition:background ${
            getOverlayCSS(overlay).transition
          }s, opacity ${getOverlayCSS(overlay).transition}s, filter ${
            getOverlayCSS(overlay).transition
          }s;`
        : ""
    }
  }
  #${id}:hover::after{
    content:"";
    position:absolute;
    inset:0;
    ${getObjKey(overlay) ? getOverlayCSS(overlay).hover.background : ""}
    ${getObjKey(overlay) ? getOverlayCSS(overlay).hover.desktop : ""}
  }


  @media only screen and (min-width:641px) and (max-width: 1024px) {
    #${id}{
    ${getObjKey(dimension) ? getDimensionCSS(dimension, "tablet") : ""}
    ${getObjKey(background) ? getBackgroundCSS(background).normal.tablet : ""}
    ${getObjKey(visibility) ? getVisibilityCSS(visibility).tablet : ""}
    ${
      getObjKey(responsiveControl)
        ? getResponsiveControl(responsiveControl).tablet
        : ""
    }}
  }
  #${id}:hover{
    ${getObjKey(background) ? getBackgroundCSS(background).hover.tablet : ""}
  }
  #${id}::after{
    ${getObjKey(overlay) ? getOverlayCSS(overlay).normal.tablet : ""}
  }
  #${id}:hover::after{
    ${getObjKey(overlay) ? getOverlayCSS(overlay).hover.tablet : ""}
  }
  }

  @media only screen and (max-width: 640px) {
    #${id}{
    ${getObjKey(dimension) ? getDimensionCSS(dimension, "mobile") : ""}
    ${getObjKey(background) ? getBackgroundCSS(background).normal.mobile : ""}
    ${getObjKey(visibility) ? getVisibilityCSS(visibility).mobile : ""}
    ${
      getObjKey(responsiveControl)
        ? getResponsiveControl(responsiveControl).mobile
        : ""
    }}
  }
    #${id}:hover{
    ${getObjKey(background) ? getBackgroundCSS(background).hover.mobile : ""}
  }
    #${id}::after{
    ${getObjKey(overlay) ? getOverlayCSS(overlay).normal.mobile : ""}
  }
  #${id}:hover::after{
    ${getObjKey(overlay) ? getOverlayCSS(overlay).hover.mobile : ""}
  }
  }
  ${customCss ? customCss : ""}
  `
    .replace(/\s+/g, " ")
    .trim();
};

