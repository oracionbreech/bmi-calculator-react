import React from "react";
import calculatorFormViews from "../../constants/calculatorFormViews";
import { metricFormFields } from "../../helpers/metric/formFields";
import {
  AnimatedStyled,
  Form,
  FormGroup,
  FormLabel,
  Header,
  HeaderText,
  Spacer,
  SubmitBtn,
  SwapUnitsButton,
  TextInput,
} from "./styled";

/// Fields
const { height, weight } = metricFormFields;

export const MetricForm: React.FC<{
  formView: string;
  setFormView: React.Dispatch<React.SetStateAction<string>>;
}> = ({ formView, setFormView = () => {} }) => {
  const swapUnits = (e: any) => {
    e.preventDefault();
    setFormView(calculatorFormViews.imperial);
  };

  return (
    <AnimatedStyled
      animationIn="bounceIn"
      animationOut="bounceOut"
      animationInDuration={1000}
      animationOutDuration={1000}
      isVisible={formView === calculatorFormViews.metric}
    >
      <Form>
        <Header>
          <HeaderText>Metric</HeaderText>
          <SwapUnitsButton onClick={swapUnits}>
            Change to Imperial
          </SwapUnitsButton>
        </Header>
        <FormGroup>
          <FormLabel>Height:</FormLabel>
          <TextInput type="text" placeholder={height.placeholder} />
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
