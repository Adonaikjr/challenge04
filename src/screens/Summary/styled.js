import styled from "styled-components";

export const ContainerContent = styled.main`
  width: 40rem;
  margin: 0 auto;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.Lightgray};
  font-family: ${({ theme }) => theme.fontUbuntu};
  
  article {
    padding: 1rem;
    border-bottom: solid 1px ${({ theme }) => theme.Coolgray};
   
    display: flex;
    justify-content: space-between;
    align-items: center;
    h3,
    h4 {
      color: ${({ theme }) => theme.Marineblue};
    }
    div {
      display: flex;
      flex-direction: column;
    }
    > h4 {
      font-size: 20px;
    }
  }
  section {
    padding: 1rem;
    > p {
      margin-bottom: 1rem;
      padding-left: 1rem;
      padding-right: 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: ${({ theme }) => theme.Coolgray};
    }
  }
`;
export const ContainerTotal = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  width: 40rem;
  margin: 0 auto;

  font-family: ${({ theme }) => theme.fontUbuntu};
  color: ${({ theme }) => theme.Coolgray};
  p {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  span {
    font-size: 30px;
    font-weight: 700;
    color: ${({ theme }) => theme.Purplishblue};
  }
`;
