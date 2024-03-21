const appearances = [
  "primary",
  "success",
  "warning",
  "danger",
  "help",
  "dark",
  "gray",
  "light",
] as const;

type IButtonAppearance = (typeof appearances)[number];

const spacings = ["wide", "compact"] as const;

type IButtonSpacing = (typeof spacings)[number];

const types = ["button", "submit", "reset", "link"] as const;

type IButtonType = (typeof types)[number];

const variants = ["filled", "outlined", "none"] as const;

type IButtonVariant = (typeof variants)[number];

const props = {
  parameters: {
    docs: {
      description: {
        component:
          "Button help people take action, such as sending an email, sharing a document, or liking a comment.",
      },
    },
  },
  children: {
    control: { type: "text" },
    description: "the text to be displayed",
  },
  loading: {
    options: [false, true],
    control: { type: "boolean" },
    description: "conditionally show a spinner over the top of a button",
    table: {
      defaultValue: { summary: false },
    },
  },
  appearance: {
    options: appearances,
    control: { type: "select" },
    description: "the base styling to apply to the button",
    table: {
      defaultValue: { summary: "primary" },
    },
  },
  disabled: {
    options: [true, false],
    control: { type: "boolean" },
    description: "set if the button is disabled",
    table: {
      defaultValue: { summary: false },
    },
  },
  iconBefore: {
    options: "",
    control: { type: "string" },
    description: "places an icon within the button, before the button's text",
  },
  iconAfter: {
    options: "",
    control: { type: "string" },
    description: "places an icon within the button, after the button's text",
  },
  type: {
    options: types,
    control: { type: "select" },
    description: "pass type down to a button",
    table: {
      defaultValue: { summary: "button" },
    },
  },
  spacing: {
    options: spacings,
    control: { type: "select" },
    description: "pass type down to a button",
    table: {
      defaultValue: { summary: "wide" },
    },
  },
  variant: {
    options: variants,
    control: { type: "select" },
    description: "pass type down to a button",
    table: {
      defaultValue: { summary: "filled" },
    },
  },
  fullwidth: {
    options: [true, false],
    control: { type: "boolean" },
    description: "option to fit button width to its parent width",
    table: {
      defaultValue: { summary: false },
    },
  },
  onClick: {
    options: ["logState"],
    control: { type: "func" },
    description: "function to control button click",
  },
  path: {
    description:
      "Is the path where the button is going to navigate when is used as button for navigation",
  },
  cursorHover: {
    options: [false, true],
    control: { type: "boolean" },
    description: "whether the button changes upon cursor hover",
    table: {
      defaultValue: { summary: false },
    },
  },
  parentHover: {
    options: [false, true],
    control: { type: "boolean" },
    description: "whether the button changes upon its parent hover",
    table: {
      defaultValue: { summary: false },
    },
  },
};

export { appearances, props, spacings, variants, types };
export type { IButtonAppearance, IButtonSpacing, IButtonType, IButtonVariant };
