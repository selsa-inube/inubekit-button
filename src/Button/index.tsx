import { Icon } from "@inubekit/icon";
import { Text } from "@inubekit/text";
import { Spinner } from "@inubekit/spinner";
import { Stack } from "@inubekit/stack";
import { inube } from "@inubekit/foundations";
import { Appearance, Type, Spacing, Variant } from "./props";

import { StyledButton, StyledLink } from "./styles";

export interface IButton {
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

function childrenAppearence(
  variant: Variant,
  disabled: boolean,
  appearance: Appearance,
) {
  if (variant === "filled") {
    if (disabled) {
      return inube.button[appearance].contrast.appearance;
    }
    return inube.button[appearance].contrast.appearance;
  }

  return appearance;
}

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
      onClick={disabled ? null : onClick}
      $cursorHover={cursorHover}
      $parentHover={parentHover}
    >
      {loading && !disabled ? (
        <Spinner
          appearance={
            childrenAppearence(variant, disabled, appearance) as Exclude<
              Appearance,
              "gray"
            >
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
              appearance={childrenAppearence(variant, disabled, appearance)}
              disabled={disabled}
              cursorHover={cursorHover}
              parentHover={parentHover}
            />
          )}
          <Text
            type="label"
            size="large"
            appearance={
              childrenAppearence(variant, disabled, appearance) as Appearance
            }
            disabled={disabled}
            ellipsis={true}
            cursorHover={cursorHover}
            parentHover={parentHover}
            textAlign="start"
          >
            {children}
          </Text>
          {iconAfter && (
            <Icon
              icon={iconAfter}
              spacing="none"
              size="18px"
              appearance={childrenAppearence(variant, disabled, appearance)}
              disabled={disabled}
              cursorHover={cursorHover}
              parentHover={parentHover}
            />
          )}
        </Stack>
      )}
    </StyledButton>
  );
};

export const Button = (props: IButton) => {
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
