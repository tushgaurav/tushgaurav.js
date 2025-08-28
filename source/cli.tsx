#!/usr/bin/env node
import React from 'react';
import meow from 'meow';
import { withFullScreen } from "fullscreen-ink";
import App from './app.js';

const cli = meow(
	`
	Usage
	  $ tushgaurav

	Options
		--name  Your name

	Examples
	  $ tushgaurav --name=Jane
	  Hello, Jane
`,
	{
		importMeta: import.meta,
		flags: {
			name: {
				type: 'string',
			},
		},
	},
);

withFullScreen(<App name={cli.flags.name} />).start();
