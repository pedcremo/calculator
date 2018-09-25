const calculator = require('./calculator');
//const NoCalculatorFunctionNameError = require('./customExceptions');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator([1, 2],'add')).toBe(3);
});

test('adds 1 + 2 + 3 ...+ 9  to equal 45', () => {
  expect(calculator([1,2,3,4,5,6,7,8,9],'add')).toBe(45);
});

test('adds with no operands to equal 0', () => {
  expect(calculator([],'add')).toBe(0);
});

test('multiplier 3 * 3 to equl 9', () => {
  expect(calculator([3,3],'multiplier')).toBe(9);
});

test('multiplier 3 * 3 * 3 * 3 to equal 81', () => {
  expect(calculator([3,3,3,3],'multiplier')).toBe(81);
});

test('doublefier [2,4,5] to be equal [4,8,10]', () => {  
  expect(calculator([2,4,5],'doublefier')).toEqual([4,8,10]);
});

test("Operation not exists", () => {
  
  expect(calculator([2,4,5],'zcdadaefier')).toThrow('NoCalculatorFunctionNameError');
});
