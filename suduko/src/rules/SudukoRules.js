const VALID_VALUES = [1, 2, 3, 4, 5, 6, 7, 8, 9]

export function isValidValue(value) {
    // empty string denotes empty cells
    if (value === '') {
        return true
    }
    //if other value than number
    if (isNaN(value)) {
        return false;
    }
    //check if entered value  present in given set of valid values
    return VALID_VALUES.indexOf(value) !== -1
}

/**
 * Validates that a cell contains a valid value that is not
 * used in it's peers.
 *
 * @param x index of the cell being checked
 * @param y index of the cell being checked
 * @param suduko the board being checked
 */
export function isCellValid(x, y, suduko) {
    const value = suduko[x][y]
    // empty cells are always valid
    if (value === '') {
        return true
    }
    // check peer list for this value being used else where
    const peers = getPeers(x, y)
    for(const peer of peers) {
       //if peer already contains the value dont allow it to be used
        if (suduko[peer.x][peer.y] === value) {
            return false
        }
    }
    return true
}

/**
 * Returns the list of cells that are peers to this cell.
 * This includes all cells in same row and column as well as
 * the cells in the same grid.
 * @param int x
 * @param int y
 */
export function getPeers(x, y) {
    let peers = []
    // add all y's and x's
    for(let k = 0; k < 9; k++) {
        if (k !== x) {
           //get all indexes other than itself along row
            peers.push({
                x: k,
                y,
            })
        }
        //get all indexes other than itself along column
        if (k !== y) {
            peers.push({
                x,
                y: k,
            })
        }
    }
    // add the items in the same grid
    //say for 0,3

    const topLeftY = y - y % 3
    //y=y-(3%3), y=y-0 , y=3;
    const topLeftX = x - x % 3
    //x=x-(0% 3), x= x-0, x=0
    for(let i = topLeftX; i < topLeftX + 3; i++) {
      //i=0 --> 2(including)
        for(let j = topLeftY; j < topLeftY + 3; j++) {
          // j= 3 --> 5 (inclusive)

            if (j === y && i === x) {
              // exclude current index
                continue
            }
            peers.push({
                x: i,
                y: j,
            })
        }
    }
    return peers
}
/**
 * Solves a suduko puzzle.
 * @param suduko the puzzle to be solved
 */
export function solve(suduko) {
    // copy input
    let puzzle = [
        [...suduko[0]],
        [...suduko[1]],
        [...suduko[2]],
        [...suduko[3]],
        [...suduko[4]],
        [...suduko[5]],
        [...suduko[6]],
        [...suduko[7]],
        [...suduko[8]],
    ]

    let cycleImprovedAnswer = true
    let remainingCells = []
    while (cycleImprovedAnswer) {
        cycleImprovedAnswer = false
        remainingCells = []
        // do a cycle and look for cells where their is only one possible value
        for (let x = 0; x < 9; x++) {
            for (let y = 0; y < 9; y++) {
                const value = puzzle[x][y]
                if (value) {
                    continue // this cell is populated, skip to the next
                }

                // get list of values in all peers
                const peers = getPeers(x, y)
                let usedValues = []
                for (var peer of peers) {
                    usedValues.push(puzzle[peer.x][peer.y])
                }

                // see what possibile values remain
                const possibleValues = VALID_VALUES.filter(value => usedValues.indexOf(value) === -1)
                if (possibleValues.length === 1) {
                    puzzle[x][y] = possibleValues[0]
                    cycleImprovedAnswer = true
                } else if (possibleValues.length === 0) {
                    alert('Input is a unsolvable puzzle.')
                    return [
                        ['', '', '', '', '', '', '', '', ''],
                        ['', '', '', '', '', '', '', '', ''],
                        ['', '', '', '', '', '', '', '', ''],
                        ['', '', '', '', '', '', '', '', ''],
                        ['', '', '', '', '', '', '', '', ''],
                        ['', '', '', '', '', '', '', '', ''],
                        ['', '', '', '', '', '', '', '', ''],
                        ['', '', '', '', '', '', '', '', ''],
                        ['', '', '', '', '', '', '', '', ''],
                    ]
                } else {
                    remainingCells.push({
                        x,
                        y,
                        possibleValues
                    })
                }
            }
        }
    }

    // Now use brute force to solve the remaining ambiguous cells.
    // Use the list of possible values from the peer evaluation to limit the search space.
    for (let i = 0; i < remainingCells.length; i++) {
        const { x, y, possibleValues } = remainingCells[i]
        let value = puzzle[x][y]
        if (!value) {
            value = possibleValues[0]
        } else {
            const indexOfCurrentValue = possibleValues.indexOf(value)
            if (indexOfCurrentValue >= possibleValues.length - 1) {
                // We are out of values for this cell backtrack on cell
                puzzle[x][y] = ''
                i = i - 2
                continue
            }
            value = possibleValues[indexOfCurrentValue + 1]
        }
        puzzle[x][y] = value
        if (!isCellValid(x, y, puzzle)) {
            i = i - 1 // this new square value is not valid
            continue
        }
    }
    return puzzle
}
