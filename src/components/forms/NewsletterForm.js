import React, { Component, useState } from 'react';
import classnames from 'classnames';

const axios = require('axios');

const submitForm = (userDetails) => {
	axios({
		method: 'post',
		url: 'https://enosma80mufp0jp.m.pipedream.net',
		data: {
			userDetails,
		},
	});
};

function NewsletterForm(props) {
	const { className, submit = 'Submit' } = props;
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');

	return (
		<form
			className={classnames(
				'newsletter-form field field-grouped is-revealing',
				className
			)}
		>
			<div className="control control-expanded">
				<input
					className="input"
					type="email"
					name="email"
					placeholder="Your best email&hellip;"
				/>
			</div>
			<div className="control">
				<button
					className="button button-primary button-block button-shadow"
					type="submit"
					onClick={() => submitForm({ firstName, lastName, email })}
				>
					Register Interest
				</button>
			</div>
		</form>
	);
}

export default NewsletterForm;
