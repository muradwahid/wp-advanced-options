import { getAdvancedCSS } from "../utils/getCss";

//front end style
document.addEventListener("DOMContentLoaded", () => {
  const advancedEls = document.querySelectorAll("[data-bblocks-advanced]");
  advancedEls.forEach((el) => {
    updateStyle(el);
    el.removeAttribute("data-bblocks-advanced");
  });
});


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
              const promise = new Promise((resolve) => {
                resolve(element);
                updateStyle(element);
              });

              promise.then((ele) => {
                const advanced = JSON.parse(element.dataset.bblocksAdvanced);

                updateStyle(ele);
                if (advanced) {
                  observerAttr.observe(ele, { attributes: true });
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
      updateStyle(targetElement);
    }
  });
});

observer.observe(document.body, { childList: true, subtree: true });



function updateStyle(el) {
  const advanced = JSON.parse(el.dataset.bblocksAdvanced);
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