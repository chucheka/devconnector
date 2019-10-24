import React from 'react';
import facebook from '../../img/facebook.png';
import instagram from '../../img/instagram.png';
import youtube from '../../img/youtube.png';
import twitter from '../../img/twitter.png';
import linkedin from '../../img/linkedin.png';
import '../profile/CreateProfile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

export default function CreateProfile() {
	const container = {
		display: 'flex',
		justifyContent: 'center',
		width: '100%'
	};
	const subContainer = {
		width: '80%',
		maxWidth: '660px',
		display: 'flex',
		flexDirection: 'column'
	};
	return (
		<div style={container}>
			<div style={subContainer}>
				<div className="headline">
					<h3>Create Profile</h3>
					<small>Fill in the fields,lets create your profile</small>
				</div>
				<small>* required fields</small>
				<form>
					<div className="input-field">
						<input type="text" placeholder="*Profile handle" />
						<br />
						<small>A unique handle for your profile url</small>
					</div>
					<div className="input-field">
						<input type="text" placeholder="*Professional Status" />
						<br />
						<small>Give us an idea of where your are in your career</small>
					</div>
					<div className="input-field">
						<input type="text" placeholder="*Company" />
						<br />
						<small>Your company or one worked for</small>
					</div>
					<div className="input-field">
						<input type="text" placeholder="*Website" />
						<br />
						<small>Could be your own or company website</small>
					</div>
					<div className="input-field">
						<input type="text" placeholder="*Location" />
						<br />
						<small>Your city or state location</small>
					</div>
					<div className="input-field">
						<input type="text" placeholder="*Skills" />
						<br />
						<small>Please in comma separatedlist (e.g HTML,CSS,PYTHON)</small>
					</div>
					<div className="input-field">
						<input type="text" placeholder="*Image" />
						<br />
						<small>Upload an image</small>
					</div>
					<div className="input-field">
						<input type="text" placeholder="*Github Username" />
						<br />
						<small>If you want your recent repos and Github link included in profile</small>
					</div>
					<div>
						<textarea type="text" placeholder="*A short bio of yourself" />
						<br />
						<small>Tell us a little about yourself</small>
					</div>
					<div className="addlinks">
						<span>Add social network links</span> <span>Optional</span>
					</div>
					<div>
						<div className="social-field">
							<i>
								<img src={twitter} />
							</i>
							<input type="text" placeholder="Twitter profile url" />
						</div>
						<div className="social-field">
							<i>
								<img src={facebook} />
							</i>
							<input type="text" placeholder="Facebook profile url" />
						</div>
						<div className="social-field">
							<i>
								<img src={youtube} />
							</i>
							<input type="text" placeholder="Youtube profile url" />
						</div>
						<div className="social-field">
							<i>
								<img src={linkedin} />
							</i>
							<input type="text" placeholder="LinkedIn profile url" />
						</div>
						<div className="social-field">
							<i>
								<img src={instagram} />
							</i>
							<input type="text" placeholder="Instagram profile url" />
						</div>
					</div>
					<input className="btn" type="submit" placeholder="Submit" />
				</form>
			</div>
		</div>
	);
}
