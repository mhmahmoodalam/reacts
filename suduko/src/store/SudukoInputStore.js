import { createStore } from 'redux'
import { isValidValue, isCellValid, getPeers, solve } from '../rules/SudukoRules'
import { SET_VALUE, SELECT_CELL, SOLVE_PUZZLE, CLEAR_PUZZLES, NEW_GAME } from '../actions/SudukoPlayerActions'
import { problemSet } from './ProblemSet'
export let initalState = {
    // state of the input board
    input: [
        ['', 2,'', '', '',  3, '',  9, 6 ],
        ['', 7, 5, '',  9, '', '', '', ''],
        [ 6,'', '', '','',  5, '', '',  2],
        ['','',  4, '', 5, '', '', '', ''],
        [ 1,'', '',  3,'',  6, '',  2,  9],
        [ 9, '','',  7,'',  4, '',  5,  3],
        ['', '','', 4,  6, '', '', '', ''],
        ['', '','','', '', '', '', '', ''],
        [ 2, '', 6, 9, '',  8,  1, '', ''],
    ],

    // highlight state for all squares. This is used to provide peer highlighting.
    highlight: [
        [false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false],
    ],
    // the solution board
    output: [
        ['', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', ''],
    ],
}

export function solver(state = initalState, action) {
    switch (action.type) {
        case SET_VALUE: {
            const { x, y } = action.payload
            // using '' to denote blank cells
            const newValue = action.payload.value ? action.payload.value : ''
            // copy state to avoid mutations
            let nextState = {
                input: [
                    [...state.input[0]],
                    [...state.input[1]],
                    [...state.input[2]],
                    [...state.input[3]],
                    [...state.input[4]],
                    [...state.input[5]],
                    [...state.input[6]],
                    [...state.input[7]],
                    [...state.input[8]],
                ],
                output: [
                    ['', '', '', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', '', '', ''],
                ],
                highlight: [...state.highlight],
            }
            // add users value
            nextState.input[x][y] = newValue
            // only update board if it is valid
            if (isValidValue(newValue) && isCellValid(x, y, nextState.input)) {
                return {
                    ...nextState
                }
            } else {
                return {
                    ...state
                }
            }
        }
        case SELECT_CELL: {
            // copy state to avoid mutations
            let nextSelectedState = {
                input: [...state.input],
                output: [...state.output],
                highlight: [
                    [...initalState.highlight[0]],
                    [...initalState.highlight[1]],
                    [...initalState.highlight[2]],
                    [...initalState.highlight[3]],
                    [...initalState.highlight[4]],
                    [...initalState.highlight[5]],
                    [...initalState.highlight[6]],
                    [...initalState.highlight[7]],
                    [...initalState.highlight[8]],
                ],
            }
            // add selected cell to highlight
            nextSelectedState.highlight[action.payload.x][action.payload.y] = true
            // highlight all the peers of this cell
            const peers = getPeers(action.payload.x, action.payload.y)
            for (const peer of peers) {
                nextSelectedState.highlight[peer.x][peer.y] = true
            }
            return nextSelectedState
        }
        case SOLVE_PUZZLE: {
            const output = solve(state.input)
            const solvedState = {
                input: [...state.input],
                output,
                highlight: [...state.highlight]
            }
            return solvedState
        }
        case CLEAR_PUZZLES: {
            const clearedState = {
                input: [
                    ['', '', '', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', '', '', ''],
                ],
                output: [
                    ['', '', '', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', '', '', ''],
                ],
                highlight: [...initalState.highlight]
            }
            return clearedState
        }
        case NEW_GAME: {
          const min = 0;
          const max = problemSet.length;
          const rand = Math.floor(min + Math.random() * (max - min));
            const clearedState = {
                input: [ ...problemSet[rand] ],
                output: [
                    ['', '', '', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', '', '', ''],
                    ['', '', '', '', '', '', '', '', ''],
                ],
                highlight: [...initalState.highlight]
            }
            return clearedState
        }
        default:
            return state
    }
}

export default createStore(solver)
