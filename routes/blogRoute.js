const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');

router.get('/all',blogController.blog_list);
router.get('/:id',blogController.blog_get);
router.post('/all',blogController.blog_list);
module.exports = router;