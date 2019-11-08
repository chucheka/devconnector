import mongoose from 'mongoose';
import Profile from '../models/profile/Profile';
import validateProfileInput from '../validator/Profile';
import validateExperienceInput from '../validator/experience';
import validateEducationInput from '../validator/education';

class ProfileController {
	static getByHandle(req, res, next) {
		const errors = {};
		Profile.findOne({ handle: req.params.handle })
			.populate('user', [ 'name', 'avatar' ])
			.then((profile) => {
				if (!profile) {
					errors.noprofile = 'There is no profile for this user';
					return res.status(404).json(errors);
				}
				return res.status(200).json(profile);
			})
			.catch((err) => console.log(err));
	}

	static getAllProfiles(req, res, next) {
		const errors = {};
		Profile.find()
			.populate('user', [ 'name', 'avatar' ])
			.then((profiles) => {
				if (!profiles) {
					errors.noprofile = 'There are no profiles';
					return res.status(404).json(errors);
				}
				res.status(200).json(profiles);
			})
			.catch((err) => res.status(500).json({ message: 'There are no profiles' }));
	}

	static getByUserId(req, res, next) {
		const errors = {};

		//This code block does not work as expectedd
		Profile.findOne({ user: req.params.userId })
			.populate('user', [ 'name', 'avatar' ])
			.then((profile) => {
				if (!profile) {
					errors.noprofile = 'There is no profile for this user';
					return res.status(404).json(errors);
				}
				return res.status(200).json(profile);
			})
			.catch((err) => console.log(err));
	}

	//@ route GET /api/v1/profile
	//@ desc Gets a user profile
	//@ access Private:This is the private route dashboard
	static getProfile(req, res, next) {
		const errors = {};
		Profile.findOne({ user: req.user.userId })
			.then((profile) => {
				if (!profile) {
					errors.noprofile = 'There is no profile for this user';
					res.status(403).json(errors);
				}
				res.status(200).json(profile);
			})
			.catch((err) => console.log(err));
	}

	//@ route POST /api/v1/profile/experience
	//@ desc adds experience to a profile
	//@ access Private
	static addExperience(req, res, next) {
		const { isValid, errors } = validateExperienceInput(req.body);
		if (!isValid) {
			//Return errors from invalid input(s)
			return res.status(400).json({ errors });
		}
		const { userId } = req.user;
		let { title, company, location, from, to, current, description } = req.body;
		Profile.findOne({ user: userId })
			.then((profile) => {
				const newExp = { title, company, location, from, to, current, description };

				profile.experience.unshift(newExp);
				profile
					.save()
					.then((profile) => res.status(201).json(profile))
					.catch((err) => res.status(500).json(err));
			})
			.catch((err) => res.status(500).json(err));
	}
	//@ route POST /api/v1/profile/education
	//@ desc adds education to a profile
	//@ access Private
	static addEducation(req, res, next) {
		const { isValid, errors } = validateEducationInput(req.body);
		if (!isValid) {
			//Return errors from invalid input(s)
			return res.status(400).json({ errors });
		}
		const { userId } = req.user;
		let { school, degree, location, from, to, fieldOfStudy, current, description } = req.body;
		Profile.findOne({ user: userId })
			.then((profile) => {
				const newEducation = { school, degree, location, from, to, fieldOfStudy, current, description };
				profile.education.unshift(newEducation);
				profile
					.save()
					.then((profile) => {
						return res.status(201).json(profile);
					})
					.catch((err) => res.status(500).json(err));
			})
			.catch((err) => rees.status.json(err));
	}
	// Delete experience
	static deleteExperience(req, res, next) {
		const errors = {};
		const { userId } = req.user;
		Profile.findOne({ user: userId })
			.then((profile) => {
				if (profile) {
					if (profile.experience.length > 0) {
						const removeIndex = profile.experience.map((item) => item.id).indexOf(req.params.exp_id);
						profile.experience.splice(removeIndex, 1);
						profile
							.save()
							.then((profile) => res.status(201).json(profile))
							.catch((err) => res.status(404).json(err));
					} else {
						// Response when user has no experience
						errors.noexperience = 'This user has not updated experience';
						return res.status(404).json(errors);
					}
				}
			})
			.catch((err) => res.status(500).json(err));
	}
	// Delete Education
	static deleteEducation(req, res, next) {
		const errors = {};
		const { userId } = req.user;
		Profile.findOne({ user: userId })
			.then((profile) => {
				if (profile) {
					//Response when user has no education
					if (profile.education.length === 0) {
						errors.noeducation = 'This user has not updated education';
						return res.status(404).json(errors);
					} else {
						const removeIndex = profile.education.map((item) => item.id).indexOf(req.params.edu_id);
						profile.education.splice(removeIndex, 1);
						profile
							.save()
							.then((profile) => res.status(201).json(profile))
							.catch((err) => res.status(404).json(err));
					}
				}
			})
			.catch((err) => res.status(500).json(err));
	}
	static createAndUpdateProfile(req, res) {
		const { errors, isValid } = validateProfileInput(req.body);
		if (!isValid) {
			//Return errors from invalid input(s)
			return res.status(400).json({ errors });
		}
		let {
			handle,
			status,
			skills,
			website,
			location,
			company,
			githubusername,
			bio,
			youtube,
			linkedIn,
			facebook,
			twitter,
			instagram
		} = req.body;
		// Get fields
		const profileFields = {};
		const { userId } = req.user;
		profileFields.user = userId;

		if (handle) {
			profileFields.handle = handle;
		}
		if (company) {
			profileFields.company = company;
		}
		if (website) {
			profileFields.website = website;
		}
		if (location) {
			profileFields.location = location;
		}
		if (bio) {
			profileFields.bio = bio;
		}
		if (githubusername) {
			profileFields.githubusername = githubusername;
		}
		if (status) {
			profileFields.status = status;
		}
		// Skills - split into an array
		if (typeof skills !== 'undefined') {
			profileFields.skills = skills.split(',');
		}
		// Social is in its object in model
		profileFields.social = {};

		if (youtube) {
			profileFields.social.youtube = youtube;
		}
		if (facebook) {
			profileFields.social.facebook = facebook;
		}
		if (linkedIn) {
			profileFields.social.linkedIn = linkedIn;
		}
		if (twitter) {
			profileFields.social.twitter = twitter;
		}
		if (instagram) {
			profileFields.social.instagram = instagram;
		}

		Profile.findOne({ user: userId })
			.then((profile) => {
				if (profile) {
					// UPDATE
					Profile.findOneAndUpdate({ user: userId }, { $set: profileFields }, { new: true })
						.then((profile) =>
							res.status(201).json({
								// *** Redirect the user to create a profile
								profile: profile
							})
						)
						.catch((err) => {
							return res.status(500).json({
								error: 'Internal server error'
							});
						});
				} else {
					//Create Profile
					// 1).Check if handle already exist
					Profile.findOne({ handle: profileFields.handle })
						.then((profile) => {
							if (profile) {
								errors.handle = 'Handle already exists';
								return res.status(400).json(errors);
							}
							// 2).Save Profile

							const newProfile = new Profile(profileFields);
							newProfile
								.save()
								.then((profile) => {
									const { userId } = req.user;
									return res.status(201).json({
										profile: profile,
										Id: userId
									});
								})
								.catch((err) => {
									return res.status(500).json({
										error: 'Internal server error'
									});
								});
						})
						.catch((err) => {
							return res.status(500).json({
								error: 'Internal server error'
							});
						});
				}
			})
			.catch((err) => {
				return res.status(500).json({
					error: 'Internal server error'
				});
			});
	}
}

export default ProfileController;
