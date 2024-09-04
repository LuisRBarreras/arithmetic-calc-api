const OperationService = require('../../../src/services/operations')
const { OPERATORS } = require('../../../src/constants')

describe('Operation Service', () => {
  let model = {}, randomLibrary = { generateStrings: async () => ['random_string_generated'] }

  beforeEach(() => { })

  test('PerformCalculation ADDITION', async() => {
    const service = new OperationService(model, randomLibrary)
    const result = await service.performCalculation(OPERATORS.ADDITION, 5, 5)
    expect(result).toEqual(10)
  })
  
  test('PerformCalculation Subtraction', async() => {
    const service = new OperationService(model, randomLibrary)
    const result = await service.performCalculation(OPERATORS.SUBTRACTION, 5, 5)
    expect(result).toEqual(0)
  })
  
  test('PerformCalculation Multiplication', async() => {
    const service = new OperationService(model, randomLibrary)
    const result = await service.performCalculation(OPERATORS.MULTIPLICATION, 5, 5)
    expect(result).toEqual(25)
  })
  
  test('PerformCalculation Random String ', async() => {
    const service = new OperationService(model, randomLibrary)
    const result = await service.performCalculation(OPERATORS.RANDOM_STRING)
    expect(result).toEqual('random_string_generated')
  })

})
