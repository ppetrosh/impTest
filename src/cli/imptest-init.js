/**
 * Init command
 */

'use strict';

const commander = require('commander');
const packageJson = require('../../package.json');
const parseBool = require('../lib/utils/parseBool');
const InitCommand = require('../lib/Commands/InitCommand');

commander
  .option('-d, --debug', 'debug output')
  .option('-c, --config [path]', 'config file path [default: .imptest]', '.imptest')
  .option('-f, --force', 'overwrite existing configuration')
  .parse(process.argv);

// run command
(new InitCommand({
  debug: parseBool(commander.debug),
  force: parseBool(commander.force),
  config: commander.config,
  version: packageJson.version
})).tryRun();
