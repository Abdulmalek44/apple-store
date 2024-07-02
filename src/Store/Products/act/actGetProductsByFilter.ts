import { axiosInstance } from "@/Services/axioc-global";
import { TProduct } from "@/Types";
import axiosErrorHandler from "@/Utils/axiosErrorHandler";
import { createAsyncThunk } from "@reduxjs/toolkit";

type TProductsFilter = {
    slug: string[]
}

type TResponse = {
    data: TProduct[]
    meta: []
}

const actGetProductsByFilter = createAsyncThunk("products/actGetProductsByFilter",
    async ({ slug }: TProductsFilter, thunkAPI) => {
        const { rejectWithValue } = thunkAPI
        try {
            if (slug.length === 0) {
                const res = await axiosInstance.get("products?limit=32")
                return res.data.data
            }
            // Create an array of promises, one for each category slug
            const request = slug.map(slug => axiosInstance.get<TResponse>(`products?category_slug=${slug}`));

            // Wait for all promises to resolve
            const responses = await Promise.all(request);

            // Merge the product data from all responses, avoiding duplicates
            const allProducts = responses.flatMap(res => res.data.data);
            const uniqueProducts = Array.from(new Set(allProducts.map(product => product.id))).map(id =>
                allProducts.find(product => product.id === id));

            return uniqueProducts as TProduct[]
        } catch (error) {
            return rejectWithValue(axiosErrorHandler(error))
        }
    })

export default actGetProductsByFilter