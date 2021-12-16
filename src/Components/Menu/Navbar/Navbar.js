import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import './nav.scss';
import HomeIcon from '@mui/icons-material/Home';
import ListAltIcon from '@mui/icons-material/ListAlt';
import SpeakersIcon from '@mui/icons-material/ConnectWithoutContact';
import ContactIcon from '@mui/icons-material/PermContactCalendar';
import LocationIcon from '@mui/icons-material/LocationOn';
import BlogIcon from '@mui/icons-material/StickyNote2';
import { useEffect, useRef } from 'react';

import { Link } from 'react-router-dom';
const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: prop => prop !== 'open' })(
	({ theme, open }) => ({
		flexGrow: 1,
		padding: theme.spacing(3),
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		marginLeft: `-${drawerWidth}px`,
		...(open && {
			transition: theme.transitions.create('margin', {
				easing: theme.transitions.easing.easeOut,
				duration: theme.transitions.duration.enteringScreen,
			}),
			marginLeft: 0,
		}),
	})
);

const AppBar = styled(MuiAppBar, {
	shouldForwardProp: prop => prop !== 'open',
})(({ theme, open }) => ({
	transition: theme.transitions.create(['margin', 'width'], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	...(open && {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: `${drawerWidth}px`,
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
	}),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	padding: theme.spacing(0, 1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
	justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {
	const theme = useTheme();
	const [open, setOpen] = React.useState(false);

	let menuRef = useRef();

	useEffect(() => {
		document.addEventListener('mousedown', event => {
			if (!menuRef.current.contains(event.target)) {
				setOpen(false);
			}
		});
	});

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (
		<Box ref={menuRef} sx={{ display: 'flex' }}>
			<CssBaseline />
			<AppBar
				color="success"
				position="fixed"
				open={open}
				// onClose={handleDrawerClose}
			>
				<Toolbar sx={{ backgroundColor: '#4c4c4c' }}>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						onClick={handleDrawerOpen}
						edge="start"
						sx={{ mr: 2, ...(open && { display: 'none' }) }}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="subtitle2" noWrap component="div">
						MENU
					</Typography>
				</Toolbar>
			</AppBar>

			<Drawer
				sx={{
					width: drawerWidth,
					flexShrink: 0,
					'& .MuiDrawer-paper': {
						width: drawerWidth,
						boxSizing: 'border-box',
						backgroundColor: '#4c4c4c',
					},
				}}
				onClose={handleDrawerClose}
				variant="persistent"
				anchor="left"
				open={open}
			>
				<DrawerHeader>
					<IconButton sx={{ color: 'white' }} onClick={handleDrawerClose}>
						{theme.direction === 'ltr' ? (
							<ChevronLeftIcon />
						) : (
							<ChevronRightIcon />
						)}
					</IconButton>
				</DrawerHeader>
				<Divider />
				<List
					sx={{
						display: 'flex',
						flexDirection: 'column',
					}}
				>
					<Link className="link" to="/">
						<HomeIcon className="icons" /> Home
					</Link>
					<Link className="link" to="/speakers">
						<SpeakersIcon className="icons" /> Speakers
					</Link>
					<Link className="link" to="/schedule">
						<ListAltIcon className="icons" /> Schedule
					</Link>
					<Link className="link" to="/location">
						<LocationIcon className="icons" /> Location
					</Link>
					<Link className="link" to="/blog">
						<BlogIcon className="icons" /> Blog
					</Link>
					<Link className="link" to="/contacts">
						<ContactIcon className="icons" /> Contacts
					</Link>
				</List>
				<Divider />
			</Drawer>
			<Main style={{ padding: '0' }} open={open}>
				<DrawerHeader />
			</Main>
		</Box>
	);
}
