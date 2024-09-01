class UserService {
  constructor (model) {
    this.model = model
  }

  async find (where, attributes = {}) {
    const recordFound = await this.model.findOne({
      attributes, where
    })

    return recordFound
  }
}

module.exports = UserService
