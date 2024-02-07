import styled from "styled-components";
import { Link } from "react-router-dom";

import { inube } from "@inubekit/foundations";

const spacing = {
  compact: {
    height: "28px",
  },
  wide: {
    height: "36px",
  },
};

export const StyledButton = styled.button`
  padding: ${inube.spacing.s0} ${inube.spacing.s200};
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
  ${({ $spacing }) => spacing[$spacing]};
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
          theme?.color?.surface?.[$appearance]?.disabled ||
          inube.color.surface[$appearance].disabled
        );
      }
      if ($parentHover)
        return (
          theme?.color?.surface?.[$appearance]?.hover ||
          inube.color.surface[$appearance].hover
        );
      return (
        theme?.color?.surface?.[$appearance]?.regular ||
        inube.color.surface[$appearance].regular
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
        theme?.color?.stroke?.[$appearance]?.disabled ||
        inube.color.stroke[$appearance].disabled
      );
    }
    if ($parentHover && $variant !== "none")
      return (
        theme?.color?.stroke?.[$appearance]?.hover ||
        inube.color.stroke[$appearance].hover
      );
    if ($variant === "none") {
      return "transparent";
    }

    return (
      theme?.color?.stroke?.[$appearance]?.regular ||
      inube.color.stroke[$appearance].regular
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
          theme?.color?.stroke?.[$appearance]?.hover ||
          inube.color.stroke[$appearance].hover
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
          theme?.color?.surface?.[$appearance]?.hover ||
          inube.color.surface[$appearance].hover
        );
      }
      if (!$disabled && $cursorHover && $variant === "none") {
        return "transparent";
      }
    }};
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;
