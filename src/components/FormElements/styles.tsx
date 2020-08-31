import styled, { css } from "styled-components";
import Textarea from "react-textarea-autosize";

interface Props {
  size?: string;
}
export const StyledLabel = styled.label<Props>`
  display: flex;
  flex-direction: column;
  margin-top: 12px;
  width: ${(props) => (props.size ? `${props.size}px` : "283px")};
  font-size: 14px;
  font-weight: 500px;
  line-height: 30px;
`;
export const StyledInput = styled.input`
  flex: 1 0 auto;
  padding: 8px 14px;
  border-radius: 8px;
  border: 1px solid #dce1e7;
  background: #ffffff;
  box-shadow: none;
  &:focus {
    border-color: #dce1e7;
  }

  ${(props) =>
    props.type === "checkbox" &&
    css`
      flex: initial;
      width: initial;
      margin-right: 0.5em;
      margin-top: 0.2em;
    `}
  }
`;

export const StyledTextArea = styled(Textarea)`
  border: 1px solid #dce1e7;
  background: #ffffff;
  font-weight: 500;
  font-size: 14px;
  box-shadow: none;
  padding: 8px 14px;
  border-radius: 8px;
  margin-top: 2px;
  min-height: 100px;
`;

export const StyledCheckboxLabel = styled.label`
  display: flex;
  flex-direction: row;
  margin-right: 17px;
  font-size: 14px;
`;
export const StyledCheckboxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 283px;
  width: 283px;
  div {
    display: flex;
  }
`;

export const StyledSaveAndContinue = styled.button`
  border-radius: 10px;
  background: #51baf7;
  height: 36px;
  width: 283px;
  border: 0;
  padding: 0;
  margin: 0;
  color: white;
  margin-top: 21px;
  font-weight: bold;
  font-size: 16px;
`;

export const StyledSelect = styled.select`
  display: block;
  width: 289px;
  height: 36px;
  border-radius: 8px;
  border: 1px solid #dce1e7;

  /* Remove default Arrow */
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;
export const StyledOptions = styled.option`
  border-radius: 8px;

  border: 1px solid white;
`;
