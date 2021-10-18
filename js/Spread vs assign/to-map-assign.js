const records = require("./records");

const to_map = (rs) => rs.reduce((o, [k, v]) => ((o[k] = v), o), {});

to_map(records);
