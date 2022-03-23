import { configureStore } from "@reduxjs/toolkit";
import anecdoteReducer from './reducers/anecdoteReducer'
import messageReducer from "./reducers/messageReducer";
import filterReducer from "./reducers/filterReducer";

export const store = configureStore({
  reducer: {
    anecdotes: anecdoteReducer,
    message: messageReducer,
    filter: filterReducer
  }
})

