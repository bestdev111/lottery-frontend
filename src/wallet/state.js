import { configureStore } from '@reduxjs/toolkit'
import toastsReducer from './toasts'

export default configureStore({
  devTools: false,
  reducer: {
    toasts: toastsReducer
  },
})
