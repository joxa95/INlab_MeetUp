import React from 'react';
import { Container, TextField, Button } from '@mui/material';
import Grid from '@mui/material/Grid';

import './style.scss';

function Registrate() {
	const [show, setShow] = React.useState(false);

	return (
		<div
			style={{
				height: '100vh',
				width: '100%',
				position: 'fixed',
				top: '0',
				right: '0',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				background: '#343434d1',
			}}
		>
			<Grid container>
				<Grid item xs={0} sm={4} md={4}></Grid>

				<Grid item xs={12} sm={6} md={4}>
					<Container
						style={{
							backgroundColor: '#fff',
							borderRadius: '10px',
							padding: '20px',
							boxShadow: '0 2px 3px 2px blue',
							display: 'flex',
							flexDirection: 'column',
						}}
					>
						<form
						// noValidate autoComplete="off" onSubmit={handleSend}
						>
							<TextField
								// onClick={(e) => setName(e.target.value)}
								variant="standard"
								type="text"
								label="Your name"
								size="small"
								fullWidth
								min="3"
								required
								// value={name}
							/>{' '}
							<br />
							<br />
							<div
								style={{
									width: '100%',
									display: 'flex',
									alignItems: 'center',
								}}
							>
								{/* <div style={{ color: '#111', paddingTop: '18px' }}>+998</div> */}
								<TextField
									type="number"
									required
									variant="standard"
									label="+998"
									disabled
									size="small"
									sx={{ width: '10%' }}
								/>
								<TextField
									type="number"
									required
									variant="standard"
									label="Your number"
									size="small"
									sx={{ width: '90%' }}
								/>
							</div>
							<br />
							<br />
							<TextField
								// onClick={(e) => setEmail(e.target.value)}
								variant="standard"
								type="email"
								label="Your Email"
								size="small"
								fullWidth
								// value={email}
							/>
							<br />
							<br />
							{show ? null : null}
							<Button
								style={{ width: '20%' }}
								variant="contained"
								type="submit"
								size="small"
							>
								Submit
							</Button>
						</form>
					</Container>
				</Grid>
			</Grid>
		</div>
	);
}
export default Registrate;
