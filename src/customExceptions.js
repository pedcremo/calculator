/**
 * NoCalculatorFunctionNameError class.Custom exception throwed when a person.calculate tries to operate with a non existing function
 *
 * @constructor
 */

export class NoCalculatorFunctionNameError extends Error {
  constructor() {
    super("No existeix eixa operació");
    this.name = 'NoCalculatorFunctionName';
  }
}

/**
 * AccesDeniedError class.Custom exception throwed when a person.calculate tries to operate with a non allowed function
 *
 * @constructor
 */

export class AccessDeniedError extends Error {
  constructor() {
    super("You are not member of a rol that is allowed to execute such function");
    this.name = 'AccessDeniedName';
  }
}