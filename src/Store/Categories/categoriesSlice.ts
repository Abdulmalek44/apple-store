import { createSlice } from '@reduxjs/toolkit'
import { TCategory, TLoading } from '@/Types'
import actGetCategories from './act/actGetCategories'



interface ICategoriesState {
    records: TCategory[]
    loading: TLoading
    error: string | null
}

const initialState: ICategoriesState = {
    records: [],
    loading: 'idle',
    error: null,
}

const CategoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        cleanCategoriesRecords: (state) => {
            state.records = []
        }
    },
    extraReducers: (builder) => {
        builder.addCase(actGetCategories.pending, (state) => {
            state.loading = 'pending'
            state.error = null
        })
        builder.addCase(actGetCategories.fulfilled, (state, action) => {
            state.loading = 'succeeded'
            state.error = null
            state.records = action.payload.data
        })
        builder.addCase(actGetCategories.rejected, (state, action) => {
            state.loading = 'failed'
            if (action.payload && typeof action.payload === 'string') {
                state.error = action.payload
            }
        })

    }
})

export default CategoriesSlice.reducer
export const { cleanCategoriesRecords } = CategoriesSlice.actions