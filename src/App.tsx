import React from "react";
import "./App.css";
import { GlobalStyle, theme } from "./Theme/globalStyles";
import { ThemeProvider } from "styled-components";
import EnquiryForm from "./Pages/EnquiryForm";
import { EnquiryProvider } from "./context/EnquiryContext";

function App() {
  return (
    <EnquiryProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <EnquiryForm />
      </ThemeProvider>
    </EnquiryProvider>
  );
}

export default App;
