const store = require("./store");
const { increment, decrement } = require("./counter/actions");
const { dynamicallyIncrement, dynamicallyDecrement } = require("./dynamicCounter/actions");

// subscribe to state changes
store.subscribe(() => {
    console.log(store.getState());
});

// disptach actions
store.dispatch(increment());
store.dispatch(increment());

// // store.dispatch(increment());

// // store.dispatch(decrement());
// store.dispatch(dynamicallyIncrement(30))
// store.dispatch(dynamicallyDecrement(10))
