class NoCalculatorFunctionNameError extends Error {
  constructor() {
    super("No existeix eixa operació");
    this.name = 'NoCalculatorFunctionName';
  }
}

module.exports = NoCalculatorFunctionNameError;
