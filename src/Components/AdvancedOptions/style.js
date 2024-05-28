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