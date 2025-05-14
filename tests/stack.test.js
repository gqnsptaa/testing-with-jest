const stack = require('../src/stack');

test('peek on empty stack returns undefined', () => {
  expect(stack.peek()).toBeUndefined();
});

test('peek with one element returns that element', () => {
  stack.push("abc");
  expect(stack.peek()).toBe("abc");
});

test('peek with many elements returns top element', () => {
  stack.push("first");
  stack.push("second");
  expect(stack.peek()).toBe("second"); // Fungerar ej pga bugg
});

