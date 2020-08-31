import styled from "styled-components";

export const Container = styled.div`
  background: ${({ theme }) => theme.primary_5};
  height: 100vh;

  .side-note {
    padding: 44px 64px;
  }
`;

export const Overlay = styled.div`
  ${({ theme }) => theme.overlay};
`;
