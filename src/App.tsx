import React from "react";
import "./App.css";
import { GlobalStyle, theme } from "./Theme/globalStyles";
import { ThemeProvider } from "styled-components";
import EnquiryForm from "./Pages/EnquiryForm";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <EnquiryForm />
    </ThemeProvider>
  );
}

export default App;
