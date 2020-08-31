import React from "react";
import {
  Input,
  TextArea,
  Checkbox,
  CheckboxWrapper,
  SaveAndContinue,
} from "../../../components/FormElements/index";

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
    <div>
      <form>
        <div>
          <Input size="100"> Loan Type 2</Input>
          <Input size="100" inputType="number">
            Loan Amount
          </Input>
        </div>

        <CheckboxWrapper title="Who is this enquiry for ?">
          <Checkbox inputType="checkbox"> Myself </Checkbox>
          <Checkbox inputType="checkbox"> Someone Else </Checkbox>
        </CheckboxWrapper>
        <TextArea> Additional Info</TextArea>
        <SaveAndContinue />
      </form>
    </div>
  );
};

export default EnquiryStep2;
