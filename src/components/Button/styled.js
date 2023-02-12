import styled from "styled-components";

export const ContainerButton = styled.div`
 width:100%;
 button {
    height: 2.5rem;
    width: 8rem;
    border-radius: 8px;
    background-color: ${ props => props.theme.Marineblue };
    font-family: ${ props =>props.theme.fontUbuntu };
    font-weight: 700;
    color: ${props => props.theme.Magnolia};
    border: none;
    transition: 1s;
    :hover {
        transition: 1s;
        background-color: ${ props => props.theme.Purplishblue };
    }
 }
`