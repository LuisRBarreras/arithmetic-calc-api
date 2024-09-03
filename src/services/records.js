const { OP } = require('../constants')

class RecordService {
  constructor (model, models) {
    this.model = model
    this.models = models
  }

  async delete (recordId, userId) {
    const where = {
      id: recordId,
      user_id: userId
    }
    try {
      const result = await this.model.destroy({ where })
      return result
    } catch (error) {
      console.error(error)
      return `Entity not found with: ID: ${where.id}`
    }
  }

  async find (where, attributes = {}) {
    const recordFound = await this.model.findOne({
      attributes, where
    })

    return recordFound
  }

  async getRecords (userId, page, size, search) {
    let where = {
      user_id: userId
    }

    if (search) {
      where = {
        ...where,
        [OP.or]: [
          { '$Operation.type$': { [OP.like]: `%${search}%` } },
          { operation_response: { [OP.like]: `%${search}%` } }
        ]

      }
    }

    const options = { where, offset: page * size, limit: size }
    const include = [{
      model: this.models.Operations,
      required: true
    }]
    const { count, rows } = await this.model.findAndCountAll({ ...options, include })

    return { count, rows: this.mapResponse(rows) }
  }

  mapResponse (records) {
    return records.map(record => {
      const item = {
        id: record.id,
        amount: record.amount,
        operationResponse: record.operation_response,
        userBalance: record.user_balance,
        type: record.Operation.type,
        date: record.createdAt.toISOString().replace('T', ' ').substr(0, 19)
      }
      return item
    })
  }

  async create (values) {
    const result = this.model.create(values)
    return result
  }
}

module.exports = RecordService
