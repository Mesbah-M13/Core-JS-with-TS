import { persist } from "zustand/middleware";

export interface CartItem {
  id: number;
  title: string;
  price: string;
  image: string;
  quantity: number;
}

interface CartState {
  cart: CartItem[];
  addToCart: (item: Omit<CartItem, "quantity">) => void;
  removeFromCart: (id: number) => void;
  increaseQty: (id: number) => void;
  decreaseQty: (id: number) => void;
  totalAmount: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set,get)=>({
      
    })
  )
)