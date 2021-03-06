import { createGlobalStyle, css } from "styled-components";

export const snippets = {
  overlay: css`
    background: ${({ theme }) => theme.secondary};
    clip-path: polygon(0 0, 100% 0, 100% 25%, 0 52%);
    height: 100vh;
    width: 100vw;
    position: absolute;
  `,
};

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    border-sizing: border-box;
}
`;

export const theme = {
  primary_1: "#51BAF7",
  primary_2: "#3CAAEA",
  primary_3: "#73C4F3",
  primary_4: "#B2E0FB",
  primary_5: "#EFF9FF",
  secondary: "#102A43",
  grey_1: "#1F2933",
  grey_2: "#3E4C59",
  grey_3: "#7B8794",
  grey_4: "#CDD7E3",
  grey_5: "#F0F4f8",
  success: "#2DCCA7",
  warning: "#F7D070",
  error: "#D64545",
  ...snippets,
};
