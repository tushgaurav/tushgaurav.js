import React, { useState } from 'react';
import { useApp, useInput } from 'ink';
import { MainLayout, SideBar } from './ui/primitives.js';

// Content Components
import About from './content/about.js';
import Contact from './content/contact.js';
import Resume from './content/resume.js';
import Projects from './content/projects.js';

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

	useInput((input, key) => {
		if (key.escape) {
			exit();
		}

		if (input === 'q') {
			exit();
		}
	});

	const onNavItemSlected = (item: any) => {
		if (item.value === 'exit') {
			exit();
		} else {
			setCUrrentNavItem(item);
		}
	};

	console.log(`Hi ${name}!`);

	return (
		<>
			<MainLayout>
				<SideBar navItems={navItems} onSelect={onNavItemSlected} />
				{currentNavItem?.value === 'about' && <About />}
				{currentNavItem?.value === 'contact' && <Contact />}
				{currentNavItem?.value === 'projects' && <Projects />}
				{currentNavItem?.value === 'resume' && <Resume />}

			</MainLayout>
		</>
	);
}