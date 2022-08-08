import snakeArrayCreator from "../../src/snake-array-creator";

test('5x5 and starts with 0', () => {
    expect(snakeArrayCreator(0, 5, 5)).toEqual([
        [0 ,1 ,2 ,3 , 4],
        [15,16,17,18, 5],
        [14,23,24,19, 6],
        [13,22,21,20, 7],
        [12,11,10,9 , 8]
    ])
})
test('6x4 and starts with 1', () => {
    expect(snakeArrayCreator(1, 6, 4)).toEqual([
        [1, 2 , 3, 4],
        [16,17,18, 5],
        [15,24,19, 6],
        [14,23,20, 7],
        [13,22,21, 8],
        [12,11,10, 9]
    ])
})
test('2x3 and starts with -5', () => {
    expect(snakeArrayCreator(-5, 2, 3)).toEqual([
        [-5, -4, -3],
        [0 , -1 ,-2]
    ])
})
test('1x1 and starts with 0', () => {
    expect(snakeArrayCreator(0, 1, 1)).toEqual([[0]])
})
test('Rows = 5, columns = -3, starts with 5', () => {
    expect(() => snakeArrayCreator(5, 5, -3)).toThrowError('Rows and columns must be at least 1')
})
test('Rows = -3, columns = 3, starts with 6', () => {
    expect(() => snakeArrayCreator(6, -3, 3)).toThrowError('Rows and columns must be at least 1')
})
