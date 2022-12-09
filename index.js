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

	// print Give it a star on github: https://github.com/theninza/imcrypt with chalk and bgMagenta
	console.log(
		chalk.bgMagenta(` ISP_IE3092_Module_Project_Teams :  `) +
			chalk.bold(` 
https://teams.microsoft.com/l/channel/19%3a71b2b3b0872441a9b05df8c9f07c2acf%40thread.tacv2/2022_S2_G83?groupId=f4770004-86a3-44ff-936b-5881a910cbd4&tenantId=44e3cf94-19c9-4e32-96c3-14f5bf01391a `)
	);

})();
