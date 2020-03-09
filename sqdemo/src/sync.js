const seq = require("./seq");
require("./model");

seq
  .authenticate()
  .then(() => {
    console.log("ok");
  })
  .catch(() => {
    console.log("no");
  });

seq
  .sync({
    forch: true
  })
  .then(() => {
    console.log("sync");
    process.exit();
  });
