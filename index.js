#!/usr/bin/env node
require('child_process').exec('open -a Xamarin\ Studio ' + require('path').resolve(process.cwd(), process.argv[2] || ''))
