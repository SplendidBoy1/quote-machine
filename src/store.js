import {createStore} from 'redux';


const SET_COLOR = 'SET_COLOR';

const initialState = {
    color: ''
}

const colorReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_COLOR:
            console.log('Setting color:', action.color);
            return { ...state, color: action.color };
        default:
            return state;
    }
}

const store = createStore(colorReducer);

export default store;