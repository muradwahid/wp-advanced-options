const first = false;
const second = false;
const third="second"

const isTrue = first && third === "first" ? "m" : second && third === "second" ? "m" : second || third ? "m" : "" 

const arr = ["lhoofdsf-fdslfjbpl", "fslhlh-flsdfjn", "pomfnv5345-634356bpl", "fsdlfjhsdf-fjsdlfjen", "546034-54fsdfbpl"]


const bplStrings = arr.filter((str) => /bpl/.test(str));
console.log(bplStrings)
