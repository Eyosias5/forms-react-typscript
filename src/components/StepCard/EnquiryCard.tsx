import React from "react";
import { Container, FormContainer } from "./styles";
import { Banner } from "./Banner";

const EnquiryCard: React.FC = ({ children }) => {
  return (
    <Container>
      <Banner  />
      <FormContainer>{children}</FormContainer>
    </Container>
  );
};

export default EnquiryCard;
