import { createSlice } from "@reduxjs/toolkit";
const user=JSON.parse(localStorage.getItem('user'))
const initialState=JSON.parse(window.localStorage.getItem("cart"))??[];
const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart(state,action){
            state.push(action.payload)
        },
        deleteFromCart(state,action){
            return state.filter(item=>item.id != action.payload.id)
        }
    }
})
export const {addToCart,deleteFromCart}=cartSlice.actions;
export default cartSlice.reducer;