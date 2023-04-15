#!/usr/bin/env node
import React from "react";
import { render } from "ink";
import meow from "meow";
import App from "./ui";

const cli = meow(`
	This CLI Portfolio was built with this template - https://github.com/AnishDe12020/cli-portfolio-template

	Usage
	  $ iamdhariot

	Prints out details about me.
`);

render(React.createElement(App, cli.flags, process.stdout));
