const { createStore } = require("redux");
const {produce} = require("immer")


// initial state
const initialState = {
    name: "Learn with Sumit",
    address: {
        street: "Gulshan",
        city: "Dhaka",
        country: "Bangladesh",
    },
};

const updateStreet = (street) => {
    return {
        type : "updated-street",
        payload : street
    }
};

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case "updated-street":
        //   return {
        //     ...state,
        //     address : {
        //         ...state.address,
        //         city : action.payload
        //     }
        //   }
        return produce(state, (draftState) => {
            draftState.address.city = action.payload
        })
        default:
            return state;
    }
};

const store = createStore(reducer);

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(updateStreet("Sylhet"))