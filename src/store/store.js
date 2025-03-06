import { create } from "zustand";

const useTheme = create((set) => ({
  pallete: {
    primary: {
      main: "#3b82f6",
    },
  },
  projectStatuses: {
    success: {
      label: "success",
    },
  },
}));

export default useTheme;
