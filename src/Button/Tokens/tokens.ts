import { inube } from "@inubekit/foundations";

const tokens = {
  primary: {
    content: {
      color: {
        regular: inube.palette.blue.B400,
        disabled: inube.palette.neutral.N20,
        hover: inube.palette.blue.B300,
      },
    },
    border: {
      color: {
        regular: inube.palette.blue.B400,
        disabled: inube.palette.neutral.N70,
        hover: inube.palette.blue.B300,
      },
    },
    contrast: {
      appearance: "light",
    },
  },
  success: {
    content: {
      color: {
        regular: inube.palette.green.G400,
        disabled: inube.palette.neutral.N20,
        hover: inube.palette.green.G300,
      },
    },
    border: {
      color: {
        regular: inube.palette.green.G400,
        disabled: inube.palette.neutral.N70,
        hover: inube.palette.green.G300,
      },
    },
    contrast: {
      appearance: "light",
    },
  },
  warning: {
    content: {
      color: {
        regular: inube.palette.yellow.Y400,
        disabled: inube.palette.neutral.N20,
        hover: inube.palette.yellow.Y300,
      },
    },
    border: {
      color: {
        regular: inube.palette.yellow.Y400,
        disabled: inube.palette.neutral.N70,
        hover: inube.palette.yellow.Y300,
      },
    },
    contrast: {
      appearance: "dark",
    },
  },
  danger: {
    content: {
      color: {
        regular: inube.palette.red.R400,
        disabled: inube.palette.neutral.N20,
        hover: inube.palette.red.R300,
      },
    },
    border: {
      color: {
        regular: inube.palette.red.R400,
        disabled: inube.palette.neutral.N70,
        hover: inube.palette.red.R300,
      },
    },
    contrast: {
      appearance: "light",
    },
  },
  help: {
    content: {
      color: {
        regular: inube.palette.purple.P400,
        disabled: inube.palette.neutral.N20,
        hover: inube.palette.purple.P300,
      },
    },
    border: {
      color: {
        regular: inube.palette.purple.P400,
        disabled: inube.palette.neutral.N70,
        hover: inube.palette.purple.P300,
      },
    },
    contrast: {
      appearance: "light",
    },
  },
  dark: {
    content: {
      color: {
        regular: inube.palette.neutral.N900,
        disabled: inube.palette.neutral.N20,
        hover: inube.palette.neutral.N500,
      },
    },
    border: {
      color: {
        regular: inube.palette.neutral.N900,
        disabled: inube.palette.neutral.N70,
        hover: inube.palette.neutral.N500,
      },
    },
    contrast: {
      appearance: "light",
    },
  },
  gray: {
    content: {
      color: {
        regular: inube.palette.neutral.N20,
        disabled: inube.palette.neutral.N20,
        hover: inube.palette.neutral.N30,
      },
    },
    border: {
      color: {
        regular: inube.palette.neutral.N200,
        disabled: inube.palette.neutral.N70,
        hover: inube.palette.neutral.N90,
      },
    },
    contrast: {
      appearance: "gray",
    },
  },
  light: {
    content: {
      color: {
        regular: inube.palette.neutral.N20,
        disabled: inube.palette.neutral.N20,
        hover: inube.palette.neutral.N0,
      },
    },
    border: {
      color: {
        regular: inube.palette.neutral.N20,
        disabled: inube.palette.neutral.N70,
        hover: inube.palette.neutral.N0,
      },
    },
    contrast: {
      appearance: "dark",
    },
  },
};

export { tokens };
