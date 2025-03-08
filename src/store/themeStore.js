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
        base: "bg-white text-black shadow-lg rounded-xl w-md h-64 overflow-hidden",
        basePseudo: "transition duration-300 hover:-translate-y-2 hover:shadow-md",
        outlined: "outline outline-slate-400",
        1: "shadow-md",
        2: "shadow-lg",
        3: "shadow-xl",
        4: "shadow-2xl",
      },
      cardHeader: {
        base: "px-4 py-3 flex items-center",
        title: "text-lg font-semibold text-gray-800 mb-1 ",
        subtitle: "text-sm text-gray-500",
      },
      cardContent: {
        base: "text-black text-xs",
        md: "px-4 pt-2",
      },
      cardMedia: {
        base: "w-full max-w-full max-h-full  object-contain",
      },
      divider: {
        base: "border-gray-900",
        horizontal: "w-full border-t",
        vertical: "h-full border-l",
        thin: "border-[0.5px]",
        medium: "border-[1px]",
        thick: "border-[2px]",
        sm: "my-1",
        md: "my-2",
        lg: "my-4",
      },
      typography: {
        base: "text-gray-900 text-base font-normal",

        variant_h1: "text-5xl font-light mb-2",
        variant_h2: "text-4xl font-light mb-2",
        variant_h3: "text-3xl font-normal mb-2",
        variant_h4: "text-2xl font-normal mb-1",
        variant_h5: "text-xl font-medium mb-1",
        variant_h6: "text-lg font-medium mb-1",
        variant_subtitle1: "text-base font-normal",
        variant_subtitle2: "text-sm font-medium",
        variant_body1: "text-base font-normal",
        variant_body2: "text-sm font-normal",
        variant_button: "text-sm font-medium uppercase",
        variant_caption: "text-xs font-normal",

        color_default: "text-gray-900",
        color_primary: "bg-blue-600 text-white",
        color_secondary: "bg-gray-500 text-white",
        color_success: "bg-green-500 text-white",
        color_warning: "bg-yellow-500 text-white",
        color_error: "bg-red-500 text-white",

        align_left: "text-left",
        align_center: "text-center",
        align_right: "text-right",

        weight_light: "font-light",
        weight_regular: "font-normal",
        weight_medium: "font-medium",
        weight_semibold: "font-semibold",
        weight_bold: "font-bold",

        whitespace_normal: "whitespace-normal",
        whitespace_nowrap: "whitespace-nowrap",
        whitespace_pre: "whitespace-pre",
        "whitespace_pre-wrap": "whitespace-pre-wrap",
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
  getComponentStyle: (component, property = null) => {
    const state = get();

    try {
      const componentStyles = state.styles[state.mode][component];

      if (!componentStyles) {
        console.warn(`Component "${component}" not found in theme`);
        return "";
      }

      const propertyValue = componentStyles[property];

      if (propertyValue === undefined) {
        console.warn(`Property "${property}" not found in ${component} component`);
        return "";
      }

      return propertyValue;
    } catch (error) {
      console.error("Error in getComponentStyle:", error);
      console.log(error.stack);
      return "";
    }
  },
}));
