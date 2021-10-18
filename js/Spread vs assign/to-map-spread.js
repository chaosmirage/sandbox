const records = require("./records");

const to_map = (rs) => rs.reduce((o, [k, v]) => ({ ...o, [k]: v }), {});

to_map(records);
