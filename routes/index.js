var express = require('express');
var router = express.Router();
var todosCtrl = require('../controllers/todos')
/* GET home page. */
router.get('/', todosCtrl.index);
router.post('/', hasInfo, todosCtrl.create);

router.delete('/:id', todosCtrl.deleteTodo);

function hasInfo(req, res, next) {
    if (req.body.todo !== '') return next();
    res.redirect('back');
}

module.exports = router;
