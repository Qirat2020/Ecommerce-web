import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IProduct {
    id: number;
    title: string;
    img: string;
    price: number;
    quantity: number;
}

const initialState: IProduct[] = [];

export const cartSlice = createSlice({
    name: "cartSlice",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<IProduct>) => {
            const existingProductIndex = state.findIndex((pro) => pro.id === action.payload.id);

            if (existingProductIndex === -1) {
                state.push(action.payload); // Add new product
            } else {
                state[existingProductIndex].quantity += 1; // Update quantity
            }
        },

        removeFromCart: (state, action: PayloadAction<number>) => {
            const index = state.findIndex((item) => item.id === action.payload);
            if (index !== -1) {
                state.splice(index, 1); // Remove product
            }
        }
    }
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
