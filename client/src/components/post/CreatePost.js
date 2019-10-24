import React from 'react';

import Post from './Post';
import Create from './Create';

export default function CreatePost() {
	const getStyle = {
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		marginTop: '20px'
	};
	return (
		<div style={getStyle}>
			<Create />
			<Post show={true} />
		</div>
	);
}
