import React from "react";
import calculatorFormViews from "../../constants/calculatorFormViews";
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
      animationIn="fadeIn"
      animationOut="fadeOut"
      animationInDuration={600}
      animationOutDuration={400}
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
            <TextInput type="text" placeholder="Feet" />
            <TextInput type="text" placeholder="Inches" />
          </HeightTextContainer>
        </FormGroup>
        <Spacer />
        <FormGroup>
          <FormLabel>Weight:</FormLabel>
          <TextInput type="text" placeholder="Pounds" />
        </FormGroup>
        <Spacer />
        <FormGroup>
          <SubmitBtn onClick={(e) => {}}> Calculate</SubmitBtn>
        </FormGroup>
      </Form>
    </AnimatedStyled>
  );
};
