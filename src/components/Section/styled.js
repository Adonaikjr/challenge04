import styled from "styled-components";

export const ContainerSection = styled.section`
    border: none;
    h1, p{
        font-family: ${(props) => props.theme.fontUbuntu};
        margin-left: 5rem;
        margin-right: 5rem;
    }
    h1{
        font-weight: 700;
        font-size: 30px;
        color: ${props => props.theme.Marineblue };
    }
    p{
        margin-top: 5px;
        font-weight: 400;
        color: ${props => props.theme.Coolgray };
    }
`