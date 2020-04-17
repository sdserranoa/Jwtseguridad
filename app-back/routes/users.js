var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/postUser', function (req, res, next) {
  Mongolib.getDatabase(db => {
    Mongolib.postUser(req.body, db, docs => {
      res.send(docs);
    })
  })
});

module.exports = router;
