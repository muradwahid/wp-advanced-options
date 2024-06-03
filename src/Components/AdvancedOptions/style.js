import AOS from "../../../assets/assets/aos";
import "../../../assets/css/aos.css"
window.AOS = AOS;
window.onload = () => {
  const advancedEls = document.querySelectorAll("[data-bblocks-advanced]");
  let css = "";
  advancedEls.forEach((el) => {
    const advanced = JSON.parse(el.dataset.bblocksAdvanced);
    const { animation } = advanced;
    
    css += generateCSS(advanced, el.id);

    if (animation) {
      loadScrollAnimation(el, animation);
    }

    el.removeAttribute("data-bblocks-advanced");
  });

  const style = document.createElement("style");
  style.innerHTML = css;
  document.head.appendChild(style);
};

const loadScrollAnimation = (el, animation) => {
  const { type, speed, delay } = animation;

  if (!el.classList.contains("aos-init")) {
    el.classList.add("aos-init");
    el.setAttribute("data-aos", type);
    el.setAttribute("data-aos-duration", speed);
    el.setAttribute("data-aos-delay", delay);
  }

  window.AOS.init();
  window.addEventListener("scroll", () => {
    window.AOS.refresh();
  });
};

// window.onload = () => {
//   const advancedEls = document.querySelectorAll("[data-bblocks-advanced]");
//   let css = "";

//   advancedEls.forEach((el) => {
//     const advanced = JSON.parse(el.dataset.bblocksAdvanced);

//     css += generateCSS(advanced, el.id);
//     const aosInit = AOS?.init();
//     loadAnimation(el, advanced);

//     window.addEventListener("scroll", () => {
//       AOS.refresh();

//       loadAnimation(el, advanced);
//     });

//     el.removeAttribute("data-bblocks-advanced");
//   });

//   const style = document.createElement("style");
//   style.innerHTML = css;
//   document.head.appendChild(style);
// };

// const loadAnimation = (el, advanced) => {
//   const elementRect = el.getBoundingClientRect();

//   const { animation } = advanced;
//   const { type, speed, delay } = animation;

//   const viewportHeight =
//     window.innerHeight || document.documentElement.clientHeight;
//   const isInViewport =
//     elementRect.top >= 0 && elementRect.bottom <= viewportHeight;

//   if (!el.classList.contains("aos-init")) {
//     el.classList.add("aos-init");
//     el.setAttribute("data-aos", type);
//     el.setAttribute("data-duration", speed);
//     el.setAttribute("data-delay", delay);
//   }
//   console.log(isInViewport);
//   if (isInViewport) {
//     el.classList.add("aos-animate");
//   } else {
//     el.classList.remove("aos-animate");
//   }
// };

// const loadAnimation = (el, advanced) => {
//   const elementRect = el.getBoundingClientRect();
//   const viewportHeight =
//     window.innerHeight || document.documentElement.clientHeight;

//   const isInViewport =
//     elementRect.top >= 0 && elementRect.bottom <= viewportHeight;
//   // console.log(isInViewport);
//   if (isInViewport) {
//     const animationClassList = el.classList;
//     if (animationClassList) {
//       el.setAttribute("data-aos", advanced.animation.type);
//       if (!animationClassList.contains("aos-init")) {
//         animationClassList.add("aos-init");
//       }
//       setTimeout(() => {
//         animationClassList.add("aos-animate");
//       }, 500);
//     }
//   } else {
//     if (el.classList) {
//       el.classList.remove("aos-init");
//       el.classList.remove("aos-animate");
//     }
//   }
// };

const generateCSS = (advanced, id) => {
  const { dimentions } = advanced;
  return `
    #${id}{
      background-color: #333;
    }
  `;
};

// document.addEventListener("DOMContentLoaded", () => {
//   const advancedEls = document.querySelectorAll("[data-bblocks-advanced]");

//   // Function to generate CSS based on advanced data
//   function generateCSS(advanced, elementId) {
//     // Implement your CSS generation logic here
//     // Example:
//     const { backgroundColor, fontSize } = advanced;
//     return `#${elementId} { background-color: ${backgroundColor}; font-size: ${fontSize}; }`;
//   }

//   // Initial CSS generation
//   let css = "";
//   advancedEls.forEach((el) => {
//     const advanced = JSON.parse(el.dataset.bblocksAdvanced);
//     css += generateCSS(advanced, el.id);

//     // Remove the attribute once it's used
//     el.removeAttribute("data-bblocks-advanced");
//   });

//   // Create the style element
//   const style = document.createElement("style");
//   style.innerHTML = css;
//   document.head.appendChild(style);

//   // Mutation Observer Setup
//   const observer = new MutationObserver((mutations) => {
//     mutations.forEach((mutation) => {
//       if (
//         mutation.type === "attributes" &&
//         mutation.attributeName === "data-bblocks-advanced"
//       ) {
//         const targetElement = mutation.target;
//         const advanced = JSON.parse(targetElement.dataset.bblocksAdvanced);
//         const newCSS = generateCSS(advanced, targetElement.id);

//         // Update the existing style element's content
//         style.innerHTML = style.innerHTML.replace(
//           `#${targetElement.id} {.*}`,
//           newCSS
//         );

//         // Remove the attribute
//         targetElement.removeAttribute("data-bblocks-advanced");
//       }
//     });
//   });

//   // Observe all elements with "data-bblocks-advanced"
//   advancedEls.forEach((el) => {
//     observer.observe(el, { attributes: true });
//   });
// });

// const observer = new MutationObserver((mutations) => {
//   mutations.forEach((mutation) => {
//     if (
//       mutation.type === "attributes" &&
//       mutation.attributeName === "data-bblocks-advanced"
//     ) {
//       console.log(
//         `Status changed to: ${advancedEls.getAttribute("data-bblocks-advanced")}`
//       );
//     }
//   });
// });

// observer.observe(advancedEls, { attributes: true });
