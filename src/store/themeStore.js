import { create } from "zustand";

// 단일 훅으로 통합된 테마 스토어
export const useTheme = create((set, get) => ({
  // 상태
  mode: "light",
  styles: {
    light: {
      button: {
        base: "font-medium rounded transition-colors focus:outline-none w-max h-max",
        primary: "bg-blue-600 hover:bg-blue-700 text-white",
        secondary: "bg-gray-500 hover:bg-gray-600 text-white",
        success: "bg-green-500 hover:bg-green-600 text-white",
        warning: "bg-yellow-500 hover:bg-yellow-600 text-white",
        error: "bg-red-500 hover:bg-red-600 text-white",
        outline: "border border-blue-600 text-blue-600 hover:bg-blue-50",
        sm: "px-2 py-1 text-sm",
        md: "px-4 py-2",
        lg: "px-6 py-3 text-lg",
      },
      chip: {
        base: "bg-gray-100 text-gray-800 hover:bg-gray-200",
        primary: "bg-blue-100 text-blue-800 hover:bg-blue-200",
        success: "bg-green-100 text-green-800 hover:bg-green-200",
        warning: "bg-yellow-100 text-yellow-800 hover:bg-yellow-200",
        error: "bg-red-100 text-red-800 hover:bg-red-200",
      },
      card: {
        base: "bg-white text-black shadow-lg rounded-xl p-4 w-sm h-64",
        basePseudo: "transition duration-300 hover:-translate-y-2 hover:shadow-md",
        1: "shadow-md",
        2: "shadow-lg",
        3: "shadow-xl",
        4: "shadow-2xl",
      },
    },
    dark: {
      button: {
        primary: "bg-blue-700 hover:bg-blue-800 text-white",
        secondary: "bg-gray-600 hover:bg-gray-700 text-white",
        success: "bg-green-600 hover:bg-green-700 text-white",
        warning: "bg-yellow-600 hover:bg-yellow-700 text-white",
        error: "bg-red-600 hover:bg-red-700 text-white",
        outline: "border border-blue-400 text-blue-400 hover:bg-blue-900 hover:bg-opacity-30",
      },
      chip: {
        default: "bg-gray-700 text-gray-300 hover:bg-gray-600",
        primary: "bg-blue-900 bg-opacity-30 text-blue-300 hover:bg-opacity-40",
        success: "bg-green-900 bg-opacity-30 text-green-300 hover:bg-opacity-40",
        warning: "bg-yellow-900 bg-opacity-30 text-yellow-300 hover:bg-opacity-40",
        error: "bg-red-900 bg-opacity-30 text-red-300 hover:bg-opacity-40",
      },
    },
  },

  // 액션
  toggleMode: () =>
    set((state) => ({
      mode: state.mode === "light" ? "dark" : "light",
    })),

  setMode: (mode) => set({ mode }),

  // 스타일 속성 가져오기 (내부적으로 현재 모드 사용)
  getComponentStyle: (component) => {
    const state = get();

    return state.styles[state.mode][component];
  },
}));
