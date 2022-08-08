const snakeArrayCreator = (snakeStart: number, rows: number, columns: number) => {
    if (rows < 1 || columns < 1) {
        throw new Error('Rows and columns must be at least 1')
    }

    let finalArr: number[][] = Array.from(Array(rows), () => []), i = 0, j = 0, height = rows - 1

    function snake() {
        let q = Number(i)
        while (finalArr[j].length < columns) {
            finalArr[j].splice(q, 0, snakeStart)
            snakeStart++
            q++
        }
        j++
        while (j <= height) {
            if (finalArr[j].length !== columns) {
                finalArr[j].splice(-i, 0, snakeStart)
                snakeStart++
            } else {
                break
            }
            j++
        }
        j--
        while (finalArr[j].length < columns) {
            finalArr[j].splice(i, 0, snakeStart)
            snakeStart++
        }
        j--
        for (let k = 0; k <= height - 2; k++) {
            if (finalArr[j].length !== columns) {
                finalArr[j].splice(i, 0, snakeStart)
                snakeStart++
                j--
            } else {
                break
            }
        }
        i++
        j++
        if (finalArr.filter((e) => {
            return e.length === columns
        }).length === rows) {
            return
        } else {
            snake()
        }
    }
    snake()
    return finalArr
}

console.log(snakeArrayCreator(1, 5, 5))

export default snakeArrayCreator