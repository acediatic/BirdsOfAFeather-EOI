import React, { useEffect } from 'react';
import { setupScrollReveal } from '../../assets/js/main.js';
import HeroIllustration from './HeroIllustration';

import EoIForm from '../forms/EoIForm';

function Hero(props) {
	useEffect(() => {
		setupScrollReveal();
	}, []);

	return (
		<section className="hero">
			<div className="container">
				<div className="hero-inner">
					<div className="hero-copy">
						<div className="container-sm">
							<h1 className="hero-title h2-mobile mt-0 is-revealing">
								Birds of a Feather
							</h1>
							<p className="hero-paragraph is-revealing">
								A proposed <i>new club</i> at the <b>University of Auckland.</b>
							</p>
							<p className="hero-paragraph is-revealing">
								If you're interested in being a founding member of the club,
								please register your interest below. For more information, visit
								our <a href="/about">about page</a>
							</p>
						</div>

						<EoIForm className="hero-form" />
					</div>

					<div className="hero-illustration">
						<HeroIllustration />
					</div>
				</div>
			</div>
		</section>
	);
}

export default Hero;
