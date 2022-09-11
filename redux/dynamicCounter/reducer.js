const { INCREMENT } = require("../counter/actionTypes");
const { DYNAMICINCREMENT, DYNAMICDECREMENT } = require("./actionTypes");

// initial state 
const initialState = {
    count : 0,
};


const dynamicCounterReducer = (state=initialState, action) => {
    switch (action.type) {
        case DYNAMICINCREMENT:
            return {
                ...state,
                count : state.count + action.payload
            }
            case DYNAMICDECREMENT:
                return {
                    ...state,
                    count : state.count - action.payload
                }

                case INCREMENT:
                return {
                    ...state,
                    count : state.count + 1
                }
        default:
            return state;
    }
};

module.exports = dynamicCounterReducer