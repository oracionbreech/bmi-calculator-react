import { useFormik } from "formik";
import React from "react";
import calculatorFormViews from "../../constants/calculatorFormViews";
import { getImperialPayload } from "../../helpers/imperial/service";
import { metricFormFields } from "../../helpers/metric/formFields";
import { metricFormInitialValues } from "../../helpers/metric/initialValues";
import { metricFormValidationSchema } from "../../helpers/metric/validationSchema";
import { getImperialBMI } from "../../services/imperial.service";
import { ErrorGroup, ErrorText } from "../Imperial/styled";
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

  const onSubmit = async (values: any) => {
    try {
      const { data } = await getImperialBMI(getImperialPayload(values));
    } catch (error) {}
  };

  const { handleSubmit, handleBlur, handleChange, errors } = useFormik({
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
        <ErrorGroup>
          <ErrorText>
            <ErrorText>{errors.height}</ErrorText>
          </ErrorText>
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
          <ErrorText>
            <ErrorText>{errors.weight}</ErrorText>
          </ErrorText>
        </ErrorGroup>
        <Spacer />
        <FormGroup>
          <SubmitBtn
            type="submit"
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
