import { styled } from "$/styled-system/jsx";
import { motion } from "framer-motion";

// Email input
export const EmailInput = styled("input", {
  base: {
    padding: "6 14",
    fontSize: "body",
    fontStyle: "italic",
    width: "60",
    borderBottomWidth: "0.5px",
    borderStyle: "solid",
    borderColor: "ink",
    outline: "none",
    transition: "border-color 0.3s, color 0.3s", // smooth transition
    _focus: { borderColor: "borderActive" },
  },
});

// Waitlist button
export const WaitlistButton = styled(motion.button, {
  base: {
    fontSize: "body",
    fontWeight: "medium",
    letterSpacing: "0.15em",
    padding: "6 20",
    color: "textPrimary",
    cursor: "pointer",
    background: "transparent",
    position: "relative",
    overflow: "hidden",
    transition: "color 0.3s ease", // text color
    _after: {
      content: '""',
      position: "absolute",
      left: "12px",
      bottom: "6px",
      height: "1px",
      width: "calc(100% - 28px)",
      backgroundColor: "ink",
      transform: "scaleX(0)",
      transformOrigin: "center",
      transition: "transform 0.6s cubic-bezier(0.25, 0.8, 0.25, 1) 0.2s", // slower, smoother
    },
    _hover: {
      color: "textPrimaryHover",
      _after: {
        transform: "scaleX(1)",
      },
    },
  },
});
