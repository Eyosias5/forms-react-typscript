import React, { ReactNode } from "react";
import {
  StyledInput,
  StyledLabel,
  StyledTextArea,
  StyledCheckboxLabel,
  StyledCheckboxWrapper,
  StyledSaveAndContinue,
  StyledSelect,
  StyledOptions,
} from "./styles";

type Props = {
  inputType?: string;
  children?: ReactNode;
  size?: string;
};

type CheckboxWrapperProps = {
  children: ReactNode;
  title: string;
};

type SelectProps = {
  children: ReactNode;
  title: string;
};

export const Input = (props: Props) => (
  <StyledLabel size={props.size}>
    {props.children}
    <StyledInput type={props.inputType} />
  </StyledLabel>
);

export const TextArea = (props: Props) => (
  <StyledLabel>
    {props.children}
    <StyledTextArea maxRows={9} />
  </StyledLabel>
);

export const Checkbox = (props: Props) => (
  <StyledCheckboxLabel>
    <StyledInput type={props.inputType} />
    {props.children}
  </StyledCheckboxLabel>
);

export const CheckboxWrapper: React.FC<CheckboxWrapperProps> = ({
  children,
  title,
}) => (
  <StyledCheckboxWrapper>
    <StyledLabel> {title} </StyledLabel>
    <div> {children}</div>
  </StyledCheckboxWrapper>
);

export const Select: React.FC<SelectProps> = ({ children, title }) => (
  <>
    <StyledLabel> {title} </StyledLabel>
    <StyledSelect id="myList">{children}</StyledSelect>
  </>
);
export const Option: React.FC = ({ children }) => (
  <StyledOptions>{children}</StyledOptions>
);
export const SaveAndContinue = () => (
  <StyledSaveAndContinue type="submit">Save and Continue</StyledSaveAndContinue>
);
