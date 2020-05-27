const fs = require("fs");
const path = require("path");

const promiseFunc = () => {
  const promise = new Promise((resolve, reject) => {
    fs.readFile("./readFrom.txt", (err, source) => {
      if (err) {
        reject(err);
      } else {
        resolve(source.toString());
      }
    });
  });
  return promise;
};
    
// promiseFunc().then((content) => console.log(content));

console.log(path.join(__dirname, "../anything"));
