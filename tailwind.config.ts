import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@premieroctet/next-admin/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'purple': "#5902B6",
        "mint": "#70C2BF",
        "pink": "#DA6CC6",
        "primary": "#5902B6",
        "gray-900": "#464646",
        "gray-400": "#9B9B9B",
        "input": "#00000020",
        // background: "var(--background)",
        // foreground: "var(--foreground)",
        // nextadmin: {
        //   background: {
        //     default: "var(--background)"
        //   },
        //   foreground: "var(--foreground)"
        // },
        // // Dark mode colors
        // "dark-nextadmin": {
        //   background: {
        //     default: "var(--background)"
        //   },
        // }
      },
      fontFamily: {
        'font-serif': "var(--serif)",
        'font-sans': "Segoe UI Symbol"
      },
    },
  },
  plugins: [],
  darkMode: "class",
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  presets: [require("@premieroctet/next-admin/preset")],
};
export default config;
