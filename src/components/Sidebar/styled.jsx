import styled from "styled-components";
import backgroundSidebar from "../../assets/images/bg-sidebar-desktop.svg";
export const ContainerSidebar = styled.header`
  border: none;
  display: flex;
  flex-direction: column;
  width: 20rem;
  height: 40rem;
  background-image: url(${backgroundSidebar});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 10px;
`;
export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: none;
  height: 20rem;
  font-family: ${(props) => props.theme.fontUbuntu};
  font-weight: 500;
  a {
    border-radius: 50%;
    width: 3rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: ${(props) => props.theme.Marineblue};
   
  }
  p {
    color: ${(props) => props.theme.Pastelblue};
    strong {
      color: ${(props) => props.theme.Lightblue};
    }
  }

  ul {
    width: 50%;
    border: none;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    li {
      border: none;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      p {
        margin-left: 1rem;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        border: none;
      }
      transition: 1s;
      :hover {
        transition: 0.5s;
        width: 120%;
      }
    }
  }
`;
