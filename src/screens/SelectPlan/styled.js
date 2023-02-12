import styled from "styled-components";
import { ContainerApp } from "../App/styled";

export const ContainerSelectPlan = styled(ContainerApp)`


`;

export const ContainerForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  margin-left: 5rem;
  margin-right: 5rem;
  background-color: ${(props) => props.theme.Lightblue};
  border-radius: 10px;
  margin-top: 2rem;
  height: 4rem;
  label {
    border-radius: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 0.5rem 1rem 0.5rem;
    width: 4rem;
    height: 1.8rem;
    background-color: ${(props) => props.theme.Marineblue};
  }

  input[type="range"] {
    -webkit-appearance: none;
    margin: 10px 0;
    width: 100%;
  }
  input[type="range"]:focus {
    outline: none;
  }
  input[type="range"]::-webkit-slider-runnable-track {
    width: 100%;
    height: 12.8px;
    cursor: pointer;

    background: ${(props) => props.theme.Marineblue};

    border: none;
  }
  input[type="range"]::-webkit-slider-thumb {
    border: none;
    height: 20px;
    width: 20px;
    border-radius: 7px;
    background: ${(props) => props.theme.Magnolia};
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -3.6px;
    border-radius: 18px;
  }
  input[type="range"]:focus::-webkit-slider-runnable-track {
    background: ${(props) => props.theme.Marineblue};
  }
  input[type="range"]::-moz-range-track {
    width: 100%;
    height: 12.8px;
    cursor: pointer;

    background: ${(props) => props.theme.Marineblue};
    border-radius: 25px;
    border: none;
  }
  input[type="range"]::-moz-range-thumb {
    border: none;
    height: 20px;
    width: 20px;
    border-radius: 7px;
    background: ${(props) => props.theme.Magnolia};
    border-radius: 18px;
    cursor: pointer;
  }
  input[type="range"]::-ms-track {
    width: 100%;
    height: 12.8px;
    cursor: pointer;

    background: transparent;
    border-color: transparent;
    border-width: 20px 0;
    color: transparent;
  }
  input[type="range"]::-ms-fill-lower {
    background: ${(props) => props.theme.Marineblue};
    border: none;
  }
  input[type="range"]::-ms-fill-upper {
    background: ${(props) => props.theme.Marineblue};
    border: none;
  }
  input[type="range"]::-ms-thumb {
    border-radius: 18px;
    border: none;
    height: 10px;
    width: 20px;
    border-radius: 7px;
    background: ${(props) => props.theme.Magnolia};
    cursor: pointer;
  }
  input[type="range"]:focus::-ms-fill-lower {
    background: ${(props) => props.theme.Marineblue};
  }
  input[type="range"]:focus::-ms-fill-upper {
    background: ${(props) => props.theme.Marineblue};
  }

  p {
    font-family: ${(props) => props.theme.fontUbuntu};
    font-weight: 500;
    color: ${(props) => props.theme.Marineblue};
    margin: 5px;
  }
`;
