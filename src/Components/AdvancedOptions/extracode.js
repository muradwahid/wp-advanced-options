import { getAdvancedCSS } from "../utils/getCss";
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

// aos animation
// document.addEventListener("DOMContentLoaded", () => {
//   const advancedEls = document.querySelectorAll("[data-bblocks-advanced]");
//   advancedEls.forEach((el) => {
//     const advanced = JSON.parse(el.dataset.bblocksAdvanced);
//     const { animation } = advanced;
//     loadScrollAnimation(el, animation);
//   });
// });

//front end style
document.addEventListener("DOMContentLoaded", () => {
  const advancedEls = document.querySelectorAll("[data-bblocks-advanced]");
  advancedEls.forEach((el) => {
    const advanced = JSON.parse(el.dataset.bblocksAdvanced);
    updateStyle(el);
    loadScrollAnimation(el, advanced?.animation);

    frontViewPortObserver.observe(el);
    // el.removeAttribute("data-bblocks-advanced");
  });
});

const frontViewPortObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const classListAos = entry.target.classList;
      const id = entry.target.id;
      const advanced = JSON.parse(entry.target.dataset.bblocksAdvanced);
      const { animation } = advanced;
      if (entry.isIntersecting) {
        // classListAos.add("aos-animate");
        setTimeout(() => {
          classListAos.add(`${id}bpl`);
        }, 1000 * animation.speed + 600);
      } else {
        // classListAos.remove("aos-animate");
        classListAos.remove(`${id}bpl`);
      }
      window.AOS.init();
      window.addEventListener("scroll", () => {
        window.AOS.refresh();
      });
    });
  },
  {
    threshold: 0.5,
  }
);

//backend style
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

                updateStyle(ele);
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

//animation attribute observer
const animationAttr = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (
      mutation.type === "attributes" &&
      mutation.attributeName === "data-bblocks-advanced"
    ) {
      const targetElement = mutation.target;
      new Promise((resolve, reject) => {
        resolve(targetElement);
      }).then((val) => {
        const advanced = JSON.parse(val.dataset.bblocksAdvanced);
        const { animation } = advanced;
        val.setAttribute("data-aos-duration", animation.speed);
        val.setAttribute("data-aos-delay", animation.delay);
        val.setAttribute("data-aos", animation.type);
        if (!val.classList.contains("aos-init")) {
          val.classList.add("aos-init");
          val.setAttribute("data-aos", animation.type);
        }

        window.AOS.init();
        window.addEventListener("scroll", () => {
          window.AOS.refresh();
        });
      });
    }
  });
});

// backend aos animation
const animationObserver = new MutationObserver((mutations) => {
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
              elVisibilityObserver.observe(element);
            }
            if (
              element.nodeType === Node.ELEMENT_NODE &&
              element.hasAttribute("data-bblocks-advanced") &&
              element.hasAttribute("data-aos")
            ) {
              animationAttr.observe(element, { attributes: true });
            }
          });
        }
      });
    }
  });
});

animationObserver.observe(document.body, {
  attributes: true,
  childList: true,
  subtree: true,
});

// Start observing visibility of an element
const elVisibilityObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const classListAos = entry.target.classList;
      const id = entry.target.id;
      const advanced = JSON.parse(entry.target.dataset.bblocksAdvanced);
      const { animation } = advanced;
      if (entry.isIntersecting) {
        // Element is now in the viewport
        // console.log("Element is visible:", entry.target);
        if (!classListAos.contains("aos-init")) {
          classListAos.add("aos-init");
        }
        if (classListAos.contains("aos-init")) {
          window.AOS.init();
          classListAos.add("aos-animate");
          setTimeout(() => {
            classListAos.add(`${id}bpl`);
          }, 1000 * animation.speed + 500);
        }
      } else {
        classListAos.remove("aos-animate");
        classListAos.remove(`${id}bpl`);
      }
      window.AOS.init();
      window.addEventListener("scroll", () => {
        window.AOS.refresh();
      });
    });
  },
  {
    threshold: 0.5,
  }
);

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
      // loadScrollAnimation(targetElement, animation);
    }
  });
});

function updateStyle(el) {
  const advanced = JSON.parse(el.dataset.bblocksAdvanced);
  // loadScrollAnimation(el, advanced?.animation);
  const newCSS = getAdvancedCSS(advanced, el.id);
  const style = document.createElement("style");
  // console.log(el)
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

  // const elVisibilityObserver = new IntersectionObserver(
  //   (entries) => {
  //     entries.forEach((entry) => {
  //       const classListAos = entry.target.classList;
  //       const id = entry.target.id;
  //       const advanced = JSON.parse(entry.target.dataset.bblocksAdvanced);
  //       const { animation } = advanced;
  //       if (entry.isIntersecting) {
  //         // Element is now in the viewport
  //         // console.log("Element is visible:", entry.target);
  //         if (!classListAos.contains("aos-init")) {
  //           classListAos.add("aos-init");
  //         }
  //         if (classListAos.contains("aos-init")) {
  //           window.AOS.init();
  //           classListAos.add("aos-animate");
  //           setTimeout(() => {
  //             classListAos.add(`${id}bpl`);
  //           }, 1000*animation.speed + 500);
  //         }
  //       } else {
  //         classListAos.remove("aos-animate");
  //         classListAos.remove(`${id}bpl`);
  //       }
  //       window.AOS.init();
  //       window.addEventListener("scroll", () => {
  //         window.AOS.refresh();
  //       });
  //     });
  //   },
  //   {
  //     threshold: 0.5,
  //   }
  // );
  // elVisibilityObserver.observe(el);
};

observer.observe(document.body, { childList: true, subtree: true });
