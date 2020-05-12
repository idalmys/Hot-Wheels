var db = require("../models");
const bcrypt = require("bcryptjs");
const { Op } = require("sequelize");

module.exports = function (app) {
  app.post("/members", (req, res) => {
    //console.log('REQ.BODY', req.body);
    db.Customer.findOne({
      where: {
        [Op.or]: [{
          email: req.body.email
        }, {
          driversLicenseNo: req.body.driversLicenseNo
        }]
      }
    })
      .then(function (customer) {
        if (customer) {
          return res.json({
            userExists: true
          })
        } else {
          req.body.password = bcrypt.hashSync(req.body.password);
          var data = req.body;

          db.Customer.create(data).then(function (newCustomer) {
            res.json(newCustomer);  // need newCustomer to get id
          });
        }
      });
  });
};