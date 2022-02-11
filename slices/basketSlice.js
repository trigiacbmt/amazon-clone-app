import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload]
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(item => item.id === action.payload.id)
      let newBasketItems = [...state.items]
      if(index >= 0){
        newBasketItems.splice(index, 1)
      }else{
        console.warn("Cant remove product")
      }
      state.items = newBasketItems
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.basket.items;
export const totalPrice = state => state.basket.items.reduce(((total, item) => total + item.price),0)

export default basketSlice.reducer;
