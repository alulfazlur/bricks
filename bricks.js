const async = require("async");
const myObj = {
  paralel: async.parallel(
    {
      task1: function (callback) {
        setTimeout(function () {
          console.log("Task One");
          callback(null, 1);
        }, 200);
      },
      task2: function (callback) {
        setTimeout(function () {
          console.log("Task Two");
          callback(null, 2);
        }, 100);
      },
    },
    function (err, results) {
      console.log(results);
    }
  ),
  series: async.series(
    {
      1: function (callback) {
        setTimeout(function () {
          console.log("Task 1");
          callback(null, "one");
        }, 200);
      },
      2: function (callback) {
        setTimeout(function () {
          console.log("Task 2");
          callback(null, "two");
        }, 300);
      },
      3: function (callback) {
        setTimeout(function () {
          console.log("Task 3");
          callback(null, "three");
        }, 100);
      },
    },
    function (err, results) {
      console.log(results);
    }
  ),
};
