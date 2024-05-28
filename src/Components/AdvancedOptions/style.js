document.addEventListener("DOMContentLoaded", () => {
  const advancedEls = document.querySelectorAll("[data-bblocks-advanced]");
  let css = "";
  // console.log(advancedEls);

  advancedEls.forEach((el) => {
    const advanced = JSON.parse(el.dataset.bblocksAdvanced);
    console.log(el.id);
    css += generateCSS(advanced, el.id);

    el.removeAttribute("data-bblocks-advanced");
  });

  const style = document.createElement("style");
  style.innerHTML = css;
  document.head.appendChild(style);
});

const generateCSS = (advanced, id) => {
  const { dimentions } = advanced;

  return `
    #${id}{
      background-color: #333;
    }
  `;
};
