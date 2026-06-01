const esPar = require('./app');

test('8 debe ser par', () => {
    expect(esPar(8)).toBe(true);
});

test('7 debe ser impar', () => {
    expect(esPar(7)).toBe(false);
});