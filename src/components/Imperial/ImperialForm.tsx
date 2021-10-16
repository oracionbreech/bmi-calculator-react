import { useFormik } from "formik";
import { get, isEmpty } from "lodash";
import React, { useState } from "react";
import { Animated } from "react-animated-css";
import calculatorFormViews from "../../constants/calculatorFormViews";
import { imperialFormFields } from "../../helpers/imperial/formFields";
import { imperialFormInitialValues } from "../../helpers/imperial/initialValues";
import { getImperialPayload } from "../../helpers/imperial/service";
import { imperialFormValidationSchema } from "../../helpers/imperial/validationSchema";
import { getImperialBMI } from "../../services/imperial.service";

import {
  AnimatedStyled,
  BMIResultText,
  ErrorGroup,
  ErrorMessage,
  ErrorText,
  Form,
  FormGroup,
  FormLabel,
  Header,
  HeaderText,
  HeightTextContainer,
  ResultContainer,
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
  const [error, setError] = useState(null) as any;

  const [result, setResult] = useState(null) as any;

  const swapUnits = (e: any) => {
    e.preventDefault();
    setFormView(calculatorFormViews.metric);
  };

  const onSubmit = async (values: any) => {
    setError(null);
    setResult(null);
    try {
      const { data, status } = await getImperialBMI(getImperialPayload(values));
      if (status === 200) {
        // Set data
        setResult({
          bmi: get(data, "bmi", ""),
          classification: get(data, "classification", ""),
        });
      }
    } catch (error: any) {
      setError({
        message: error.message,
      });
    }
  };

  const { handleSubmit, handleBlur, handleChange, errors, isSubmitting } =
    useFormik({
      initialValues: imperialFormInitialValues,
      onSubmit: onSubmit,
      validationSchema: imperialFormValidationSchema,
      validateOnBlur: true,
    });

  return (
    <AnimatedStyled
      animationIn="bounceIn"
      animationOut="bounceOut"
      animationInDuration={1000}
      animationOutDuration={1000}
      isVisible={formView === calculatorFormViews.imperial}
    >
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        {!isEmpty(error) && (
          <AnimatedStyled
            animationIn="bounceIn"
            animationOut="bounceOut"
            animationInDuration={1000}
            animationOutDuration={1000}
            isVisible={!isEmpty(error)}
          >
            <ErrorMessage>
              {get(error, "message", "An error occurred!")}{" "}
              <span className="close" onClick={() => setError(null)}>
                Close
              </span>
            </ErrorMessage>
          </AnimatedStyled>
        )}

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
        <Animated
          animationIn="bounceIn"
          animationOut="bounceOut"
          animationInDuration={1000}
          animationOutDuration={1000}
          isVisible={
            !isEmpty(errors.heightInches) || !isEmpty(errors.heightFeet)
          }
        >
          <ErrorGroup>
            <ErrorText>{errors.heightFeet}</ErrorText>
            <ErrorText>{errors.heightInches}</ErrorText>
          </ErrorGroup>
        </Animated>
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
        <Animated
          animationIn="bounceIn"
          animationOut="bounceOut"
          animationInDuration={1000}
          animationOutDuration={1000}
          isVisible={!isEmpty(errors.weight)}
        >
          <ErrorGroup>
            <ErrorText>{errors.weight}</ErrorText>
          </ErrorGroup>
        </Animated>
        <Spacer />
        <FormGroup>
          <SubmitBtn
            disabled={isSubmitting}
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            Calculate
          </SubmitBtn>
        </FormGroup>
        {!isEmpty(result) && (
          <ResultContainer>
            <BMIResultText>
              <span className="label">BMI:</span>
              {Number(get(result, "bmi", "")).toFixed(2)} kg/m²
            </BMIResultText>
            <BMIResultText>
              <span className="label">Weight Classification: </span>
              {get(result, "classification", "")}
            </BMIResultText>
          </ResultContainer>
        )}
      </Form>
    </AnimatedStyled>
  );
};
