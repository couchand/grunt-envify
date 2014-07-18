# envify wrapper

fs = require 'fs'
envify = require 'envify'
custom = require 'envify/custom'

module.exports = (input, output, vars) ->
  infile = fs.createReadStream input
  outfile = fs.createWriteStream output

  convert = if vars
    custom vars
  else
    envify

  infile
    .pipe convert(input)
    .pipe outfile
