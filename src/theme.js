import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#DCC69D", // Main accent color
      red: "#e92a2f",
    },
    secondary: {
      main: "#36332F", // Supporting secondary color
    },
    background: {
      default: "#FDFDFC", // Default page background
      paper: "#FFF", // Card or container background
    },
    text: {
      primary: "#2E2E2E", // Main text color
      secondary: "#999999", // Muted text color
      disabled: "#d1d1d1", // Disabled text color
      white:'#FDFDFC'
    },
    grey: {
      100: "#F7F7F7",
      200: "#EFEFEF",
      300: "#d1d1d1",
      400: "#999999",
      800: "#3A3A3A",
    },
    error: {
      main: "#e92a2f", // Accent color for errors
    },
    success: {
      main: "#4dc463", // Light blue to indicate success
    },
    info: {
      main: "#4A4A4A", // Swiper theme color for informational highlights
    },
    warning: {
      main: "#36332F", // Use a dark shade for warnings
    },
  },
  typography: {
    fontFamily: ["Jost", "Italiana", "Reddit Sans", "sans-serif"].join(","),
    h1: {
      fontWeight: 600,
      color: "#2E2E2E", // Ensures headers match your design
    },
    h2: {
      fontWeight: 600,
      color: "#2E2E2E",
    },
    h3: {
      fontWeight: 600,
      color: "#2E2E2E",
    },
    body1: {
      color: "#2E2E2E",
    },
    body2: {
      color: "#999999",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "uppercase",
          color: "#2E2E2E",
          borderRadius:'0px',
          borderColor: "#2E2E2E",
          "&:hover": {
            color: "#e92a2f",
          },
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          background: "none",
          borderBottom: "1px solid #2E2E2E",
          "&:focus": {
            boxShadow: "none",
            borderBottom: "1px solid #e92a2f",
          },
        },
        input: {
          color: "#2E2E2E",
          "&::placeholder": {
            color: "#999999",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          background: 'transparent',
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          "&.Mui-checked": {
            color: "#e92a2f",
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "#2E2E2E",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 0, // Removes border radius for all outlined inputs
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          borderRadius: 0, // Removes border radius for other types of inputs
        },
      },
    },
  },
});

export default theme;
