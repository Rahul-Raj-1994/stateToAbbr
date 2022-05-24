const statesData = require("./states.json");

function stateNameToAbbr(name) {
  let a = name
    .trim()
    .replace(/[^\w ]/g, "")
    .toLowerCase(); //Trim, remove all non-word characters with the exception of spaces, and convert to lowercase
  // console.log(a);
  //   console.log(states[a]);

  const abc = a
    .split(" ")
    .filter((x) => x.includes(statesData[a]))
    .join("");
  console.log(abc);

  if (statesData[abc] !== null) {
    return statesData[abc];
  }

  return null;
}

const output = stateNameToAbbr("I live in Texas");
console.log(output);
