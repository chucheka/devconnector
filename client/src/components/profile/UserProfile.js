import React from 'react';
import User from '../../img/user.png';
import facebook from '../../img/facebook.png';
import instagram from '../../img/instagram.png';
import youtube from '../../img/youtube.png';
import twitter from '../../img/twitter.png';
import linkedin from '../../img/linkedin.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from '../profile/UserProfile.module.css';
export default function UserProfile() {
	return (
		<section className={styled.section}>
			<div className={styled.profile}>
				<div className={styled.jumbotron}>
					<img alt="image here" className={styled.user} src={User} />
					<div className={styled.info}>
						<span>John Doe</span>
						<br />
						<small className={styled.small}>Developer at Microsoft</small>
						<br />
						<small className={styled.location}>Stevens, Houston</small>
						<span className={styled.social}>
							<img src={youtube} width="20px" height="20px" />
							<img src={facebook} width="20px" height="20px" />
							<img src={twitter} width="20px" height="20px" />
							<img src={instagram} width="20px" height="20px" />
							<img src={linkedin} width="20px" height="20px" />
						</span>
					</div>
				</div>
				<div className={styled.summary}>
					<div>
						<h3>John's Bio</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quae iusto quas. Illum corrupti
							dolor tempora doloremque doloribus iusto corporis accusamus temporibus blanditiis, animi et
							ducimus mollitia rem quo at?
						</p>
					</div>
					<div className={styled.skills}>
						<h3>Skill Set</h3>
						<ul>
							<li>
								<FontAwesomeIcon icon="check" /> HTML
							</li>
							<li>
								<FontAwesomeIcon icon="check" /> CSS
							</li>
							<li>
								<FontAwesomeIcon icon="check" /> JAVSCRIPT
							</li>
							<li>
								<FontAwesomeIcon icon="check" /> POSTGRESQL
							</li>
						</ul>
					</div>
				</div>
				<div className={styled.details}>
					<div className={styled.experience}>
						<h3>Experience</h3>
						<ul>
							<li>
								<h4>Microsoft</h4>
								<small>Oct 2011 - Current</small>
								<br />
								<small>
									<span className={(styled.highlight, styled.position)}>Position:</span> Senior
									Developer
								</small>
								<p className={styled.description}>
									<span className={styled.highlight}>Description:</span>{' '}
									<span className={styled.text}>
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quae iusto quas.
										Illum corrupti dolor tempora doloremque doloribus iusto corporis at?
									</span>
								</p>
							</li>
							<li>
								<h4>Andela Ng</h4>
								<small>Oct 2011 - Current</small>
								<br />
								<small>
									<span className={(styled.highlight, styled.position)}>Position:</span> Senior
									Developer
								</small>
								<p className={styled.description}>
									<span className={styled.highlight}>Description:</span>{' '}
									<span className={styled.text}>
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quae iusto quas.
										Illum corrupti dolor tempora doloremque doloribus iusto corporis at?
									</span>
								</p>
							</li>
						</ul>
					</div>
					<div className={styled.experience}>
						<h3>Education</h3>
						<ul>
							<li>
								<h4>Federal University of Technology Owerri</h4>
								<small>Oct 2010 - Jan 2015</small>
								<br />
								<small>
									<span className={(styled.highlight, styled.position)}>Degree:</span> Bachelor of
									Engineering
								</small>
								<br />
								<small>
									<span className={(styled.highlight, styled.position)}>Field Of Study:</span>{' '}
									<span className={styled.text}>Electrical Electronics Enginering</span>
								</small>
								<p className={styled.description}>
									<span className={styled.highlight}>Description:</span>{' '}
									<span className={styled.text}>
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quae iusto quas.
										Illum corrupti dolor tempora doloremque doloribus iusto corporis at?
									</span>
								</p>
							</li>
						</ul>
					</div>
				</div>
				<div className={styled.github}>
					<h4>Latest GitHub Repos</h4>
					<div className={styled.repos}>
						<div className={styled.title}>
							<span>Repository One</span>
							<br />
							<small>Repository Description</small>
						</div>
						<div className={styled.commend}>
							<span className={styled.stars}>stars 44</span>
							<span className={styled.watchers}>watchers 44</span>
							<span className={styled.forks}>forks 44</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
