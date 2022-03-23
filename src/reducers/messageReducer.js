import { createSlice } from '@reduxjs/toolkit'

const initialState = 'welcome'
const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    setMessage(state, action) {
      const content = action.payload
      return content
    },
    removeMessage() {
      return initialState
    }
  }
})
export const { setMessage, removeMessage } = messageSlice.actions

export const setNotification = content => {
  let timeout;
  return dispatch => {
    if (timeout) { 
      clearTimeout(timeout) 
    }
    dispatch(setMessage(content))
    timeout = setTimeout(() => dispatch(removeMessage()), 5000)
  }
}

export default messageSlice.reducer
