import React from 'react';
import Layout from '../layouts/DefaultLayout';

export default function ContactPage() {
	return (
		<Layout>
			<article className="entry">
				<div className="container">
					<div className="entry-inner">
						<div className="entry-content">
							<div className="container-sm">
								<header className="entry-header">
									<h1 className="entry-title">Contact</h1>
								</header>

								<div className="entry-body">
									<p>
										For any questions or more information, email{' '}
										<a href="mailto:asin473@aucklanduni.ac.nz">
											<b>Adam Sinclair.</b>
										</a>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</article>
		</Layout>
	);
}
