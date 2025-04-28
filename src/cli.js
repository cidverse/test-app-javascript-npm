#!/usr/bin/env node

const { Calculator } = require('./index');

const calculator = new Calculator();
const result = calculator.add(2, 4);

console.log(`2 + 4 = ${result}`);
