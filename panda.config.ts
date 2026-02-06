import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        fonts: {
          body: { value: "Lora, serif" },
          heading: { value: "Alice, serif" },
        },
        fontSizes: {
          subtitle: { value: "18px" },
          body: { value: "16px" },
          caption: { value: "15px" },
          meta: { value: "13px" },
          h1: { value: "52px" },
          h2: { value: "38px" },
          h3: { value: "30px" },
          h4: { value: "23px" },
        },
        lineHeights: {
          body: { value: 1.7 },
          heading: { value: 1.2 },
        },
        letterSpacings: {
          heading: { value: "-0.01em" },
          body: { value: "0" },
        },
        fontWeights: {
          regular: { value: 400 },
          medium: { value: 500 },
          bold: { value: 700 },
        },
        radii: {
          sm: { value: "6px" },
          md: { value: "12px" },
          lg: { value: "18px" },
        },
        colors: {
          bg: { value: "#F9F7F2" },
          surface: { value: "#f5f5f7" },
          textPrimary: { value: "#1c1c1e" },
          textSecondary: { value: "#5f6368" },
          textTertiary: { value: "#a1a1a6" },
          accent: { value: "#c48f5e" },
          accentHover: { value: "#a96e3b" },
          error: { value: "#e35c5c" },
          success: { value: "#50c878" },
          divider: { value: "#d1d1d6" },
          border: { value: "#c1c1c6" },
          borderActive: { value: "#6e6e73" },
          ink: { value: "#121210" },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",

  jsxFramework: "react",
  jsxStyleProps: "all",
  jsxFactory: "styled",
});
