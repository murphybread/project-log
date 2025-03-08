import { create } from "zustand";

// 단일 훅으로 통합된 테마 스토어
export const useTheme = create((set, get) => ({
  // 상태
  mode: "light",
  styles: {
    light: {
      button: {
        base: "font-medium rounded-md transition-colors focus:outline-none w-max h-max",

        variant_primary: "bg-blue-600 hover:bg-blue-700 text-white",
        variant_secondary: "bg-gray-500 hover:bg-gray-600 text-white",
        variant_success: "bg-green-500 hover:bg-green-600 text-white",
        variant_warning: "bg-yellow-500 hover:bg-yellow-600 text-white",
        variant_error: "bg-red-500 hover:bg-red-600 text-white",
        variant_outline: "border border-blue-600 text-blue-600 hover:bg-blue-50",

        fontSize__sm: "px-2 py-1 text-sm",
        fontSize__md: "px-4 py-2",
        fontSize__lg: "px-6 py-3 text-lg",
      },
      chip: {
        base: "bg-gray-100 text-gray-800 hover:bg-gray-200",
        primary: "bg-blue-100 text-blue-800 hover:bg-blue-200",
        success: "bg-green-100 text-green-800 hover:bg-green-200",
        warning: "bg-yellow-100 text-yellow-800 hover:bg-yellow-200",
        error: "bg-red-100 text-red-800 hover:bg-red-200",
      },
      card: {
        base: "bg-white text-black shadow-lg rounded-xl w-40 h-32 overflow-hidden",
        baseEffect: "transition duration-300 hover:-translate-y-2 hover:shadow-md",

        variant_outlined: "border border-slate-700",
        variant_default: "bg-white",
        variant_filled: "bg-slate-100",

        display_block: "block",
        display_flex: "flex",
        display_grid: "grid",
        display_inline: "inline",
        "display_inline-block": "inline-block",

        elevation_1: "shadow-md",
        elevation_2: "shadow-slate-500",
        elevation_3: "shadow-slate-700",
        elevation_4: "shadow-slate-900",

        fontSize_sm: "text-sm",
        fontSize_md: "text-md",
        fontSize_lg: "text-lg",
        fontSize_xl: "text-xl",

        height_xs: "h-16",
        height_sm: "h-32",
        height_md: "h-64",
        height_lg: "h-96",
        height_xl: "h-128",
        height_auto: "h-auto",
        height_full: "h-full",
      },
      cardHeader: {
        base: "px-4 py-3 flex items-center",
        title: "text-lg font-semibold text-gray-800 mb-1 break-words ",
        subtitle: "text-sm text-gray-500 break-words",
      },
      cardContent: {
        base: "text-black text-xs",
        spacing_md: "px-4 pt-2",
        disable_spacing: "px-0 py-0",
      },
      cardMedia: {
        base: "w-full max-w-full max-h-full  object-contain",
      },
      divider: {
        base: "border-gray-900",
        variant_horizontal: "w-full border-t",
        variant_vertical: "h-full border-l",
        thickness_thin: "border-[0.5px]",
        thickness_medium: "border-[1px]",
        thickness_thick: "border-[2px]",
        spacing_sm: "my-1",
        spacing_md: "my-2",
        spacing_lg: "my-4",
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
      box: {
        base: "rounded-md transition-all",

        display_block: "block",
        display_flex: "flex",
        display_grid: "grid",
        display_inline: "inline",
        "display_inline-block": "inline-block",

        padding_none: "p-0",
        padding_sm: "p-2",
        padding_md: "p-4",
        padding_lg: "p-6",

        margin_none: "m-0",
        margin_sm: "m-2",
        margin_md: "m-4",
        margin_lg: "m-6",

        width_auto: "w-auto",
        width_full: "w-full",
        width_half: "w-1/2",
        width_quarter: "w-1/4",

        height_auto: "h-auto",
        height_full: "h-full",
        height_screen: "h-screen",
        height_fit: "h-fit",

        variant_outlined: "border border-gray-300",
        variant_filled: "bg-gray-100",
        variant_elevated: "shadow-md",

        color_default: "bg-white",
        color_primary: "bg-blue-600",
        color_secondary: "bg-gray-500",
        color_transparent: "bg-transparent",
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
