import {NEXT, PREV, CHANGE} from '../types'


const inititalState = {
    number: 0,
    shiny: false
}
export default function pokemonReducer(state=inititalState, action) {
    switch(action.type){
        case NEXT: {
            return {
                ...state,
                number: state.number + 1
            }
        }
        case PREV: {
                return {
                    ...state,
                    number: state.number - 1
            }
        } 
        case CHANGE: {
            return {
                ...state,
                shiny: !state.shiny
            }
        }
        default:{
            return state
        }
            
    }
}