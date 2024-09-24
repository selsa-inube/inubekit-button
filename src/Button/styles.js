import styled from "styled-components";
import { Link } from "react-router-dom";
import { tokens } from "./Tokens/tokens";

const StyledButton = styled.button`
  box-sizing: border-box;
  padding: ${({ $spacing }) => ($spacing === "compact" ? "4px" : "8px")} 16px;
  transition: all 0.3s ease;
  min-width: 100px;
  max-width: ${({ $fullwidth }) => ($fullwidth ? "none" : "300px")};
  width: ${({ $fullwidth }) => {
    if ($fullwidth) {
      return "100%";
    }

    return "fit-content";
  }};

  background-color: ${({
    theme,
    $appearance,
    $variant,
    $disabled,
    $parentHover,
  }) => {
    if ($variant === "filled") {
      if ($disabled) {
        return (
          theme?.button?.[$appearance].content?.color?.disabled ||
          tokens[$appearance].content.color.disabled
        );
      }
      if ($parentHover)
        return (
          theme?.button?.[$appearance].content?.color?.hover ||
          tokens[$appearance].content.color.hover
        );
      return (
        theme?.button?.[$appearance].content?.color?.regular ||
        tokens[$appearance].content.color.regular
      );
    }
    return "transparent";
  }};

  border-radius: 8px;
  border-width: 1px;
  border-style: ${({ $variant }) =>
    $variant === "outlined" ? "solid" : "none"};
  border-color: ${({
    theme,
    $appearance,
    $variant,
    $disabled,
    $parentHover,
  }) => {
    if ($disabled) {
      if ($variant !== "outlined") {
        return "transparent";
      }
      return (
        theme?.button?.[$appearance].border?.color?.disabled ||
        tokens[$appearance].border.color.disabled
      );
    }
    if ($parentHover && $variant !== "none")
      return (
        theme?.button?.[$appearance].border?.color?.hover ||
        tokens[$appearance].border.color.hover
      );
    if ($variant === "none") {
      return "transparent";
    }

    return (
      theme?.button?.[$appearance].border?.color?.regular ||
      tokens[$appearance].border.color.regular
    );
  }};

  cursor: ${({ $disabled, $loading }) => {
    if ($disabled) {
      return "not-allowed";
    }

    if ($loading.toString() === "true") {
      return "progress";
    }

    return "pointer";
  }};

  &:hover {
    border-color: ${({
      theme,
      $appearance,
      $variant,
      $disabled,
      $cursorHover,
    }) => {
      if (!$disabled && $cursorHover) {
        if ($variant === "none") {
          return "transparent";
        }
        return (
          theme?.button?.[$appearance].border?.color?.hover ||
          tokens[$appearance].border.color.hover
        );
      }
    }};

    background-color: ${({
      theme,
      $appearance,
      $variant,
      $disabled,
      $cursorHover,
    }) => {
      if (!$disabled && $cursorHover && $variant === "filled") {
        return (
          theme?.button?.[$appearance].content?.color?.hover ||
          tokens[$appearance].content.color.hover
        );
      }
      if (!$disabled && $cursorHover && $variant === "none") {
        return "transparent";
      }
    }};
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export { StyledButton, StyledLink };
