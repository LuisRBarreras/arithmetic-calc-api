const OPERATORS = {
  ADDITION: 'addition',
  SUBTRACTION: 'subtraction',
  MULTIPLICATION: 'multiplication',
  DIVISION: 'division',
  SQUARE_ROOT: 'square_root',
  RANDOM_STRING: 'random_string'
}

const CHARACTERS = 'abcdefghijklmnopqrstuvwxyz'
const RANDOM_ORG_API_KEY = process.env.RANDOM_ORG_API_KEY
const SECRET_AUTH_KEY = process.env.SECRET_AUTH_KEY

module.exports = {
  OPERATORS,
  CHARACTERS,
  RANDOM_ORG_API_KEY,
  SECRET_AUTH_KEY
}
