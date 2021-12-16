import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Home/Page6/Page6';
import ScrollToTop from './ScrollToTop';
import ToTopIcon from '@mui/icons-material/ArrowCircleUp';
import './Layout.scss';

export default function Layout(props) {
	//  Scroll to top function

	useEffect(() => {
		window.addEventListener('scroll', toggleVisibility);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	const [is_visible, set_visible] = useState(false);

	const toggleVisibility = () => {
		if (window.pageYOffset > 400) {
			set_visible(true);
		} else {
			set_visible(false);
		}
	};

	return (
		<div>
			{/* Auto Scroll on change page */}
			<ScrollToTop />
			{/* Auto Scroll on change page */}
			<Navbar />
			{props.children}
			<Footer />

			{is_visible && (
				<>
					<span onClick={scrollToTop} className="scrolls">
						<ToTopIcon className="scrollUp" sx={{ fontSize: '2.2rem' }} />
					</span>
					<span className="ltx-hex">
						<span className="ltx-hex-inner"></span>
					</span>
				</>
			)}
		</div>
	);
}
