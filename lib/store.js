import { create } from 'zustand'

const useStore = create((set) => ({
  isNavOpened: false,
  setIsNavOpened: (value) => set({ isNavOpened: value }),
}))

export default useStore
