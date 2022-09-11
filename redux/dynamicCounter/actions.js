const { DYNAMICDECREMENT, DYNAMICINCREMENT } = require("./actionTypes")

const dynamicallyIncrement = (value) => {
    return {
        type : DYNAMICINCREMENT,
        payload : value
    }
};

const dynamicallyDecrement = (value) => {
    return {
        type : DYNAMICDECREMENT,
        payload : value
    }
};

module.exports = {dynamicallyIncrement, dynamicallyDecrement}