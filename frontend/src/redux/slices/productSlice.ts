import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../interfaces/Product";

interface ProductState {
  list: Product[];
}

const initialState: ProductState = {
  list: [
    {
      id: "1",
      name: "Blue Dynamic Sneakers",
      description: "Perfect for daily wear, these blue sneakers combine style and comfort effortlessly.",
      price: 120,
      image: "/assets/Shoe_1.jpg",
      quantity: 0,
    },
    {
      id: "2",
      name: "Classic White Casuals",
      description: "Simple yet elegant white casual shoes for your everyday adventures.",
      price: 100,
      image: "/assets/Shoe_2.jpg",
      quantity: 0,
    },
    {
      id: "3",
      name: "Monochrome Elegance",
      description: "Sleek and stylish black-and-white sneakers for a bold look.",
      price: 130,
      image: "/assets/Shoe_3.jpg",
      quantity: 0,
    },
    {
      id: "4",
      name: "Athletic Energy Boosters",
      description: "High-performance athletic shoes to power your workouts and daily runs.",
      price: 150,
      image: "/assets/Shoe_4.jpg",
      quantity: 0,
    },
    {
      id: "5",
      name: "Youth Street Kicks",
      description: "Trendy kicks with a modern vibe, perfect for a casual outing.",
      price: 110,
      image: "/assets/Shoe_5.jpg",
      quantity: 0,
    },
    {
      id: "6",
      name: "Comfort Skate Sneakers",
      description: "Skater-friendly shoes with unmatched comfort and durability.",
      price: 125,
      image: "/assets/Shoe_6.jpg",
      quantity: 0,
    },
  ],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    updateQuantity: (state, action: PayloadAction<{ id: string; quantity: number }>) => {
      const product = state.list.find((item) => item.id === action.payload.id);
      if (product) {
        product.quantity = action.payload.quantity;
      }
    },
  },
});

export const { updateQuantity } = productSlice.actions;
export default productSlice.reducer;
