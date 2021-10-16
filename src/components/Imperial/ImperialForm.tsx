import { useFormik } from "formik";
import React from "react";
import calculatorFormViews from "../../constants/calculatorFormViews";
import { imperialFormFields } from "../../helpers/imperial/formFields";
import { imperialFormInitialValues } from "../../helpers/imperial/initialValues";
import { imperialFormValidationSchema } from "../../helpers/imperial/validationSchema";

import {
  AnimatedStyled,
  ErrorGroup,
  ErrorText,
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

  const onSubmit = (values: any) => {};

  const { handleSubmit, handleBlur, handleChange, touched, errors } = useFormik(
    {
      initialValues: imperialFormInitialValues,
      onSubmit: onSubmit,
      validationSchema: imperialFormValidationSchema,
      validateOnBlur: true,
    }
  );

  const formErrors = {
    [heightFeet.name]: {
      touched: touched.heightFeet,
      message: errors.heightFeet,
    },
    [heightInches.name]: {
      touched: touched.heightInches,
      message: errors.heightInches,
    },
    [weight.name]: {
      touched: touched.weight,
      message: errors.weight,
    },
  };

  console.log(errors);

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
            <TextInput
              type="text"
              placeholder={heightFeet.placeholder}
              name={heightFeet.name}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            <TextInput
              type="text"
              placeholder={heightInches.placeholder}
              name={heightInches.name}
              onBlur={handleBlur}
              onChange={handleChange}
            />
          </HeightTextContainer>
        </FormGroup>
        <ErrorGroup>
          <ErrorText>{errors.heightFeet}</ErrorText>
          <ErrorText>{errors.heightInches}</ErrorText>
        </ErrorGroup>
        <Spacer />
        <FormGroup>
          <FormLabel>Weight:</FormLabel>
          <TextInput
            type="text"
            placeholder={weight.placeholder}
            name={weight.name}
            onBlur={handleBlur}
            onChange={handleChange}
          />
        </FormGroup>
        <ErrorGroup>
          <ErrorText>{errors.weight}</ErrorText>
        </ErrorGroup>
        <Spacer />
        <FormGroup>
          <SubmitBtn
            onClick={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            Calculate
          </SubmitBtn>
        </FormGroup>
      </Form>
    </AnimatedStyled>
  );
};
