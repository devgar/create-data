#!/usr/bin/env node

const { join } = require('path')
const { userInfo } = require('os')
const mkdir = require('mkdir-p')

const { homedir } = userInfo()
const cwd = process.cwd()

const p = join(homedir, '.data', cwd)

mkdir(p, err => {
  if (err) throw err
})
