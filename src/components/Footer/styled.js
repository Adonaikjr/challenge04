import styled from "styled-components";

export const ContainerFooter = styled.footer`
  display: flex;
  align-items: center;
  margin: 0 auto;
  width: 40rem;
  a {
    text-decoration: none;
    font-family: ${(props) => props.theme.fontUbuntu};
    color: ${(props) => props.theme.Coolgray};
    font-weight: 700;
    width: 5rem;
    transition: 1s;
    :hover {
      transition: 1s;
      font-size: 17px;
    }
  }
  button {
    margin-left: 71%;
  }
`;
