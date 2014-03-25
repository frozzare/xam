#!/usr/bin/env node
require('child_process').exec('open -n /Applications/Xamarin\ Studio.app ' + require('path').resolve(process.cwd(), process.argv[2] || ''))
