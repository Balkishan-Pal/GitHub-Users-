import React, { useState } from 'react';

const Form = ({ text, findUser, handleText}) => {

	return (
		<form onSubmit={findUser}>
			<input value={text} onChange={handleText} type='text' name='username' />
			<button type='submit'>Find User</button>
		</form>
	);
};

export default Form;