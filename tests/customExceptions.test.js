const customExceptions = require('../src/customExceptions');

it('NoCalculatorFunctionNameError constructor', () => {
    const ceNo = new customExceptions.NoCalculatorFunctionNameError();
    expect(ceNo.name).toBe('NoCalculatorFunctionName');
  });

it('AccessDeniedError constructor', () => {
    const ceNo = new customExceptions.AccessDeniedError();
    expect(ceNo.name).toBe('AccessDeniedName');
  });
    