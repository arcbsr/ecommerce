const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');

router.get('/all',blogController.blog_index);
router.get('/:id',blogController.blog_get);
module.exports = router;