import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Nav = () => {
	return (
		<nav>
			<div>
				<Link to="/" className="link">
					Home
				</Link>
			</div>
			<div>
				<Link to="/students" className="link">
					Students
				</Link>
			</div>
			<div>
				<Link to="/contact-us" className="link">
					Contact Us
				</Link>
			</div>
		</nav>
	);
};

export default Nav;
