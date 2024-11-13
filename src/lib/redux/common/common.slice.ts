import { ICommonState } from '@/lib/redux/common/common.interface'
import { createSlice } from '@reduxjs/toolkit'

const initialState: ICommonState = {
  isLoading: false,
  popupError: false
}

export const commonState = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload
    },
    setPopupError: (state, action) => {
      state.popupError = action.payload
    }
  }
})
export const { setIsLoading, setPopupError } = commonState.actions
export default commonState.reducer
