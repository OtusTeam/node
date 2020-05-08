const { spawn } = require('child_process')

spawn('ls', [], { stdio: 'inherit' })