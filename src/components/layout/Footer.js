import React from 'react';

import SocialLinks from './SocialLinks';
import NavLinks from './NavLinks';

function getCopyright() {
	const year = new Date(Date.now()).getFullYear();
	return `© ${year} Birds of a Feather, all rights reserved`;
}

export default function Footer() {
	return (
		<footer className="site-footer text-light">
			<div className="container">
				<div className="site-footer-inner">
					<NavLinks className="footer-links" />
					{/* <SocialLinks className="footer-social-links" /> */}
					<div className="footer-copyright">{getCopyright()}</div>
				</div>
			</div>
		</footer>
	);
}
