#!/usr/bin/env node

/**
 * An image encryption node-js cli
 * This was done as a module project for the SLIIT Cyber Security Program under the module ISP (IE3092)
 * IT20234270 - Rajapaksha K.R.M.U.S
 * IT20239770 - Kumari K.A.S.M
 * Author : UnS
 */

const init = require('./utils/init');
const cli = require('./utils/cli');
const encrypt = require('./utils/encrypt');
const decrypt = require('./utils/decrypt');

const input = cli.input;
const flags = cli.flags;
const { clear } = flags;

(async () => {
	init({ clear });

	input.includes(`help`) && cli.showHelp(0);
	// check if encrypt is present in flags object
	if (flags.encrypt) {
		await encrypt(flags);
	} else if (flags.decrypt) {
		await decrypt(flags);
	}

	// footer to show when the program is finished

	const chalk = (await import(`chalk`)).default;

})();
