import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
    }

    body{
        margin: 0 auto;
        max-width: 1440px;
        min-width: 375px;
        border: solid red;
        :focus{
            outline: auto;
        }
        display: flex;
        justify-content: center;
        align-items: center;
    }
`