import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import img1 from '../../../../img/Speacers/img1.jpeg';
import Sass from './Page3.scss';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function ActionAreaCard() {
	return (
		<Card
			sx={{
				width: 150,
				mt: '35px',
				height: '230px',
				backgroundColor: '#0f001b',
				boxShadow: '0 0 0',
			}}
		>
			<Card style={{ height: '150px', position: 'relative' }}>
				<img
					className="image"
					style={{ transition: '1s ease', position: 'absolute' }}
					src={img1}
				/>
				<div className="card_icons">
					<FacebookIcon
						sx={{
							color: '#0004FF',
							m: 0.5,
						}}
					/>
					<TwitterIcon
						sx={{
							color: '#0004FF',
							m: 0.5,
						}}
					/>
					<InstagramIcon
						sx={{
							color: '#0004FF',
							m: 0.5,
						}}
					/>
				</div>
			</Card>

			<CardContent>
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
					Products Designer
				</Typography>
				<Typography
					sx={{
						color: '#fff',
					}}
					variant="subtitle2"
				>
					@Colorlib
				</Typography>
			</CardContent>
		</Card>
	);
}
