import styled from "styled-components";
import { Link } from "react-router-dom";
import { inube } from "@inubekit/foundations";

const StyledButton = styled.button`
  padding: 0 16px;
  transition: all 0.3s ease;
  border-radius: 8px;
  border: none;
  border-width: 1px;
  min-width: 100px;
  width: ${({ $fullwidth }) => {
    if ($fullwidth) {
      return "100%";
    }

    return "fit-content";
  }};
  max-width: ${({ $fullwidth }) => ($fullwidth ? "none" : "300px")};
  height: ${({ $spacing }) => ($spacing === "compact" ? "28px" : "36px")};
  border-style: ${({ $variant }) =>
    $variant === "outlined" ? "solid" : "none"};

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
          inube.button[$appearance].content.color.disabled
        );
      }
      if ($parentHover)
        return (
          theme?.button?.[$appearance].content?.color?.hover ||
          inube.button[$appearance].content.color.hover
        );
      return (
        theme?.button?.[$appearance].content?.color?.regular ||
        inube.button[$appearance].content.color.regular
      );
    }
    return "transparent";
  }};

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
        inube.button[$appearance].border.color.disabled
      );
    }
    if ($parentHover && $variant !== "none")
      return (
        theme?.button?.[$appearance].border?.color?.hover ||
        inube.button[$appearance].border.color.hover
      );
    if ($variant === "none") {
      return "transparent";
    }

    return (
      theme?.button?.[$appearance].border?.color?.regular ||
      inube.button[$appearance].border.color.regular
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
          inube.button[$appearance].border.color.hover
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
          inube.button[$appearance].content.color.hover
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
