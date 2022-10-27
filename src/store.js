import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './Reducers'

export default configureStore({
    reducer: {
        counter: counterReducer
    }
})