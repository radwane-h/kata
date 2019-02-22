const assert = require('assert');
// const Test = require('../test.js');
const Foobar = require('../foobar.js');

describe('Test', () => {
  it('rend le numero si pas divisible par 3 et 5', () => {
    expect(new Foobar().foobar(1)).toBe("1")
  });
  it('divisble par 3 retourne foo', () => {
    expect(new Foobar().foobar(3)).toBe("foo")
  });
  it('divisble par 5 retourne bar', () => {
    expect(new Foobar().foobar(5)).toBe("bar")
  });
  it('divisble par 5 et 3 retourne foobar', () => {
    expect(new Foobar().foobar(15)).toBe("foobar")
  });
});
