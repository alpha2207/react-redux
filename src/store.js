import { configureStore } from "@reduxjs/toolkit";
import { customReducer } from "./Reducers";

export default configureStore({
    reducer:{
        customReducer
    }
})