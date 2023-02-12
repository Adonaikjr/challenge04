import styled from "styled-components";

export const ContainerCard = styled.label`
:has(:checked){
  border: solid ${(props) => props.theme.Purplishblue};
    background-color: ${(props) => props.theme.Lightblue};
}
  border: solid 1px ${(props) => props.theme.Lightgray};
  height: 13rem;
  width: 100%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  font-family: ${(props) => props.theme.fontUbuntu};
  padding: 1rem;
  > img {
    height: 3rem;
  }
  h3 {
    font-weight: 700;
    color: ${(props) => props.theme.Marineblue};
  }
  p{
    font-weight: 400;
    color: ${(props) => props.theme.Coolgray};
    
  }
  span{
    margin-top: -20px;
    font-weight: 300;
    color: ${(props) => props.theme.Purplishblue};
  }
  :hover {
    border: solid ${(props) => props.theme.Purplishblue};
    background-color: ${(props) => props.theme.Lightblue};
    cursor: pointer;
  }
`;
