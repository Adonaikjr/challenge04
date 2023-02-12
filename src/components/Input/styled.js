import styled from "styled-components";

export const ContainerInput = styled.input`
  height: 3.3rem;
  margin-left: 5rem;
  margin-right: 5rem;
  border: solid 1px ${(props) => props.theme.Lightgray};
  border-radius: 5px;
  padding-left: 0.5rem;
  ::placeholder {
    font-family: ${(props) => props.theme.fontUbutu};
    padding-left: 1rem;
  }
`;

export const ContainerInputError = styled(ContainerInput)`
  border: solid red;
`;
