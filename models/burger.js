var orm = require("../config/orm.js");

// create code that will call the ORM functions using burger specific input for the ORM

var burger = {

    all: function(callback) {
        orm.selectAll(function(res){
            callback(res);
        })
    }, 
    create: function(callback, name) {
        orm.insertOne(function(res){
            callback(res);
        }, name);
    },
    update: function(callback, burgerId) {
        orm.updateOne(function(res){
            callback(res);
        }, burgerId);
    }

};

module.exports = burger;