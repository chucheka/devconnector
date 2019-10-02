import express from 'express';

const router = express.Router();

router.get('/users', (req, res) => {
	res.status(200).json({
		message: 'Welcome to user rouetre'
	});
});

export default router;
