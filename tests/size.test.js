const stack = require('../src/stack');

beforeEach(() => stack._clear());

test('size() reflects pushes/pops and never goes negative', () => {
  // Require that size() exists and starts at 0
  expect(typeof stack.size).toBe('function'); // will FAIL until size() exists
  expect(stack.size()).toBe(0);

  // Push twice
  stack.push('A');
  stack.push('B');
  expect(stack.size()).toBe(2);

  // Pop once
  stack.pop();
  expect(stack.size()).toBe(1);

  // Pop past empty should not go negative
  stack.pop(); // empty
  stack.pop(); // extra pop
  expect(stack.size()).toBe(0);
});

