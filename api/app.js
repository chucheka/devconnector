import express from 'express';
import mongoose from 'mongoose';
import passport from 'passport';
import './config/verifyToken';
import userRouter from './routes/user/user';
import profileRouter from './routes/profile/Profile';
import postRouter from './routes/post/post';
const app = express();

mongoose
	.connect('mongodb://localhost/devconnector', {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false
	})
	.then(() => {
		console.log('Connection to mongodb successful');
	})
	.catch((err) => console.log('connection to mongodb failed', err));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const port = 8080;

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Headers', 'Origin,X-Requested-With,Content,Accept,Content-Type,Authorization');
	res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,DELETE,PATCH,OPTIONS');
	next();
});

app.use('/api/v1', userRouter);
app.use('/api/v1', profileRouter);
app.use('/api/v1', postRouter);

app.listen(port, () => {
	console.log(`Server started on http://localhost:${port}/api/v1`);
});

export default app;
