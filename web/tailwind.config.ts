import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{tsx,js}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        pinkPrimary: "#A71B4A",
        warning: "#DDD92A",
        surface: "#F3F4F5",
        border: "#E1E4E7",
      },
    },
  },
  plugins: [],
};
export default config;
