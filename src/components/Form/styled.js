import styled from "styled-components";

export const ContainerForm = styled.form`
  
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: none;
    gap: 0.5rem;
    margin-top: 1rem;
    font-family: ${(props) => props.theme.fontUbuntu};
    label {
      margin-top: 1rem;
      font-weight: 500;
      margin-left: 5rem;
      margin-right: 5rem;
      color: ${props => props.theme.Marineblue};
    }
     div {
        margin-top: 9rem;
        padding-right: 5rem;
        display: flex;
        justify-content: flex-end;
    }
  
`