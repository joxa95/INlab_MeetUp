import React from 'react';
import Page1 from './Page1/Page1/Page1';
import Page2 from './Page2/Page2';
import Page3 from './Page3/Page3';
import Page4 from './Page4/Page4';
import Page5 from './Page5/Page5';
import Map from '../Map/Map';

function Home() {
	return (
		<div>
			<Page1 />
			<Page2 />
			<Page3 />
			<Page4 />
			<Page5 />
			<Map />
		</div>
	);
}

export default Home;
