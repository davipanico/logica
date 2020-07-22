const {sum , multiply, three, pow, min, decimal} = require('./functions')

test('Função Sum deve retornar 3', () => {
    expect(sum(1,1,1)).toBe(3);
})

test('Função Multiply deve retornar 10', () => {
    expect(multiply(5,2)).toBe(10);
})

test('Função Three deve retornar 4', () => {
    expect(three(1,1,2)).toBe(4);
})

test('Função Pow deve retornar 3125', () => {
    expect(three(5,5)).toBe(3125);
})

test('Função Pow deve retornar 3125', () => {
    expect(pow(5,5)).toBe(3125);
})

test('Função Min deve retornar 5', () => {
    expect(min(10,5,6,1000,999)).toBe(5);
})

test('Função Decimal deve retornar 5', () => {
    expect(decimal(2.75)).toBe(3);
})