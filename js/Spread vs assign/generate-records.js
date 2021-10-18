const { v4: uuid } = require("uuid");
const faker = require("faker");

const records = [];
for (let i = 0; i < process.env.RECORD; i++) {
  records.push([uuid(), faker.internet.exampleEmail()]);
}

console.log(JSON.stringify(records, null, 2));
