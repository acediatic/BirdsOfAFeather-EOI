import React, { Component, useState } from 'react';
import swal from 'sweetalert';

const axios = require('axios');

const formValidation = (userDetails) => {
	const { firstName, lastName, email } = userDetails;
	const invalidMsg = [];

	const namesRegex = new RegExp('\\w+');
	const isValidFirstName = namesRegex.test(firstName);
	const isValidLastName = namesRegex.test(lastName);

	// matches in format llllddd@aucklanduni.ac.nz where l = letter and d = digit
	const emailRegex = new RegExp('[A-Za-z]{4}\\d{3}@aucklanduni.ac.nz');
	const isValidUoAEmail = emailRegex.test(email);

	if (!isValidFirstName) {
		invalidMsg.push('first name');
	}

	if (!isValidLastName) {
		invalidMsg.push('last name');
	}

	if (!isValidUoAEmail) {
		invalidMsg.push('UoA email');
	}

	const invalidMsgStr = invalidMsg.join(', ');

	swal({
		title: 'Uh Oh!',
		text: `Looks like there's something wrong with your ${invalidMsgStr}! Please double check and try again!`,
		icon: 'error',
		button: 'Here we go again!',
	});

	return invalidMsgStr.length === 0;
};

const submitForm = (userDetails) => {
	let { firstName, lastName, email } = userDetails;

	// remove leading/trailing whitespace
	firstName = firstName.trim();
	lastName = lastName.trim();
	email = email.trim();

	const cleanedUserDetails = { firstName, lastName, email };
	const isValidSubmission = formValidation(cleanedUserDetails);

	if (isValidSubmission) {
		axios({
			method: 'post',
			url: 'https://enosma80mufp0jp.m.pipedream.net',
			data: {
				cleanedUserDetails,
			},
		});
		swal({
			title: 'Details Submitted!',
			text: "Tēnā koe! Cheers! Thanks for your interest! We'll be in touch.",
			icon: 'success',
			button: 'Aww yiss!',
		});
	}
};

function NewsletterForm(props) {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');

	return (
		<form className="newsletter-form">
			<div className="pb-8 control control-expanded field field-grouped">
				<input
					className="input control control-expanded field"
					type="text"
					name="firstName"
					placeholder="First (Preferred) Name&hellip;"
					value={firstName}
					onChange={(e) => {
						setFirstName(e.target.value);
					}}
				/>
				<input
					className="input control control-expanded field"
					type="text"
					name="lastName"
					placeholder="Last Name&hellip;"
					value={lastName}
					onChange={(e) => {
						setLastName(e.target.value);
					}}
				/>
			</div>
			<div className="field-grouped">
				<div className="control control-expanded field">
					<input
						className="input"
						type="email"
						name="email"
						placeholder="Your UoA email&hellip;"
						value={email}
						onChange={(e) => {
							setEmail(e.target.value);
						}}
					/>
				</div>
				<div className="control">
					<button
						className="button button-primary button-block button-shadow"
						type="submit"
						onClick={(e) => {
							// avoids page refresh.
							e.preventDefault();
							submitForm({ firstName, lastName, email });
						}}
					>
						Register Interest
					</button>
				</div>
			</div>
		</form>
	);
}

export default NewsletterForm;
