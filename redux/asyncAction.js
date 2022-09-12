const fetch = require("node-fetch");
const { createStore, applyMiddleware } = require("redux");
const thunkMiddleWare = require("redux-thunk")

// initial state
const initialState = {
    loading : false,
    posts : [],
    error : ""
};

const fetchPostsRequested = () => {
    return {
        type : "posts/requested"
    }
};

const fetchPostsSucces = (posts) => {
    return {
        type : "posts/success",
        payload : posts
    }
};

const fetchPostsFailed = (error) => {
    return {
        type : "posts/failed",
        payload : error
    }
}

// reducer
const fetchReducer = (state=initialState, action) => {
    switch (action.type) {
        case "posts/requested":
            return {
                ...state,
                loading : true,
                error : ''
            }

            case "posts/success":
            return {
                ...state,
                loading : false,
                error : '',
                posts : action.payload
            }

            case "posts/failed":
            return {
                ...state,
                loading : false,
                error : action.payload.message,
                posts : []
            }
    
        default:
            return state;
    }
};

// create thunk function
const fetchPosts = () => {
    return async(dispatch) => {
        dispatch(fetchPostsRequested())
       try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos?_limit=10`);
        const posts = await response.json();
        dispatch(fetchPostsSucces(posts))
       } catch (error) {
        dispatch(fetchPostsFailed(error))
       }
    }
};

// create the store
const store= createStore(fetchReducer, applyMiddleware(thunkMiddleWare.default));

// subscribe to state changes 
store.subscribe(() => {
    console.log(store.getState())
});

// dispatch all the action
store.dispatch(fetchPosts())