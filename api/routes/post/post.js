import express from 'express';
import PostController from '../../controllers/Post';
import verifyToken from '../../config/verifyToken';
const router = express.Router();
//@ route GET /api/v1/post
//@ desc Get all posts
//@ access Public
router.get('/post', PostController.getPosts);
//@ route GET /api/v1/post/:postId
//@ desc Get a post
//@ access Public
router.get('/post/:postId', PostController.getPostById);
//@ route POST /api/v1/post
//@ desc Create New Post
//@ access Private
router.post('/post', verifyToken, PostController.createPost);
//@ route DELETE /api/v1/post/:postId
//@ desc DELETE a post
//@ access Private
router.delete('/post/:postId', verifyToken, PostController.deletePostById);
//@ route POST /api/v1/like/:postId
//@ desc LIKE a post
//@ access Public
router.post('/like/:postId', verifyToken, PostController.likePost);
//@ route POST /api/v1/unlike/:postId
//@ desc unLIKE a post
//@ access Public
router.post('/unlike/:postId', verifyToken, PostController.unlikePost);
//@ route comment /api/v1/comment
//@ desc Add New comment
//@ access Private
router.post('/comment/:postId', verifyToken, PostController.postComment);
//@ route comment /api/v1/comment
//@ desc Add New comment
//@ access Private
router.delete('/comment/:postId/:commentId', verifyToken, PostController.deleteComment);
export default router;
