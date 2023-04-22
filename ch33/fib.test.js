var fib = require('./fib');

test('7的斐波那契结果是13', () => {
  expect(fib(7, 0, 1)).toBe(13);
});