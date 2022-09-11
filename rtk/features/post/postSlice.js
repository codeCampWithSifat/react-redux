const {createSlice, createAsyncThunk} = require("@reduxjs/toolkit");
const fetch = require("node-fetch");
// initial State
const initialState = {
    loading : false,
    post : [],
    error : ""
};

// thunk asynchoronous function
const fetchPosts = createAsyncThunk("post/fetchTodos", async() => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos?_limit=10`)
    const posts = await response.json();
    return posts
})

// create the slice
const postSlice = createSlice({
    name : "post",
    initialState,
    extraReducers : (builder) => {
        builder.addCase(fetchPosts.pending, (state,action) => {
            state.loading = true,
            state.error = ""
        })

        builder.addCase(fetchPosts.fulfilled, (state,action) => {
            state.loading = false,
            state.error = "",
            state.post = action.payload
        })

        builder.addCase(fetchPosts.rejected, (state,action) => {
            state.loading = false,
            state.error = action.error.message,
            state.post = []
        })
    }
})

module.exports = postSlice.reducer
module.exports.fetchPosts = fetchPosts