import React, { useState } from 'react';
import { useApp } from 'ink';
import { MainLayout, SideBar } from './ui/primitives.js';

// Content Components
import About from './content/about.js';

type Props = {
	name: string | undefined;
};

const navItems = [
	{ label: 'About', value: 'about' },
	{ label: 'Contact', value: 'contact' },
	{ label: 'Projects', value: 'projects' },
	{ label: 'Resume', value: 'resume' },
	{ label: 'Exit', value: 'exit' },
]

export default function App({ name = 'Stranger' }: Props) {
	const [currentNavItem, setCUrrentNavItem] = useState(navItems[0]);
	const { exit } = useApp();

	const onNavItemSlected = (item: any) => {
		if (item.value === 'exit') {
			exit();
		} else {
			setCUrrentNavItem(item);
		}
	};


	console.log(name);
	return (
		<>
			<MainLayout>
				<SideBar navItems={navItems} onSelect={onNavItemSlected} />
				{currentNavItem?.value === 'about' && <About />}
			</MainLayout>
		</>
	);
}