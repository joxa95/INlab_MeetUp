import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function TabsFor() {
	const [value, setValue] = React.useState(2);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Tabs
			color="primary"
			value={value}
			onChange={handleChange}
			aria-label="disabled tabs example"
		>
			<Tab sx={{ color: 'white' }} label="17th Aug" />
			<Tab sx={{ color: 'white' }} label="18th Aug" />
			<Tab sx={{ color: 'white' }} label="19th Aug" />
		</Tabs>
	);
}
