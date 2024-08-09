import { configureStore } from "@reduxjs/toolkit";
import {counterSlice} from '../slices/counterSlice';

const store = configureStore({
    counter : counterSlice,
})

export default store;