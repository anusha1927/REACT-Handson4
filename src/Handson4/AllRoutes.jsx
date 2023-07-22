import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Students from './Students';
import Contact from './Contact';

const AllRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/students" element={<Students />} />
			<Route path="/contact-us" element={<Contact />} />
		</Routes>
	);
};

export default AllRoutes;
