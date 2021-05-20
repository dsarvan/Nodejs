// File: app.js
// Name: D.Saravanan
// Date: 01/05/2021
// Script for note taking application

const fs = require('fs');
const chalk = require('chalk');
const yargs = require('yargs');

fs.writeFileSync('notes.txt', chalk.green('This file was created by Node.js!\n'));
