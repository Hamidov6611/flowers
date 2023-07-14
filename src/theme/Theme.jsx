import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
    colors: {
        primaryBackground: "#EDFCD6",
        secondaryBackground: "#8C5C38;",
        cardBackground: "rgba(44, 81, 70, 0.48)",
        primaryColor: "#443926",
        whiteColor: "#FFFFFF",
        blackColor: "#15100C",
    }
};

const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;