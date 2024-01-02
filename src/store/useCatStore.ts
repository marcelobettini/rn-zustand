import { create } from "zustand";
interface CatState {
  cats: number;
  increase: (by: number) => void;
  decrease: (by: number) => void;
  restore: () => void;
}
export const useCatStore = create<CatState>()(set => ({
  cats: 0,
  increase: by => set(state => ({ cats: state.cats + by })),
  decrease: by => set(state => ({ cats: state.cats - by })),
  restore: () => set(state => ({ cats: (state.cats = 0) })),
}));
