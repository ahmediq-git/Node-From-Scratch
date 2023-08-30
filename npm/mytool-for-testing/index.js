#!/usr/bin/env node


console.log("Hi this is mytool")

const yargs = require('yargs')

const { argv }=yargs(process.argv)

console.log("Passed parameters are", argv)