const configureStore = require("@reduxjs/toolkit").configureStore ;
const counterReducer = require("../features/counter/counterSlice");
const dynamicCounterReducer = require("../features/dynamicCounter/dynamicCounterSlice");
const fetchPostReducer = require("../features/post/postSlice")
const {createLogger}= require("redux-logger");
const myLogger = createLogger()

// configure store
const store = configureStore({
    reducer : {
        counter : counterReducer,
        dynamicCounter : dynamicCounterReducer,
        post : fetchPostReducer
    },

    middleware : (getDefaultMiddlewares) => getDefaultMiddlewares().concat(myLogger)
});

module.exports = store;