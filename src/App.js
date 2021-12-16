import React, { useState } from 'react';

import Home from './Components/Menu/Home/Home';
import Speakers from './Components/Menu/Speakes/Speakers';
import Schedule from './Components/Menu/Schedule/Schedule';
import Location from './Components/Menu/Location/Location';
import Blog from './Components/Menu/Blog/Blog';
import Contacts from './Components/Menu/Contacts/Contacts';
import Layout from './Components/Menu/Layout/Layout';
import { Routes, Route } from 'react-router-dom';

import './App.scss';

function App() {
	return (
		<div className="App">
			<Layout>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/speakers" element={<Speakers />} />
					<Route path="/schedule" element={<Schedule />} />
					<Route path="/location" element={<Location />} />
					<Route path="/blog" element={<Blog />} />
					<Route path="/contacts" element={<Contacts />} />
				</Routes>
			</Layout>
		</div>
	);
}

export default App;
