import _ from "lodash";

const ids = ["1", "2"];
const attributes = [
  { name: "test", age: 1 },
  { name: "test2", age: 2 },
];

console.log(_.zipObject(ids, attributes));
1;
