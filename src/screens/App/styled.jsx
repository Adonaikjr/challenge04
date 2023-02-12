import styled from "styled-components";

export const ContainerApp = styled.main`
  border: none;
  height: 40rem;
  width: 50rem;
  background-color: ${(props) => props.theme.Alabaster};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
