var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.

router.get("/", function(req, res) {
    res.redirect("/burgers");
  });

router.get("/burgers", function(req, res) {
  burger.all(function(data){
    // console.log(data);
    res.render("index", { myName: "Ilana's", burgerData: data  });
});
});

router.post("/burgers/create", function(req, res) {
  // console.log(req.body);
  burger.create(function(data) {
    res.redirect("/burgers");
  }, req.body.name);
})

router.put("/burgers/:id", function(req, res) {
  console.log("req.params:",req.params.id);
  burger.update(function(data) {
    // res.redirect("/burgers");
    res.sendStatus(200);
  }, req.params.id);

})
  

// export the router at the end of the file
module.exports = router;