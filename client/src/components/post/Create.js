import React from 'react';

export default function Create() {
	const createStyle = {
		marginTop: '40px',
		maxWidth: '600px',
		width: '80%',
		border: '1px solid #17a2b8',
		height: '200px',
		borderRadius: '5px',
		display: 'flex',
		flexDirection: 'column'
	};
	const headerStyle = {
		width: '100%',
		height: '30px',
		padding: '4px 20px',
		color: '#f8f9fa',
		backgroundColor: '#17a2b8'
	};
	const inputDiv = {
		margin: '10px 20px'
	};
	const inputTxtArea = {
		width: '100%',
		display: 'block',
		marginBottom: '0px',
		height: '100px',
		borderRadius: '5px',
		padding: '6px 10px',
		fontSize: '1rem',
		marginBottom: '2px !important'
	};
	const btn = {
		display: 'inline-block',
		width: '5.4rem',
		padding: '8px 10px',
		textAlign: 'center',
		border: 'none',
		borderRadius: '5px',
		color: '#fff',
		backgroundColor: '#343a40',
		marginTop: '2px !important',
		cursor: 'pointer'
	};
	return (
		<div style={createStyle}>
			<h4 style={headerStyle}>Say Something...</h4>
			<div style={inputDiv}>
				<textarea placeholder="Create Post..." style={inputTxtArea} />
				<br />
				<input type="text" value="Submit" style={btn} />
			</div>
		</div>
	);
}
