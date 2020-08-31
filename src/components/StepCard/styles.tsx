import styled from "styled-components";

export const Container = styled.div`
  background: white;
  border-radius: 10px;
  height: 533px;
  width: 892px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const FormContainer = styled.div`
  display: grid;

  grid-template-rows: auto 1fr;
  grid-template-columns: 1fr 1fr;
`;

export const BannerContainer = styled.div`
  height: 10px;
  background: ${({ theme }) => theme.primary_4};
`;

export const Step = styled.div`
  width: 33.33%;
  height: 100%;
  background: ${({ theme }) => theme.primary_1};
`;
