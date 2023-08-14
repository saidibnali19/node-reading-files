const fs = require("fs");

fs.readFile("test.txt", "utf8", (error, data) => {
  if (error) {
    console.error(error);
    return;
  }
  console.log(data);
});
