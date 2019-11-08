// import app from '../api/app';
// import chai from 'chai';
// const { should, expect } = chai;
// import request from 'supertest';

// describe('POST /user/signup', () => {
// 	let newUser = {
// 		name: 'Lione Messi',
// 		email: 'lionemessi@gmail.com',
// 		password: 'lione22messi',
// 		password2: 'lione22messi',
// 		avatar: 'gdgffggfgfgg'
// 	};
// 	it.skip('should be able to create new user when required fields are given', (done) => {
// 		request(app)
// 			.post('/api/v1/user/signup')
// 			.send(newUser)
// 			.expect(201)
// 			.then((res) => {
// 				expect(res.body).to.have.be('object');
// 				expect(res.body).to.have.property('name', 'Lione Messi');
// 				expect(res.body).to.have.property('email', 'lionemessi@gmail.com');
// 				expect(res.body.password).to.not.equal('lione22messi');
// 				expect(res.body).to.have.property('name');
// 				done();
// 			})
// 			.catch((err) => {
// 				done(err);
// 			});
// 	});
// 	it('it should not create user if user email exists', (done) => {
// 		newUser.email = 'lionemessi@gmail.com';
// 		request(app)
// 			.post('/api/v1/user/signup')
// 			.send(newUser)
// 			.expect(400)
// 			.then((res) => {
// 				expect(res.body.email).to.equal('Email already exists!!');
// 				done();
// 			})
// 			.catch((err) => {
// 				done(err);
// 			});
// 	});
// 	it('it should not allow empty and invalid inputs', (done) => {
// 		newUser.name = '';
// 		request(app)
// 			.post('/api/v1/user/signup')
// 			.send(newUser)
// 			.expect(500)
// 			.then((res) => {
// 				done();
// 			})
// 			.catch((err) => {
// 				done(err);
// 			});
// 	});
// });

// describe('POST /user/signin', () => {
// 	let user;
// 	beforeEach(() => {
// 		user = {
// 			email: 'ryanucheka22@gmail.com',
// 			password: 'chike22ucheka'
// 		};
// 	});
// 	it('User should be able to signin', (done) => {
// 		request(app)
// 			.post('/api/v1/user/signin')
// 			.send(user)
// 			.expect(200)
// 			.then((res) => {
// 				expect(res.body.success).to.equal('Login successfully');
// 				expect(res.body).to.have.property('token');
// 				done();
// 			})
// 			.catch((err) => {
// 				done(err);
// 			});
// 	});
// 	it('it should not login user with wrong credentials', (done) => {
// 		user.email = 'johndoe@gmail.com';
// 		user.password = 'chike22ucheka';
// 		request(app)
// 			.post('/api/v1/user/signin')
// 			.send(user)
// 			.expect(401)
// 			.then((res) => {
// 				expect(res.body.message).to.equal('Invalid credentials');
// 				done();
// 			})
// 			.catch((err) => {
// 				done(err);
// 			});
// 	});
// });
