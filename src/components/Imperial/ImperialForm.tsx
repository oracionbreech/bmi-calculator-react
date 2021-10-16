import React from "react";
import calculatorFormViews from "../../constants/calculatorFormViews";
import { imperialFormFields } from "../../helpers/imperial/formFields";

import {
  AnimatedStyled,
  Form,
  FormGroup,
  FormLabel,
  Header,
  HeaderText,
  HeightTextContainer,
  Spacer,
  SubmitBtn,
  SwapUnitsButton,
  TextInput,
} from "./styled";

/// Fields

const { heightFeet, heightInches, weight } = imperialFormFields;

export const ImperialForm: React.FC<{
  formView: string;
  setFormView: React.Dispatch<React.SetStateAction<string>>;
}> = ({ formView, setFormView = () => {} }) => {
  const swapUnits = (e: any) => {
    e.preventDefault();
    setFormView(calculatorFormViews.metric);
  };

  return (
    <AnimatedStyled
      animationIn="bounceIn"
      animationOut="bounceOut"
      animationInDuration={1000}
      animationOutDuration={1000}
      isVisible={formView === calculatorFormViews.imperial}
    >
      <Form>
        <Header>
          <HeaderText>Imperial</HeaderText>
          <SwapUnitsButton onClick={swapUnits}>
            Change to Metric
          </SwapUnitsButton>
        </Header>
        <FormGroup>
          <FormLabel>Height:</FormLabel>
          <HeightTextContainer>
            <TextInput type="text" placeholder={heightFeet.placeholder} />
            <TextInput type="text" placeholder={heightInches.placeholder} />
          </HeightTextContainer>
        </FormGroup>
        <Spacer />
        <FormGroup>
          <FormLabel>Weight:</FormLabel>
          <TextInput type="text" placeholder={weight.placeholder} />
        </FormGroup>
        <Spacer />
        <FormGroup>
          <SubmitBtn onClick={(e) => {}}> Calculate</SubmitBtn>
        </FormGroup>
      </Form>
    </AnimatedStyled>
  );
};
