import React from 'react';
import img1 from '../../../img/Blog/img1.jpg';
import { Typography, Container } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import ForumRoundedIcon from '@mui/icons-material/ForumRounded';
import { typography } from '@mui/system';

function Card() {
	return (
		<div style={{ position: 'relative', paddingBottom: '40px' }}>
			<img style={{ width: '100%' }} src={img1} />
			<div
				style={{
					position: 'absolute',
					top: '135px',
					left: '10px',
					width: '50px',
					padding: '2px 10px',
					backgroundColor: '#ff60ce',
					borderRadius: '4px',
				}}
			>
				<Typography style={{ color: 'white', fontWeight: '800' }}>
					15
				</Typography>
				<p>Jan</p>
			</div>
			<div
				style={{
					marginTop: '-10px',
					padding: '0 8px',
					// backgroundColor: 'blue',
					boxShadow: '0 5px 10px gray ',
				}}
			>
				<Typography
					variant="subtitle2"
					sx={{ fontWeight: '800', padding: '30px 0 10px' }}
				>
					<a className="text" href="" style={{ textDecoration: 'none' }}>
						Google inks pact for new 35-storey office
					</a>
				</Typography>

				<Typography variant="body2" sx={{ fontSize: '12px', p: '0 0 20px 0' }}>
					That dominion stars lights dominion divide years for fourth have don't
					stars is that he earth it first without heaven in place seed it second
					morning saying.
				</Typography>

				<Typography
					variant="body2"
					sx={{
						fontSize: '12px',
						p: '0 0 20px 0',
						color: '#ff60ce',
						cursor: 'pointer',
					}}
				>
					<a>
						<PersonIcon
							sx={{
								position: 'relative',
								top: '3px',
								pt: 0.8,
							}}
						/>
						Travel, Lifestyle
					</a>
					<a
						style={{
							margin: '5px',
							padding: '0 5px',
							borderLeft: '1px solid #303030',
						}}
					>
						<ForumRoundedIcon
							sx={{ position: 'relative', top: '4px', pt: 1 }}
						/>
						Comments
					</a>
				</Typography>
			</div>
		</div>
	);
}

export default Card;
