import React from "react";
import {
  Input,
  TextArea,
  Checkbox,
  CheckboxWrapper,
  SaveAndContinue,
  Select,
  Option,
} from "../../../../components/FormElements/index";
import { Container } from "./styles";

type FormData = {
  firstName: string;
  lastName: string;
  Home: string;
  school: string;
};

const EnquiryStep2 = () => {
  // const { register, handleSubmit } = useForm<FormData>();
  // const { createStep, patchStep, enquiryData } = useEnquiry();
  // const onSubmit1 = handleSubmit(({ firstName, lastName }) => {
  //   console.log(firstName, lastName);
  //   createStep({ firstName, lastName });
  // });

  // const onSubmit2 = handleSubmit(({ Home, school }) => {
  //   console.log(Home, school);
  //   patchStep({ Home, school });
  // });
  return (
    <Container>
      <form>
        <div className="name">
          <Input size="132"> First Name</Input>
          <Input size="140">Last Name</Input>
        </div>
        <CheckboxWrapper title="Gender">
          <Checkbox inputType="checkbox"> Female </Checkbox>
          <Checkbox inputType="checkbox"> Male </Checkbox>
        </CheckboxWrapper>
        <Input>Residential Address</Input>
        <CheckboxWrapper title="I have lived here for more than 3 years">
          <Checkbox inputType="checkbox"> Yes </Checkbox>
          <Checkbox inputType="checkbox"> No </Checkbox>
        </CheckboxWrapper>
        <Select title="Living Situation">
          <Option>one</Option>
          <Option>two</Option>
          <Option>three</Option>
          <Option>four</Option>
        </Select>
        <Select title="Living Situation">
          <Option>one</Option>
          <Option>two</Option>
          <Option>three</Option>
          <Option>four</Option>
        </Select>
        <Select title="Living Situation">
          <Option>one</Option>
          <Option>two</Option>
          <Option>three</Option>
          <Option>four</Option>
        </Select>

        <SaveAndContinue />
      </form>
    </Container>
  );
};

export default EnquiryStep2;
