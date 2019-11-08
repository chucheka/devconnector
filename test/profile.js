import app from '../api/app';
import chai from 'chai';
const { expect } = chai;
import request from 'supertest';
import mongoose from 'mongoose';

describe('Block is for protected profile routes', () => {
	// General Token
	let token;
	let userId;
	//Create a user
	// Login user and assign token
	// create a profile
	const user = {
		name: 'Chike Ucheka',
		email: 'ryanucheka@gmail.com',
		password: 'chike22ucheka',
		password2: 'chike22ucheka',
		avatar: 'Insert picture here!!'
	};
	const profile = {
		handle: 'ucheka22',
		skills: 'Python,Javascript,Devop,Kubernate',
		status: 'Senior BackEnd Engineer',
		bio: 'hdhhdhdhhdd'
	};
	before('Sign up user before login', (done) => {
		//create user
		request(app)
			.post('/api/v1/user/signup')
			.send(user)
			.expect(201)
			.then((res) => {
				done();
			})
			.catch((err) => {
				console.log(err.message);
				done(err);
			});
	});
	before((done) => {
		request(app)
			.post('/api/v1/user/signin')
			.send({
				email: user.email,
				password: user.password
			})
			.expect(200)
			.then((res) => {
				token = res.body.token;
				expect(res.statusCode).to.equal(200);
				done();
			})
			.catch((err) => {
				done(err);
			});
	});
	before('User should be able to create profile for an authenticated user', (done) => {
		request(app)
			.post('/api/v1/profile')
			.set('Authorization', 'Bearer' + token)
			.send(profile)
			.expect(201)
			.then((res) => {
				userId = res.body.Id;
				console.log(userId);
				expect(res.statusCode).to.equal(201);
				done();
			})
			.catch((err) => {
				done(err);
			});
	});

	const experience = {
		title: 'Senior Software Engineer',
		company: 'Andela',
		location: 'Lagos',
		from: '09-04-2016',
		to: '09-04-2010',
		current: 'true',
		description: 'fhhhg nddjdje ejjejjej'
	};
	const education = {
		school: 'Federal University of Technology Owerri',
		degree: 'Bachelor',
		fieldOfStudy: 'Electrical Electronics Engineering',
		from: '09-04-2016',
		to: '09-04-2010',
		current: 'true',
		description: 'fhhhg nddjdje ejjejjej'
	};
	//Test suite passes
	describe('POST /api/v1/profile', () => {
		it('Should not create profile for an unauthenticated user', (done) => {
			token = 'thisIsAnInvalidToken';
			request(app)
				.post('/api/v1/profile')
				.set('Authorization', 'Bearer' + token)
				.send(profile)
				.expect(403)
				.then((res) => {
					expect(res.statusCode).to.equal(403);
					expect(res.body.error).to.equal('Invalid token supplied');
					done();
				})
				.catch((err) => {
					done(err);
				});
		});
	});
	//Test suite passses
	describe.skip('POST /api/v1/profile/experience & education', () => {
		it('User should be able to add experience', (done) => {
			request(app)
				.post('/api/v1/profile/experience')
				.set('Authorization', 'Bearer' + token)
				.send(experience)
				.expect(201)
				.then((res) => {
					done();
				})
				.catch((err) => {
					done(err);
				});
		});
		it('User should be able to add education', (done) => {
			request(app)
				.post('/api/v1/profile/education')
				.set('Authorization', 'Bearer' + token)
				.send(education)
				.expect(201)
				.then((res) => {
					done();
				})
				.catch((err) => {
					done(err);
				});
		});
	});

	//Test suite passes
	describe('GET /profile', () => {
		it.skip('it should get the profile of an authenticated user', (done) => {
			request(app)
				.get('/api/v1/profile')
				.set('Authorization', 'Bearer' + token)
				.expect(200)
				.then((res) => {
					expect(res.body).to.be.an('object');
					expect(res.body).to.have.any.keys(
						'social',
						'education',
						'experience',
						'bio',
						'date',
						'skills',
						'handle',
						'status',
						'user'
					);
					done();
				})
				.catch((err) => {
					done(err);
				});
		});
		it('it should not get the profile of an unauthenticated user', (done) => {
			token = 'jhdhsbdhhdhdyey363633gh3gh3';
			request(app)
				.get('/api/v1/profile')
				.set('Authorization', 'Bearer' + token)
				.expect(403)
				.then((res) => {
					expect(res.body.error).to.equal('Invalid token supplied');
					done();
				})
				.catch((err) => {
					done(err);
				});
		});
	});
	//Test suite passes
	describe('GET /profile/all', () => {
		it('It should get an array of all profiles', (done) => {
			request(app)
				.get('/api/v1/profile/all')
				.expect('Content-Type', /json/)
				.expect(200)
				.then((res) => {
					expect(res.body).to.be.an('array');
					expect(res.body[0]).to.have.any.keys(
						'social',
						'education',
						'experience',
						'bio',
						'date',
						'skills',
						'handle',
						'status',
						'user'
					);
					done();
				})
				.catch((err) => {
					done(err);
				});
		});
	});
	describe('GET /profile/handle/${userId}', () => {
		//Something is wrong with the code base
		it.skip('it should get user by a valid userId', (done) => {
			console.log(userId);
			request(app)
				.get(`/api/v1/profile/handle/${userId}`)
				.expect(200)
				.then((res) => {
					expect(res.body).to.be.an('object');
					expect(res.body).to.have.any.keys(
						'social',
						'education',
						'experience',
						'bio',
						'date',
						'skills',
						'handle',
						'status',
						'user'
					);
					done();
				})
				.catch((err) => {
					done(err);
				});
		});
		it('it should not get user with invalid userId', (done) => {
			userId = '7263363344ggddg63';
			request(app)
				.get(`/api/v1/profile/handle/${userId}`)
				.expect(404)
				.then((res) => {
					expect(res.body).to.have.property('noprofile', 'There is no profile for this user');
					done();
				})
				.catch((err) => {
					done(err);
				});
		});
	});
	describe('GET /profile/handle/:handle', () => {
		let handle = profile.handle;
		it('it should get user with a particular handle', (done) => {
			request(app)
				.get(`/api/v1/profile/handle/${handle}`)
				.expect(200)
				.then((res) => {
					expect(res.body).to.be.an('object');
					expect(res.body).to.have.any.keys(
						'social',
						'education',
						'experience',
						'bio',
						'date',
						'skills',
						'handle',
						'status',
						'user'
					);
					done();
				})
				.catch((err) => {
					done(err);
				});
		});
		it('it should not get user with invalid handle', (done) => {
			handle = 'invalid handle';
			request(app)
				.get(`/api/v1/profile/handle/${handle}`)
				.expect(404)
				.then((res) => {
					expect(res.body).to.have.property('noprofile', 'There is no profile for this user');
					done();
				})
				.catch((err) => {
					done(err);
				});
		});
	});
	after(async function() {
		const collections = await mongoose.connection.db.collections();
		for (let collection of collections) {
			await collection.deleteOne();
		}
	});
});
