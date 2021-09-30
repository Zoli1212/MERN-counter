import React, {useReducer} from 'react'


type CounterState = {
    count: number
}

type UpdateAction = {
    type: 'increment' | 'decrement'
    payload: number
}

type ResetAction = {
    type: 'reset'
}

type CounterAction = UpdateAction | ResetAction

const Counter = () => {

    const initialState = { count: 0}


    const reducer = (state: CounterState, action: CounterAction) => {
        switch(action.type){
            case 'increment': 
                return { count: state.count + action.payload}
            case 'decrement':
                return { count: state.count - action.payload}
            case 'reset':
                return initialState
            default:
                return state
        }
    }

    const [state, dispatch ] = useReducer(reducer, initialState)
    return (
        <div>

            Count: {state.count}<br/>
            <button onClick={() => dispatch({type: 'increment', payload: 10})}>
                Increment by 10
            </button><br/>
            <button onClick={() => dispatch({type: 'decrement', payload: 10})}>
                Decrement by 10
            </button><br/>

            <button onClick={() => dispatch({type: 'reset'})}>
                Reset to 0
            </button>
            
        </div>
    )
}

export default Counter
