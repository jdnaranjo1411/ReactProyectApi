import { create } from "zustand";

export const useCartStore = create((set, get) => ({
  items: [],
  addToCart: (item) => set((state) => {
    const newItems = [...state.items, item];
    // Use get to access the current state and calculate totalCost
    const totalCost = newItems.reduce((acc, curr) => acc + (curr.price || 0), 0);
    return { items: newItems, totalCost };
  }),
  removeFromCart: (index) =>
    set((state) => {
      const newItems = state.items.filter((_, i) => i!== index);
      // Recalculate totalCost after removing an item
      const totalCost = newItems.reduce((acc, curr) => acc + (curr.price || 0), 0);
      return { items: newItems, totalCost };
    }),
  clearCart: () => set({ items: [], totalCost: 0 }),
  getTotalCost: () => get().totalCost,
}));