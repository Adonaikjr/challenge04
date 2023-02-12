import styled from "styled-components";
import { ContainerApp } from "../App/styled";
import { ContainerInput } from "../../components/Input/styled";

export const ContainerAddOns = styled(ContainerApp)`
  label {
    height: 5.8rem;
    border-radius: 10px;
    border: solid 1px ${(props) => props.theme.Lightgray};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 5rem;
    h5 {
      color: ${(props) => props.theme.Purplishblue};
    }
    p {
      font-family: ${(props) => props.theme.fontUbuntu};
      font-weight: 400;
      display: flex;
      flex-direction: column;
      width: 14rem;
      color: ${(props) => props.theme.Coolgray};
      span {
        font-weight: 500;
        color: ${(props) => props.theme.Marineblue};
      }
    }
    :hover {
      border: solid 1px ${(props) => props.theme.Purplishblue};
      background-color: ${(props) => props.theme.Lightblue};
      cursor: pointer;
    }
  }
`;

export const InputCheckBox = styled(ContainerInput)`
  width: 1rem;
  margin-left: 1rem;
  margin-right: -13rem;
  padding: 0;
`;
