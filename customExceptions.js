class NoCalculatorFunctionNameError extends Error {
  constructor() {
    super("No existeix eixa operació");
    this.name = 'NoCalculatorFunctionName';
  }
}

class AccessDeniedError extends Error {
  constructor() {
    super("You are not member of a rol that is allowed to execute such function");
    this.name = 'AccessDeniedName';
  }
}
module.exports = {
  NoCalculatorFunctionNameError : NoCalculatorFunctionNameError,
  AccessDeniedError : AccessDeniedError
}
