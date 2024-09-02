const { OPERATORS, CHARACTERS } = require('../constants')

class OperationService {
  constructor (model, randomLibrary) {
    this.model = model
    this.randomLibrary = randomLibrary
  }

  async find (where, attributes = {}) {
    const recordFound = await this.model.findOne({
      attributes, where
    })

    return recordFound
  }

  async generateRandomString () {
    return new Promise((resolve, reject) => {
      this.randomLibrary.generateStrings(1, 32, CHARACTERS)
        .then((randomString) => {
          resolve(randomString[0])
        }).catch((error) => {
          reject(error)
        })
    })
  }

  async performCalculation (operation, number1, number2) {
    let result = null
    const n1 = Number.parseFloat(number1)
    const n2 = Number.parseFloat(number2)

    if (operation === OPERATORS.ADDITION) {
      result = n1 + n2
    } else if (operation === OPERATORS.SUBTRACTION) {
      result = n1 - n2
    } else if (operation === OPERATORS.MULTIPLICATION) {
      result = n1 * n2
    } else if (operation === OPERATORS.DIVISION) {
      result = n1 / n2
    } else if (operation === OPERATORS.SQUARE_ROOT) {
      result = Math.sqrt(n1)
    } else if (operation === OPERATORS.RANDOM_STRING) {
      result = await this.generateRandomString()
    }

    return result
  }
}

module.exports = OperationService
