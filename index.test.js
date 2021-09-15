const fizzbuzz = require('./index')

describe('fizzbuzz',() => {

    test('Si el numero que pasamos es de tipo string, tendria que retornar null', () => {
        const expected = null
        const result = fizzbuzz('1')
        expect(expected).toBe(result)
    })

    test('Si el numero es 0, retorna 0', () => {
        const expected = 0
        const result = fizzbuzz(0)
        expect(expected).toBe(result)
    })

    test('Si el numero es multiplo de 3 y de 5 tiene que retornar fizzbuzz', () => {
        const expected = 'fizzbuzz'
        const result = fizzbuzz(15)
        expect(expected).toBe(result)
    })

    test('Si el numero es multiplo de 3 tiene que retornar fizz', () => {
        const expected = 'fizz'
        const result = fizzbuzz(3)
        expect(expected).toBe(result)
    })

    test('Si el numero es multiplo de 5 tiene que retornar fizz', () => {
        const expected = 'fizz'
        const result = fizzbuzz(5)
        expect(expected).toBe(result)
    })
})