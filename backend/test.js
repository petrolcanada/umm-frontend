const fs = require("fs");
const path = require("path");

const promiseFunc = () => {
  return new Promise((resolve, reject) => {
    fs.readFile("./readFrom.txt", (err, source) => {
      if (err) {
        reject(err);
      } else {
        resolve(source.toString());
      }
    });
  });
};

const promiseFuncPlusOne = (content) => {
  const promise = new Promise((resolve, reject) => {
    if (err) {
      reject(err);
    } else {
      resolve(content.concat("1"));
    }
  });
  return promise;
};

const p0 = new Promise((resolve, reject) => {
  fs.readFile("./readFrom.txt", (err, source) => {
    if (err) {
      reject(err);
    } else {
      resolve(source.toString());
    }
  });
});

promiseFunc()
  .then((content) => {
    console.log(content);
    return content;
  })
  .then((content) => console.log(content));

let p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 3 * 100);
});

p.then((result) => {
  console.log(result);
  return result * 2;
})
  .then((result) => {
    console.log(result);
    return result;
  })
  .then((result) => console.log(result));
console.log(path.join(__dirname, "../anything"));
