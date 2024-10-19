import { createGlobalStyle } from "styled-components";

const globalStyles = createGlobalStyle`
    * {
        font-family: "Poppins", sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
        font-weight: 400;
        font-style: normal;
    }

    button, a{
        cursor: pointer;
    }
`;

export default globalStyles;