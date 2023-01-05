import {createSlice, createAsyncThunk} from "redux-toolkit"

const initialState = {
    goals: [],
    isError: false,
    isLoading: false,
    isLoading: false,
    message: ""
}

export const goalSlice = createSlice({
    name: "goal",
    initialState,
    reducers: {
        reset: (state) => initialState
    }
})