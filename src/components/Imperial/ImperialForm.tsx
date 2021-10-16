import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  border-radius: 10px;
  background: #00c9ff; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to left,
    #92fe9d,
    #00c9ff
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to left,
    #92fe9d,
    #00c9ff
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  box-shadow: 2px 9px 25px -7px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 2px 9px 25px -7px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 2px 9px 25px -7px rgba(0, 0, 0, 0.75);

  width: 30%;
  padding: 3rem;
`;

const FormGroup = styled.div`
  display: flex;
`;

const FormLabel = styled.label`
  font-family: "Poppins", sans-serif;
  color: white;
  text-align: center;
  display: flex;
  align-items: flex-end;
`;

const HeightTextContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const TextInput = styled.input`
  width: 100%;
  margin-left: 1rem;
  text-align: center;
  border: none;
  border-bottom: 2px solid white;
  font-size: 23px;
  background-color: transparent;
  outline: none;
  font-family: "Poppins", sans-serif;
  color: white;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const HeaderText = styled.h1`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  color: #fff;
`;

const SwapUnitsButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 15px;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  color: #fff;

  :hover {
    text-decoration: underline;
  }
`;

const Spacer = styled.div`
  margin-top: 2rem;
`;

export const ImperialForm: React.FC<{}> = () => {
  return (
    <Container>
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
      </Form>
    </Container>
  );
};
