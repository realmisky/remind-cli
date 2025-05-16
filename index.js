#!/usr/bin/env node

const notifier = require('node-notifier');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const chalk = require('chalk');

console.log(chalk.green('remind-cli is running!'));

const argv = yargs(hideBin(process.argv))
  .usage('Usage: remind-cli --time <time> --message <message>')
  .option('time', {
    alias: 't',
    describe: 'Time to wait before reminder (e.g., 10s, 5m, 2h)',
    demandOption: true,
    type: 'string'
  })
  .option('message', {
    alias: 'm',
    describe: 'Reminder message',
    demandOption: true,
    type: 'string'
  })
  .help()
  .argv;

function parseTime(timeStr) {
  const match = timeStr.match(/^(\d+)(s|m|h)$/);
  if (!match) return null;

  const value = parseInt(match[1]);
  const unit = match[2];

  switch (unit) {
    case 's': return value * 1000;
    case 'm': return value * 60 * 1000;
    case 'h': return value * 60 * 60 * 1000;
    default: return null;
  }
}

const delay = parseTime(argv.time);

if (delay === null) {
  console.error(chalk.red('Invalid time format! Use 10s, 5m, or 2h.'));
  process.exit(1);
}

console.log(chalk.yellow(`⏰ Reminder set for ${argv.time} from now.`));

setTimeout(() => {
  notifier.notify({
    title: 'Reminder from remind-cli',
    message: argv.message,
  });

  console.log(chalk.cyan(`📢 Reminder: ${argv.message}`));
}, delay);
