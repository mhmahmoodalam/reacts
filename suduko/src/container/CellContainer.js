import { connect } from 'react-redux'
import { setValue, selectCell } from '../actions/SudukoPlayerActions'
import Cell from '../component/Cell'

/**
 * ((store) => { return 'whatever goes to props of connected component' })
 *
 */
const mapStateToProps = (state, ownProps) => {
    let highlighted = false
    // only highlight the input sudoku
    if (ownProps.type === 'input' && state['highlight'][ownProps.x][ownProps.y]) {
        highlighted = true
    }
    //return a new state value mapped to props of component
     return {
        value: state[ownProps.type][ownProps.x][ownProps.y],
        highlighted,
        disabled: ownProps.type !== 'input'
    }

}

/**
 * ((dispatch) => { return 'whatever dispatch method need to be bound to the component' })
 *
 */
const mapDispatchToProps = (dispatch, ownProps) => {
    //return the dispatch methods as props to component
    return {
        setValue: (value) => dispatch(setValue(ownProps.x, ownProps.y, value)),
        selectCell: () => dispatch(selectCell(ownProps.x, ownProps.y)),
    }
}

/**
 * Maps redux app state to cell.
 *
 * connect methhod takes two parameters one from storeToProps, and other to dispatch based on props value
 */
export const CellContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Cell)
