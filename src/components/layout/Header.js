import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { setupHeaderBg } from '../../assets/js/main';
import Logo from './Logo';

const Header = (props) => {
	const { title } = props;
	// Runs once, equivalent to componentDidMount()
	useEffect(() => {
		setupHeaderBg();
	}, []);

	return (
		<header className="site-header">
			<div className="container">
				<div className="site-header-large-bg">
					<span />
				</div>
				<div className="site-header-inner">
					<div className="brand header-brand">
						<h1 className="m-0">
							<Link to="/">
								<Logo /> {title}
							</Link>
						</h1>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
