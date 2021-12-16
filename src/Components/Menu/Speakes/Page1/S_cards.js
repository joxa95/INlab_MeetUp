import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import img1 from '../../../../img/Speacers/img1.jpeg';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import './card.scss';

export default function ActionAreaCard() {
	return (
		<Card
			sx={{
				borderRadius: '0',
				backgroundColor: '#0f001b',
				pt: 4,
				boxShadow: '0',
			}}
		>
			<CardContent
				sx={{
					height: '20%',
					// backgroundColor: 'gray',
					p: 0,
					mt: '10px',
				}}
			>
				<img src={img1} style={{ width: '100%' }} />
				<div className="card_icon">
					<FacebookIcon
						className="icon"
						sx={{
							color: '#ff60ce',
							m: 0.5,
						}}
					/>
					<TwitterIcon
						className="icon"
						sx={{
							color: '#ff60ce',
							m: 0.5,
						}}
					/>
					<InstagramIcon
						className="icon"
						sx={{
							color: '#ff60ce',
							m: 0.5,
						}}
					/>
				</div>
			</CardContent>
			<Typography
				sx={{
					color: '#ffbd00',
					fontSize: '16px',
					fontWeight: '800',
				}}
				variant="h1"
			>
				Marcus Down
			</Typography>
			<Typography
				sx={{
					color: '#fff',
					// fontSize: '16px',
					// fontWeight: '800',
					lineHeight: 2,
				}}
				variant="subtitle2"
			>
				Products Designer{' '}
				<span style={{ color: '#9B9EAC' }}>&nbsp; @Colorlib</span>
			</Typography>
		</Card>
	);
}
