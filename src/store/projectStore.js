import { create } from "zustand";

const useProjectStore = create((set, get) => ({
  selectedProjectId: null,
  setSelectedProjectId: (id) => set({ selectedProjectId: id }),
}));

export default useProjectStore;
