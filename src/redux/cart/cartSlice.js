import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice ({
    name:'cart',
    initialState:{
        productsCart: [],
    },
    reducers:{
        addProductCart:(state, action) =>{
            state.productsCart=[...state.productsCart, ...action.payload];
        },
        deleteProductCart:(state, action) =>{
          
           state.productsCart=[...action.payload]
        },
    },
});


export const {
    addProductCart,
    deleteProductCart,
} = cartSlice.actions;

const cartsReducer = cartSlice.reducer;
export default cartsReducer