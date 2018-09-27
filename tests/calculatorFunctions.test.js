const calculator = require('../src/calculatorFunctions');

test('adds 1 + 2 to equal 3', () => {  
  expect(calculator.fAdd([1, 2])).toBe(3);
});

test('adds 1 + 2 + 3 ...+ 9  to equal 45', () => {
  expect(calculator.fAdd([1,2,3,4,5,6,7,8,9])).toBe(45);
});

test('multiplier 3 * 3 to equl 9', () => {
  expect(calculator.fMultiplier([3,3])).toBe(9);
});

test('multiplier 3 * 3 * 3 * 3 to equal 81', () => {
  expect(calculator.fMultiplier([3,3,3,3])).toBe(81);
});

test('doublefier [2,4,5] to be equal [4,8,10]', () => {  
  expect(calculator.fDoublefier([2,4,5])).toEqual([4,8,10]);
});
