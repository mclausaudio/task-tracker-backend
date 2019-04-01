const mongoose = require("mongoose");
//use set function to make debug = true,, makes it so mongoose queries are shown in console.
mongoose.set("debug", true);
//this line of code enables promises and sets the Promise library to native js promises.
mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/task-tracker", {
  keepAlive: true
});

module.exports.User = require("./user");