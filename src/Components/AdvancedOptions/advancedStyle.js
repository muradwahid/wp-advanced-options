import { getAdvancedCSS } from "../utils/getCss"
document.addEventListener("DOMContentLoaded", () => {
    const advancedEls = document.querySelectorAll("[data-bblocks-advanced]");
  advancedEls.forEach((el) => {
    const advanced = JSON.parse(el.dataset.bblocksAdvanced);
    const head = document.head;
    let style = document.createElement("style");
    // style.innerHTML = getAdvancedCSS(advanced, el.id);
    style.innerHTML = "";
    head.appendChild(style);
    el.removeAttribute("data-bblocks-advanced");
    loadScrollAnimation(el,advanced.animation)
  })
})
document.addEventListener("DOMContentLoaded", () => {
    const advancedEls = document.querySelectorAll("[data-bblocks-advanced]");
  advancedEls.forEach((el) => {
    const advanced = JSON.parse(el.dataset.bblocksAdvanced);
    const head = document.head;
    let style = document.createElement("style");
    // style.innerHTML = getAdvancedCSS(advanced, el.id);
    style.innerHTML = "";
    head.appendChild(style);
    el.removeAttribute("data-bblocks-advanced");
    loadScrollAnimation(el,advanced.animation)
  })
})



// window.onload =() => {
//   const advancedEls = document.querySelectorAll("[data-bblocks-advanced]");
//   advancedEls.forEach((el) => {
//     //observe changes to data-bblocks-advanced attribute
//     const observer = new MutationObserver((mutations) => {
//       mutations.forEach((mutation) => {
//         if (
//           mutation.type === "attributes" &&
//           mutation.attributeName === "data-bblocks-advanced"
//         ) {
//           const targetElement = mutation.target;
//           const advanced = JSON.parse(targetElement.dataset.bblocksAdvanced);

//           const newCSS = getAdvancedCSS(advanced, targetElement.id);

//           const style = document.createElement("style");
//           style.innerHTML = newCSS;
//           style.setAttribute("bpl-data-id", targetElement.id);
//           const existingStyle = document.querySelector(
//             `style[bpl-data-id="${targetElement.id}"]`
//           );
//           if (existingStyle) {
//             document.head.removeChild(existingStyle);
//           }
//           document.head.appendChild(style);
//         }
//       });
//     });

//     observer.observe(el, { attributes: true });
//   });
// };

// import { getAdvancedCSS } from "../utils/getCss";
// import AOS from "./assets/aos";
// import animation from "./assets/style/animation";
// import { aosEasing } from "./assets/style/aosEasing";
// import duration from "./assets/style/duration";
// import durationFifth from "./assets/style/durationFifth";
// import durationFourth from "./assets/style/durationFourth";
// import durationSecond from "./assets/style/durationSecond";
// import durationThird from "./assets/style/durationThird";
// window["AOS"] = AOS;

// window.onload = () => {
//   const advancedEls = document.querySelectorAll("[data-bblocks-advanced]");
//   const head = document.head;
//   const first = document.createElement("style");
//   first.innerHTML = animation();
//   head.appendChild(first);
//   const second = document.createElement("style");
//   second.innerHTML = aosEasing();
//   head.appendChild(second);
//   const third = document.createElement("style");
//   third.innerHTML = duration();
//   head.appendChild(third);
//   const fourth = document.createElement("style");
//   fourth.innerHTML = durationFifth();
//   head.appendChild(fourth);
//   const fifth = document.createElement("style");
//   fifth.innerHTML = durationFourth();
//   head.appendChild(fifth);
//   const sixth = document.createElement("style");
//   sixth.innerHTML = durationThird();
//   head.appendChild(sixth);
//   const seven = document.createElement("style");
//   seven.innerHTML = durationSecond();
//   head.appendChild(seven);

//   console.log(advancedEls)

//   advancedEls.forEach((el) => {
//     console.log("style")
//     function updateStyle() {
//       const advanced = JSON.parse(el.dataset.bblocksAdvanced);
//       const { animation } = advanced;
//       loadScrollAnimation(el, animation);
//       const newCSS = getAdvancedCSS(advanced, el.id);
//       const style = document.createElement("style");
//       style.innerHTML = newCSS;
//       style.setAttribute("bpl-data-id", el.id);

//       const existingStyle = document.querySelector(
//         `style[bpl-data-id="${el.id}"]`
//       );
//       if (existingStyle) {
//         document.head.removeChild(existingStyle);
//       }
//       document.head.appendChild(style);
//     }
//     const loadScrollAnimation = (el, animation) => {
//       const { type, speed, delay } = animation;

//       if (!el.classList.contains("aos-init")) {
//         el.classList.add("aos-init");
//         el.setAttribute("data-aos", type);
//         el.setAttribute("data-aos-duration", speed);
//         el.setAttribute("data-aos-delay", delay);
//       }

//       window.AOS.init();
//       window.addEventListener("scroll", () => {
//         window.AOS.refresh();
//       });
//     };

//     updateStyle();

//     const observer = new MutationObserver((mutations) => {
//       mutations.forEach((mutation) => {
//         if (
//           mutation.type === "attributes" &&
//           mutation.attributeName === "data-bblocks-advanced"
//         ) {
//           const targetElement = mutation.target;
//           const advAttr = JSON.parse(targetElement.dataset.bblocksAdvanced);
//           const { animation } = advAttr;
//           updateStyle();
//           console.log("observer")
//           loadScrollAnimation(targetElement, animation);
//         }
//       });
//     });

//     observer.observe(el, { attributes: true });
//     // el.removeAttribute("data-bblocks-advanced");
//   });
// };

import AOS from "./assets/aos";
import animation from "./assets/style/animation";
import { aosEasing } from "./assets/style/aosEasing";
import duration from "./assets/style/duration";
import durationFifth from "./assets/style/durationFifth";
import durationFourth from "./assets/style/durationFourth";
import durationSecond from "./assets/style/durationSecond";
import durationThird from "./assets/style/durationThird";


  const head = document.head;
  const first = document.createElement("style");
  first.innerHTML = animation();
  head.appendChild(first);
  const second = document.createElement("style");
  second.innerHTML = aosEasing();
  head.appendChild(second);
  const third = document.createElement("style");
  third.innerHTML = duration();
  head.appendChild(third);
  const fourth = document.createElement("style");
  fourth.innerHTML = durationFifth();
  head.appendChild(fourth);
  const fifth = document.createElement("style");
  fifth.innerHTML = durationFourth();
  head.appendChild(fifth);
  const sixth = document.createElement("style");
  sixth.innerHTML = durationThird();
  head.appendChild(sixth);
  const seven = document.createElement("style");
  seven.innerHTML = durationSecond();
  head.appendChild(seven);


window["AOS"] = AOS;

const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    const newElements = mutation.addedNodes;
    if (newElements) {
      Array.from(newElements).forEach((el) => {
        if (el.nodeType === Node.ELEMENT_NODE) {
          const elements = el.querySelectorAll("*");

          Array.from(elements).forEach((element) => {
            if (
              element.nodeType === Node.ELEMENT_NODE &&
              element.hasAttribute("data-bblocks-advanced")
            ) {
              // console.log(element);
              updateStyle(element);
              const promise = new Promise((resolve, reject) => {
                resolve(element);
                updateStyle(element);
              });

              promise.then((ele) => {
                const advanced = JSON.parse(element.dataset.bblocksAdvanced);
                const {animation} = advanced;
                updateStyle(ele);
                loadScrollAnimation(ele, animation);
                if (advanced) {
                  observerAttr.observe(ele, { attributes: true });
                  // ele.removeAttribute("data-bblocks-advanced");
                }
              });
            }
          });
        }
      });
    }
  });
});

const observerAttr = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (
      mutation.type === "attributes" &&
      mutation.attributeName === "data-bblocks-advanced"
    ) {
      const targetElement = mutation.target;
      const advanced = JSON.parse(targetElement.dataset.bblocksAdvanced);
      const { animation } = advanced;
      updateStyle(targetElement);
      loadScrollAnimation(targetElement, animation);
    }
  });
});

function updateStyle(el) {
  const advanced = JSON.parse(el.dataset.bblocksAdvanced);
  loadScrollAnimation(el, advanced?.animation);
  const newCSS = getAdvancedCSS(advanced, el.id);
  const style = document.createElement("style");
  style.innerHTML = newCSS;
  style.setAttribute("bpl-data-id", el.id);

  const existingStyle = document.querySelector(`style[bpl-data-id="${el.id}"]`);
  if (existingStyle) {
    document.head.removeChild(existingStyle);
  }
  document.head.appendChild(style);
}

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
observer.observe(document.body, { childList: true, subtree: true });

