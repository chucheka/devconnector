import React from 'react';
import User from '../../img/user.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Post({ show }) {
	const postStyle = {
		marginTop: '20px',
		padding: '10px 20px',
		maxWidth: '600px',
		width: '80%',
		border: '1px solid #17a2b8',
		height: '210px',
		borderRadius: '5px',
		display: 'flex'
	};
	const littleBio = {
		marginRight: '10px',
		textAlign: 'center'
	};
	const paraText = {
		fontSize: '14px',
		marginBottom: '10px'
	};
	const btnLike = {
		width: '3.6rem',
		display: 'inline-block',
		padding: '6px',
		textAlign: 'center',
		border: 'none',
		borderRadius: '5px',
		color: '#17a2b8',
		backgroundColor: '#f8f9fa',
		marginRight: '5px',
		cursor: 'pointer'
	};
	const btnUnlike = {
		color: '#343a40',
		width: '3.6rem',
		display: 'inline-block',
		padding: '6px',
		textAlign: 'center',
		border: 'none',
		borderRadius: '5px',
		backgroundColor: '#f8f9fa',
		marginRight: '5px',
		cursor: 'pointer'
	};
	const specialColor = {
		color: '#343a40',
		fontWeight: 'bold'
	};
	const getStyle = {
		display: !show ? 'none' : 'inline-block',
		textDecoration: 'none',
		color: '#f8f9fa',
		backgroundColor: '#17a2b8',
		border: 'none',
		fontSize: '14px',
		borderRadius: '5px',
		padding: '8px 0px',
		marginTop: '5px',
		width: '6.2rem',
		textAlign: 'center',
		cursor: 'pointer'
	};
	return (
		<div style={postStyle}>
			<div style={littleBio}>
				<img src={User} width="100px" height="100px" />
				<br />
				<span>John Doe</span>
			</div>
			<div>
				<p style={paraText}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis repellendus iste, possimus quas
					voluptatum at assumenda voluptatem ullam laudantium cupiditate officia neque dignissimos nisi
					voluptatibus soassumenda voluptatem ullam laudantium cupiditate officia neque dignissimos nisi
					voluptatibus s....
				</p>
				<div>
					<span style={btnLike}>
						<FontAwesomeIcon icon="thumbs-up" /> <span style={specialColor}>4</span>
					</span>
					<span style={btnUnlike}>
						<FontAwesomeIcon icon="thumbs-down" />
					</span>
					<span style={getStyle}>comments</span>
				</div>
			</div>
		</div>
	);
}
