import express from 'express';
import authRouter from './routes/auth/user';
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const port = process.env.PORT || 8080;

app.use('/api/v1', authRouter);
app.listen(port, () => {
	console.log(`Server started on http://localhost:${port}/api/v1`);
});

export default app;
