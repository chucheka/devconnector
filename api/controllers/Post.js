import mongoose from 'mongoose';
import Post from '../models/post/post';
import Profile from '../models/profile/Profile';
import validatePostInput from '../validator/post';
class PostController {
	static createPost(req, res, next) {
		const { errors, isValid } = validatePostInput(req.body);

		if (!isValid) {
			return res.status(400).json(errors);
		}
		const { userId } = req.user;
		const { text, name, avatar } = req.body;

		const newPost = new Post({
			text,
			name,
			avatar,
			user: userId
		});

		newPost.save().then((post) => res.json(post));
	}
	static getPosts(req, res, next) {
		Post.find()
			.sort({ date: -1 })
			.then((posts) => res.status(200).json(posts))
			.catch((err) => res.status(404).json(err));
	}
	static getPostById(req, res, next) {
		const errors = {};
		Post.findById({ _id: req.params.postId })
			.then((post) => {
				if (post) {
					return res.status(200).json(post);
				}
				errors.nopostFound = 'No post with id found';
				return res.status(404).json(errors);
			})
			.catch((err) => {
				errors.nopostFound = 'No post with id found';
				return res.status(404).json(errors);
			});
	}
	static async deletePostById(req, res, next) {
		const errors = {};
		const { userId } = req.user,
			{ postId } = req.params;
		Profile.findOne({ user: userId }).then((profile) => {
			Post.findById(postId).then((post) => {
				// CHECK POST OWNER
				if (post.user.toString() !== userId) {
					return res.status(401).json({
						notauthorized: 'User not authorized!!'
					});
				}
				post
					.remove()
					.then(() =>
						res.status(201).json({
							success: true
						})
					)
					.catch((err) =>
						res.status(404).json({
							postnotFound: 'Post not found!!'
						})
					);
			});
		});
	}
	static likePost(req, res, next) {
		const errors = {};
		const { userId } = req.user,
			{ postId } = req.params;
		Profile.findOne({ user: userId }).then((profile) => {
			Post.findById(postId)
				.then((post) => {
					//Check if user has liked this post before
					const check = post.likes.filter((like) => like.user.toString() === userId).length > 0;

					if (check) {
						errors.alreadyLiked = 'You have already liked this post!!';
						return res.status(400).json(errors);
					}

					post.likes.push({ user: userId });
					post.save().then((post) => res.status(201).json(post));
				})
				.catch((err) => {
					errors.postnotFound = 'No post found';
					return res.status(404).json(errors);
				});
		});
	}
	static unlikePost(req, res, next) {
		const errors = {};
		const { userId } = req.user,
			{ postId } = req.params;
		Profile.findOne({ user: userId }).then((profile) => {
			Post.findById(postId)
				.then((post) => {
					//Check if user has liked this post before
					const postIndex = post.likes.findIndex((like) => like.user.toString() === userId);

					if (postIndex < 0) {
						errors.notLikedPost = 'You have not liked this post before!!';
						return res.status(400).json(errors);
					}

					post.likes.splice(postIndex, 1);
					post.save().then((post) => res.status(201).json(post));
				})
				.catch((err) => {
					errors.postnotFound = 'No post found';
					return res.status(404).json(errors);
				});
		});
	}
	static async postComment(req, res, next) {
		const { errors, isValid } = validatePostInput(req.body);
		if (!isValid) {
			return res.status(400).json(errors);
		}
		try {
			const newComment = {
				user: req.user.userId,
				text: req.body.text,
				avatar: req.user.avatar,
				name: req.user.userName
			};
			const post = await Post.findById(req.params.postId);
			post.comments.push(newComment);
			const savedPost = await post.save();
			if (savedPost) {
				res.status(201).json(savedPost);
			} else {
				res.status(400).json({
					postNotsaved: 'Post not saved!!'
				});
			}
		} catch (error) {
			errors.serverError = 'Oooopp!! something broke!!';
			return res.status(500).json(errors);
		}
	}
	static async deleteComment(req, res, next) {
		const errors = {};
		const { postId, commentId } = req.params;
		const { userId } = req.user;
		try {
			const post = await Post.findById(postId);
			if (post) {
				const commentIndex = post.comments.findIndex((comment) => {
					return comment._id.toString() === commentId && comment.user.toString() === userId;
				});
				if (commentIndex >= 0) {
					post.comments.splice(commentIndex, 1);
					const savedPost = await post.save();
					if (savedPost) {
						res.status(201).json(savedPost);
					}
				} else {
					errors.serverError = 'You are forbidden or post does not exist';
					return res.status(401).json(errors);
				}
			}
		} catch (error) {
			errors.postnotFound = ' Post does not exist';
			return res.status(404).json(errors);
		}
	}
}

export default PostController;
