import React from "react";
import styled from "styled-components";

export const Hello = styled.div`
  background: ${({ theme }) => theme.primary_1};
`;

const EnquiryForm = () => {
  return (
    <Hello>
      <h1>Hi</h1>
    </Hello>
  );
};

export default EnquiryForm;
