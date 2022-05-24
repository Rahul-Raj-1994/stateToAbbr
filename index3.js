const str = "apple cherries green apples green kiwi";

const newStr = str.split(" ").filter((x) => x.includes("green"));
//   .join(" ");

console.log(newStr[0]);
