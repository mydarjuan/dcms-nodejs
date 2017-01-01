const express = require('express');
const router = express.Router();
const userBiz = require('../biz/userBiz');
const commonBiz = require('../biz/commonBiz');

router.get('/:userId', function (req, res, next) {
  const userId = req.params.userId;
  userBiz.getUserById(userId).then(data => {
    var user = data.hits.hits.map(item => {
      return item._source
    });
    var resDto = commonBiz.responseBuild(true, '', user[0]);
    res.json(resDto);
  }).catch(reason => {
    console.log(reason);
  });
});

module.exports = router;
