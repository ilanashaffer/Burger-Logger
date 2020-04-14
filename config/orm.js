var connection = require("../config/connection.js");

// create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database


var orm = {

    selectAll: function(handleData) {
        connection.query('SELECT * FROM burgers', function(err, result) {
            if (err) throw err;
            handleData(result);
        });
    },
    insertOne: function(handleData, name) {
        connection.query('INSERT INTO burgers SET ?', { burger_name: name }, function(err, result) {
            if (err) throw err;
            handleData(result);
        });
    },
    updateOne: function(handleData, burgerId) {
        connection.query("UPDATE burgers SET ? WHERE ?", [{devoured: true},{id: burgerId}], function(err, result) {
            if (err) throw err;
            handleData(result);
        });
    }
    
};

module.exports = orm;