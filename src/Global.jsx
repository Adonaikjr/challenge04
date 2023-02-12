import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
    }
    :focus{
            outline: auto;
        }
        
    button {
    cursor: pointer;

    }
    body{
        margin: 0 auto;
        height: 100vh;
        max-width: 1440px;
        min-width: 375px;
        border: solid red;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 2rem;
        background-color: ${(props) => props.theme.Lightblue};
        p{
            font-size: 16px;
         
        }
    }
`;
