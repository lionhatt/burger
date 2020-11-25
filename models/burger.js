// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

const burger = {
    selectAll: function(cb) {
        orm.selectAll("cats", function(res) {
          cb(res);
        });
      },
      // The variables cols and vals are arrays.
      insertOne: function(cols, vals, cb) {
        orm.insertOne("cats", cols, vals, function(res) {
          cb(res);
        });
      },
      updateOne: function(objColVals, condition, cb) {
        orm.updateOne("cats", objColVals, condition, function(res) {
          cb(res);
        });
      }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
