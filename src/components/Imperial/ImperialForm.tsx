import React from "react";
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

export const ImperialForm: React.FC<{}> = () => {
  const swapUnits = (e: any) => {
    e.preventDefault();
  };

  return (
    <AnimatedStyled
      animationIn="fadeIn"
      animationOut="fadeOut"
      animationInDuration={600}
      animationOutDuration={400}
      isVisible={true}
    >
      <Form>
        <Header>
          <HeaderText>Calculate BMI</HeaderText>
          <SwapUnitsButton>Change to Metric</SwapUnitsButton>
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
          <SubmitBtn onClick={swapUnits}> Calculate</SubmitBtn>
        </FormGroup>
      </Form>
    </AnimatedStyled>
  );
};
