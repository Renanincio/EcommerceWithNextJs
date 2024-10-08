import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    './src/**/*.{tsx,js}',
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
