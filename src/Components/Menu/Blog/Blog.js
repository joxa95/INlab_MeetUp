import React from 'react';
import { Typography, Container } from '@mui/material';
import './style.scss';
import Page1 from './Page1/Page1';
import Page2 from './Page2/Page2';

function Blog() {
	return (
		<div
			style={{
				padding: '15px 10px 40px 10px',
				backgroundColor: '#0f001b',
			}}
		>
			<Typography
				variant="h4"
				sx={{ color: '#ffbd00', fontWeight: '800', pb: '20px' }}
			>
				BLOG
			</Typography>

			<Page1 />
			<Page2 />
		</div>
	);
}

export default Blog;
