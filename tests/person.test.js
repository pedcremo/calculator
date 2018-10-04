
import Person from '../src/person';

it('We can check if paco person called the class constructor', () => {
  const paco = new Person('paco','maco');
  expect(paco.name).toBe('paco');
});

it('We can check if paco person with rol user can access calculator', () => {
  let paco = new Person("Paco","ElMaco",Person.getRoles().USER);
  expect(paco.calculator([2,3,5],'ADD')).toBe(10);
});

it('We can check if paco person with rol user can access calculator multiplier', () => {
  let paco = new Person("Paco","ElMaco",Person.getRoles().USER);
  expect(function(){paco.calculator([2,3,5],'MULTIPLIER')}).toThrowError(/AccessDeniedName/);
});

it('We can check if paco person with rol user can not access an inexistent function', () => {
  let paco = new Person("Paco","ElMaco",Person.getRoles().USER);
  expect(paco.calculator([2,3,5],'zdffdfd')).toThrowError(/NoCalculatorFunctionName/);
});
