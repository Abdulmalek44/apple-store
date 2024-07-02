import { createSlice } from "@reduxjs/toolkit";
import { defaultProduct, TLoading, TProduct } from '@/Types'
import actGetNewCollectionPagination from "./act/actGetNewCollectionPagination";
import actGetProductsByFilter from "./act/actGetProductsByFilter";
import actGetProductById from "./act/actGetProductById";
import actGetProductsBySlug from "./act/actGetProductsBySlug";


interface IProductsState {
    records: TProduct[],
    newCollection: TProduct[],
    recordsFilter: TProduct[],
    singleProduct: TProduct
    loading: TLoading,
    error: null | string
}

const initialState: IProductsState = {
    records: [],
    newCollection: [],
    recordsFilter: [],
    singleProduct: defaultProduct(),
    loading: "idle",
    error: null
}

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        cleanProductsRecords: (state) => {
            state.records = []
            state.newCollection = []
            state.singleProduct = defaultProduct()
            state.recordsFilter = []

        }
    },
    extraReducers: (builder) => {

        //get  products by slug 
        builder.addCase(actGetProductsBySlug.pending, (state) => {
            state.loading = 'pending'
            state.error = null
        })
        builder.addCase(actGetProductsBySlug.fulfilled, (state, action) => {
            state.loading = 'succeeded'
            state.error = null
            state.records = action.payload.data
        })
        builder.addCase(actGetProductsBySlug.rejected, (state, action) => {
            state.loading = 'failed'
            if (action.payload && typeof action.payload === 'string') {
                state.error = action.payload
            }
        })

        //get new collection products with pagination
        builder.addCase(actGetNewCollectionPagination.pending, (state) => {
            state.loading = 'pending'
            state.error = null
        })
        builder.addCase(actGetNewCollectionPagination.fulfilled, (state, action) => {
            state.loading = 'succeeded'
            state.error = null
            state.newCollection = action.payload.data
        })
        builder.addCase(actGetNewCollectionPagination.rejected, (state, action) => {
            state.loading = 'failed'
            if (action.payload && typeof action.payload === 'string') {
                state.error = action.payload
            }
        })

        //get products with filter
        builder.addCase(actGetProductsByFilter.pending, (state) => {
            state.loading = 'pending'
            state.error = null
        })
        builder.addCase(actGetProductsByFilter.fulfilled, (state, action) => {
            state.loading = 'succeeded'
            state.error = null
            state.recordsFilter = action.payload
        })
        builder.addCase(actGetProductsByFilter.rejected, (state, action) => {
            state.loading = 'failed'
            if (action.payload && typeof action.payload === 'string') {
                state.error = action.payload
            }
        })

        //get single product details
        builder.addCase(actGetProductById.pending, (state) => {
            state.loading = 'pending'
            state.error = null
        })
        builder.addCase(actGetProductById.fulfilled, (state, action) => {
            state.loading = 'succeeded'
            state.error = null
            state.singleProduct = action.payload
        })
        builder.addCase(actGetProductById.rejected, (state, action) => {
            state.loading = 'failed'
            if (action.payload && typeof action.payload === 'string') {
                state.error = action.payload
            }
        })

    }
})

export default productsSlice.reducer
export const { cleanProductsRecords } = productsSlice.actions