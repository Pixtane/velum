import { styled } from "$/styled-system/jsx";

// Headings
export const Title = styled("h1", {
  base: {
    fontFamily: "heading",
    fontSize: "h1",
    lineHeight: "heading",
    letterSpacing: "heading",
    marginBottom: "4",
  },
});

export const Subtitle = styled("p", {
  base: {
    fontFamily: "body",
    fontSize: "subtitle",
    lineHeight: "body",
    color: "textSecondary",
    marginBottom: "6",
  },
});

export const Caption = styled("p", {
  base: {
    fontFamily: "body",
    fontSize: "caption",
    lineHeight: "body",
    color: "textSecondary",
  },
});
