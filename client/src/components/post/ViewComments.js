import React from 'react';
import Post from './Post';
import Create from './Create';
import Comment from './Comment';
export default function ViewComments() {
	const getStyle = {
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		marginTop: '20px'
	};
	return (
		<div style={getStyle}>
			<Post show={true} />
			<Create />
			<Post show={false} />
		</div>
	);
}
