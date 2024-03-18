import { Icon } from "@inubekit/icon";
import { Text } from "@inubekit/text";
import { Spinner } from "@inubekit/spinner";
import { Stack } from "@inubekit/stack";
import { inube } from "@inubekit/foundations";
import { Appearance, Type, Spacing, Variant } from "./props";

import { StyledButton, StyledLink } from "./styles";
import { useState } from "react";

interface IButton {
  children?: React.ReactNode;
  appearance?: Appearance;
  loading?: boolean;
  disabled?: boolean;
  iconBefore?: React.ReactElement;
  iconAfter?: React.ReactElement;
  type?: Type;
  spacing?: Spacing;
  variant?: Variant;
  fullwidth?: boolean;
  onClick?: (e?: Event) => void;
  path?: string;
  cursorHover?: boolean;
  parentHover?: boolean;
}

const determineParentHover = (
  variant: string,
  cursorHover: boolean,
  isHovered: boolean,
  parentHover: boolean,
) => {
  if (variant === "filled") {
    return false;
  }
  return cursorHover && !parentHover ? isHovered : parentHover;
};

const ButtonStructure = (props: IButton) => {
  const {
    children,
    appearance = "primary",
    loading = false,
    disabled = false,
    iconBefore,
    iconAfter,
    type = "button",
    spacing = "wide",
    variant = "filled",
    fullwidth = false,
    onClick,
    cursorHover = false,
    parentHover = false,
  } = props;

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const interceptClick = (e: Event) => {
    try {
      onClick && onClick(e);
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error("An unknown error occurred");
      }
    }
  };

  const helperParentHover = determineParentHover(
    variant,
    cursorHover,
    isHovered,
    parentHover,
  );

  return (
    <StyledButton
      $appearance={appearance}
      $loading={loading!.toString()}
      $disabled={disabled}
      $iconBefore={iconBefore}
      $iconAfter={iconAfter}
      $type={type}
      $spacing={spacing}
      $variant={variant}
      $fullwidth={fullwidth}
      onClick={disabled ? null : interceptClick}
      $cursorHover={cursorHover}
      $parentHover={parentHover}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {loading && !disabled ? (
        <Spinner
          appearance={
            variant === "filled"
              ? (inube.button[appearance].contrast.appearance as Appearance)
              : appearance
          }
          transparent={variant === "filled"}
          size="small"
        />
      ) : (
        <Stack alignItems="center" justifyContent="center">
          {iconBefore && (
            <Icon
              icon={iconBefore}
              spacing="none"
              size="18px"
              appearance={
                variant === "filled"
                  ? (inube.button[appearance].contrast.appearance as Appearance)
                  : appearance
              }
              disabled={disabled}
              parentHover={helperParentHover}
            />
          )}
          <Text
            type="label"
            size="large"
            appearance={
              variant === "filled"
                ? (inube.button[appearance].contrast.appearance as Appearance)
                : appearance
            }
            disabled={disabled}
            ellipsis={true}
            parentHover={helperParentHover}
            textAlign="start"
          >
            {children}
          </Text>
          {iconAfter && (
            <Icon
              icon={iconAfter}
              spacing="none"
              size="18px"
              appearance={
                variant === "filled"
                  ? (inube.button[appearance].contrast.appearance as Appearance)
                  : appearance
              }
              disabled={disabled}
              parentHover={helperParentHover}
            />
          )}
        </Stack>
      )}
    </StyledButton>
  );
};

const Button = (props: IButton) => {
  const { type = "button", path } = props;

  if (type === "link" && !path) {
    console.warn("You must provide a path to use a link button");
  }

  if (type === "link") {
    return (
      <StyledLink to={path}>
        <ButtonStructure {...props} />
      </StyledLink>
    );
  }

  return <ButtonStructure {...props} />;
};

export { Button };
export type { IButton };