const { pascalCase } = require('change-case')
module.exports = [
  {
    type: 'input',
    name: 'name',
    message: 'Component name?',
    result: (name) => pascalCase(name),
  },
]
