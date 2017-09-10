var express = require('express');
const Client = require('node-rest-client').Client;
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/load/:ident', function (req, res) {
  
      console.log(req.params)
      var username = 'lidorabo2';
      var apiKey = '83b5ab945e649612b1f96b43fa026ec859e8b49a';
      var fxmlUrl = 'https://flightxml.flightaware.com/json/FlightXML3/';
      var flightNo = 'AF1621';
      flightNo = req.params.ident;
  
      var client_options = {
          user: username,
          password: apiKey
      };
      var client = new Client(client_options);
  
      client.registerMethod('findFlights', fxmlUrl + 'FlightInfoStatus', 'GET');
  
      var findFlightArgs = {
          parameters: {
              ident: flightNo
          }
      };
  
      client.methods.findFlights(findFlightArgs, function (data, response) {
          res.send(data)
      });
  });

module.exports = router;
