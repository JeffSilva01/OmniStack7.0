const express = require('express');
const multer = require('multer');
const uploadConfig = require('./Config/upload');
const PostController = require('./Controller/PostController');
const LikeController = require('./Controller/LikeController');

const routes = new express.Router();
const upload = multer(uploadConfig);

routes.post('/posts', upload.single('image'), PostController.store);
routes.get('/posts', PostController.index);

routes.post('/posts/:id/like', LikeController.store);

module.exports = routes;
