import React from "react";
import { Container, Overlay } from "./styles";
import EnquiryCard from "../components/StepCard/EnquiryCard";
import { SideNote } from "../components/SideNote";
import EnquiryStep2 from "../components/Forms/Enquiry/Step2";

const EnquiryForm = () => {
  return (
    <Container>
      <Overlay />
      <EnquiryCard>
        <SideNote step={2} />
        <EnquiryStep2 />
      </EnquiryCard>
    </Container>
  );
};

export default EnquiryForm;
