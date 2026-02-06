import { defineTokens } from "@pandacss/dev";

export const fonts = defineTokens({
  fonts: {
    body: { value: "Lora, serif" },
    heading: { value: "Alice, serif" },
  },
});

export const fontSizes = defineTokens({
  fontSizes: {
    body: { value: "18px" },
    caption: { value: "15px" },
    meta: { value: "13px" },
    h1: { value: "52px" },
    h2: { value: "38px" },
    h3: { value: "30px" },
    h4: { value: "23px" },
  },
});

export const lineHeights = defineTokens({
  lineHeights: {
    body: { value: 1.7 },
    heading: { value: 1.2 },
  },
});

export const letterSpacings = defineTokens({
  letterSpacings: {
    heading: { value: "-0.01em" },
    body: { value: "0" },
  },
});

export const fontWeights = defineTokens({
  fontWeights: {
    regular: { value: 400 },
    medium: { value: 500 },
    bold: { value: 700 },
  },
});

export const radii = defineTokens({
  radii: {
    sm: { value: "6px" },
    md: { value: "12px" },
    lg: { value: "18px" },
  },
});

export const colors = defineTokens({
  colors: {
    bg: { value: "#0f0f10" },
    surface: { value: "#18181a" },
    textPrimary: { value: "#f5f5f5" },
    textSecondary: { value: "#a0a0a5" },
    accent: { value: "#c8a96a" },
  },
});
