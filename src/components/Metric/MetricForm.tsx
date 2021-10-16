import { useFormik } from "formik";
import { get, isEmpty } from "lodash";
import React, { useState } from "react";
import { Animated } from "react-animated-css";
import calculatorFormViews from "../../constants/calculatorFormViews";
import { metricFormFields } from "../../helpers/metric/formFields";
import { metricFormInitialValues } from "../../helpers/metric/initialValues";
import { getMetricPayload } from "../../helpers/metric/service";
import { metricFormValidationSchema } from "../../helpers/metric/validationSchema";
import { getMetricBMI } from "../../services/metric.service";
import {
  BMIResultText,
  ErrorGroup,
  ErrorMessage,
  ErrorText,
  ResultContainer,
} from "../Imperial/styled";

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
  const [error, setError] = useState(null) as any;
  const [result, setResult] = useState(null) as any;

  const swapUnits = (e: any) => {
    e.preventDefault();
    setFormView(calculatorFormViews.imperial);
  };

  const onSubmit = async (values: any) => {
    setError(null);
    setResult(null);
    try {
      const { data, status } = await getMetricBMI(getMetricPayload(values));

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
      initialValues: metricFormInitialValues,
      onSubmit: onSubmit,
      validationSchema: metricFormValidationSchema,
      validateOnBlur: true,
    });

  return (
    <AnimatedStyled
      animationIn="bounceIn"
      animationOut="bounceOut"
      animationInDuration={1000}
      animationOutDuration={1000}
      isVisible={formView === calculatorFormViews.metric}
    >
      <Form>
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
          <HeaderText>Metric</HeaderText>
          <SwapUnitsButton onClick={swapUnits}>
            Change to Imperial
          </SwapUnitsButton>
        </Header>
        <FormGroup>
          <FormLabel>Height:</FormLabel>
          <TextInput
            type="text"
            placeholder={height.placeholder}
            name={height.name}
            onBlur={handleBlur}
            onChange={handleChange}
          />
        </FormGroup>
        <Animated
          animationIn="bounceIn"
          animationOut="bounceOut"
          animationInDuration={1000}
          animationOutDuration={1000}
          isVisible={!isEmpty(errors.height)}
        >
          <ErrorGroup>
            <ErrorText>{errors.height}</ErrorText>
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
            type="submit"
            disabled={isSubmitting}
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
