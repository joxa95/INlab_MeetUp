import React from 'react';
import Map from '../Map/Map';
import Typography from '@mui/material/Typography';

function Contacts() {
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
				CONTACT US
			</Typography>
			<Map />
		</div>
	);
}

export default Contacts;
