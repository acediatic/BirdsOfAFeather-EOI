import React from 'react';

import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

export default function DefaultLayout({ children }) {
	return (
		<div className="body-wrap boxed-container">
			<Header />
			<main>{children}</main>
			<Footer />
		</div>
	);
}
