import React from 'react';
import Typography from '@mui/material/Typography';
import Page2 from '../Home/Page5/Page5';
import Map from '../Map/Map';

function Location() {
	return (
		<div>
			<Typography
				sx={{
					backgroundColor: '#0f001b',
					color: '#ffbd00',
					fontSize: '25px',
					fontWeight: '800',
					p: '30px 10px 0',
				}}
				variant="h1"
			>
				LOCATION
			</Typography>

			<Map />
			<Page2 />
		</div>
	);
}

export default Location;
