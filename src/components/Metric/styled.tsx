import styled from "styled-components";
import { Animated } from "react-animated-css";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
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

  width: 50%;
  padding: 3rem;
`;

export const FormGroup = styled.div`
  display: flex;
`;

export const FormLabel = styled.label`
  font-family: "Poppins", sans-serif;
  color: white;
  text-align: center;
  display: flex;
  align-items: flex-end;
`;

export const HeightTextContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const TextInput = styled.input`
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

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const HeaderText = styled.h1`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  color: #fff;
`;

export const SwapUnitsButton = styled.button`
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

export const Spacer = styled.div`
  margin-top: 2rem;
`;

export const SubmitBtn = styled.button`
  background-color: #44ad9c;
  width: 100%;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 25px;
  padding: 0.5rem;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  color: #fff;
  box-shadow: 2px 9px 25px -7px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 2px 9px 25px -7px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 2px 9px 25px -7px rgba(0, 0, 0, 0.75);
  transition: box-shadow 0.5s;
  :hover {
    box-shadow: 10px 10px 33px 0px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 10px 10px 33px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 10px 10px 33px 0px rgba(0, 0, 0, 0.75);
  }
`;

export const AnimatedStyled = styled(Animated)`
  display: flex;
  justify-content: center;
`;
