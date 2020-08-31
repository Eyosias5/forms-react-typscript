import React from "react";
import { Container } from "./styles";

type Props = {
  step: number;
};
export const SideNote = (props: Props) => {
  return (
    <Container>
      <img
        alt="step-1"
        src={require(`../../assets/steps/Step-${props.step}.svg`)}
      />
    </Container>
  );
};
