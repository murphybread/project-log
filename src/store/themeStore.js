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

        fontSize_sm: "px-2 py-1 text-sm",
        fontSize_md: "px-4 py-2",
        fontSize_lg: "px-6 py-3 text-lg",
      },
      input: {
        base: "outline-none transition-colors focus:ring-2 focus:ring-opacity-50",

        type_text: "",
        type_password: "",
        type_email: "",
        type_number: "",
        type_search: "",

        variant_outlined: "border border-gray-300 rounded-md focus:border-blue-500",
        variant_filled: "bg-gray-100 border-2 border-transparent rounded-md focus:bg-white focus:border-blue-500",
        variant_standard: "border-b-2 border-gray-300 rounded-none px-0 focus:border-blue-500",

        size_sm: "px-2 py-1 text-sm",
        size_md: "px-3 py-2 text-base",
        size_lg: "px-4 py-3 text-lg",

        color_default: "focus:ring-blue-500",
        color_primary: "focus:ring-blue-500",
        color_secondary: "focus:ring-gray-500",
        color_success: "focus:ring-green-500",
        color_warning: "focus:ring-yellow-500",
        color_error: "focus:ring-red-500",

        disabled: "bg-gray-100 text-gray-400 cursor-not-allowed",
        enabled: "",

        error: "border-red-500 focus:ring-red-500",
        noError: "",

        fullWidth: "w-full",
        defaultWidth: "w-auto",
      },
      card: {
        base: "bg-white text-black shadow-lg rounded-xl max-w-80 max-h-full overflow-hidden",
        baseEffect: "transition duration-300 hover:-translate-y-4 hover:shadow-md",

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
        height_full: "h-full",
      },
      cardHeader: {
        base: "px-4 py-3 flex items-center",
        title: "text-lg font-semibold text-gray-800 mb-1 break-words ",
        subtitle: "text-sm text-gray-500 break-words",
        variant_default: "bg-white",
        variant_filled: "bg-blue-300",
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

        display_flex: "flex",
        display_block: "block",

        variant_h1: "text-5xl font-light mb-2",
        variant_h2: "text-4xl font-light mb-2",
        variant_h3: "text-3xl font-normal mb-2",
        variant_h4: "text-2xl font-normal mb-1",
        variant_h5: "text-xl font-medium mb-1",
        variant_h6: "text-lg font-medium mb-1",
        variant_subtitle1: "text-base font-normal",
        variant_subtitle2: "text-sm font-medium",
        variant_body1: "text-xs font-normal",
        variant_body2: "text-body font-normal",
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
        base: "rounded-md transition-all flex-wrap",

        display_block: "block",
        display_flex: "flex",
        display_grid: "grid",
        display_inline: "inline",
        "display_inline-block": "inline-block",

        direction_row: "flex-row",
        direction_row_reverse: "flex-row-reverse",
        direction_col: "flex-col",
        direction_col_reverse: "flex-col-reverse",

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

        variant_none: "",
        variant_outlined: "border border-gray-400",
        variant_filled: "bg-gray-100",
        variant_elevated: "shadow-md",

        color_default: "bg-white",
        color_primary: "bg-blue-600",
        color_secondary: "bg-gray-500",
        color_transparent: "bg-transparent",

        gap_sm: "gap-2",
        gap_md: "gap-4",
        gap_large: "gap-8",

        align_left: "text-left",
        align_right: "text-right",
        align_start: "text-start",
        align_center: "text-center",
      },
      chip: {
        base: "inline-flex items-center rounded-full transition-colors rounded-full px-3 py-1 text-sm font-medium w-fit grow-0",

        variant_default: "bg-gray-400 text-gray-800 hover:bg-gray-200",
        variant_primary: "bg-blue-400 text-blue-800 hover:bg-blue-500",
        variant_success: "bg-green-400 text-green-800 hover:bg-green-200",
        variant_warning: "bg-yellow-400 text-yellow-800 hover:bg-yellow-200",
        variant_error: "bg-red-400 text-red-800 hover:bg-red-200",

        size_sm: "px-0 py-0.5 text-xs",
        size_md: "px-3 py-1 text-sm",
        size_lg: "px-4 py-1.5 text-base",
      },

      list: {
        base: "list-disc list-outside ml-2  p-0 w-full",
        variant_default: "bg-white rounded",
        variant_outlined: "bg-white border border-gray-200 rounded",
        variant_elevation: "bg-white shadow-md rounded",

        spacing_none: "space-y-0",
        spacing_sm: "space-y-1",
        spacing_md: "space-y-2",
        spacing_lg: "space-y-3",

        padding_none: "p-0",
        padding_sm: "p-2",
        padding_md: "p-4",
        padding_lg: "p-6",

        dividers: "divide-y divide-gray-200",
        noDividers: "",
      },

      listItem: {
        base: "items-center w-full ",
        normal: "py-2",
        selected: "bg-blue-50",
        unselected: "",
        disabled: "opacity-50 pointer-events-none",
        enabled: "",
        clickable: "cursor-pointer hover:bg-gray-50 focus:outline-none focus:bg-gray-100",

        primaryText: "text-sm font-medium text-gray-900",
        secondaryText: "text-xs text-gray-500 mt-0.5",
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
        base: "inline-flex items-center rounded-full transition-colors rounded-full px-3 py-1 text-sm font-medium w-fit grow-0",

        variant_default: "bg-gray-100 text-gray-800 hover:bg-gray-200",
        variant_primary: "bg-blue-100 text-blue-800 hover:bg-blue-200",
        variant_success: "bg-green-100 text-green-800 hover:bg-green-200",
        variant_warning: "bg-yellow-100 text-yellow-800 hover:bg-yellow-200",
        variant_error: "bg-red-100 text-red-800 hover:bg-red-200",

        size_sm: "px-2 py-0.5 text-xs",
        size_md: "px-3 py-1 text-sm",
        size_lg: "px-4 py-1.5 text-base",

        outlined_default: "border border-gray-300 bg-transparent text-gray-800",
        outlined_primary: "border border-blue-300 bg-transparent text-blue-800",
        outlined_success: "border border-green-300 bg-transparent text-green-800",
        outlined_warning: "border border-yellow-300 bg-transparent text-yellow-800",
        outlined_error: "border border-red-300 bg-transparent text-red-800",
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
