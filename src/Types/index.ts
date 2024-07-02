
type TProductcCategories = {
    slug: string,
    name: string
}

export type TPrice = {
    raw: number,
    formatted: string,
    formatted_with_symbol: string,
    formatted_with_code: string,
}

export type TCategory = {
    assets: { url: string; }[],
    slug: string,
    name: string,
    id?: string,
}

export type TProduct = {
    name: string,
    price: TPrice,
    description: string,
    image: { url: string, },
    quantity?: number;
    id?: string;
    categories?: TProductcCategories[]
    related_products?: TProduct[]
}

export type TLineItems = {
    id: string,
    product_id: string,
    name: string,
    product_name: string,
    quantity: number,
    price: TPrice,
    line_total: TPrice,
    image: { url: string }
}

export type TUser = {
    id: number,
    email: string,
    firstname: string,
    lastname: string,
}


export type TCart = {
    cartID: string | null,
    total_items: number,
    subtotal: TPrice | null,
    line_items: TLineItems[] | null;
};


export type TLoading = 'idle' | 'pending' | 'succeeded' | 'failed' | null

export const defaultProduct = () => ({
    name: "",
    price: {
        raw: 0,
        formatted: "",
        formatted_with_symbol: "",
        formatted_with_code: "",
    },
    description: "",
    image: { url: "" },
    categories: [],
    related_products: []
});