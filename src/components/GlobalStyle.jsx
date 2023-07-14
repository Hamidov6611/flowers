import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Montserrat';
        background-color: ${props => props.theme.colors.primaryBackground};
    }

        .container {
            max-width: 1440px;
            margin: 0 auto;
            padding: 0 165px;
        }

    @media(max-width: 1200px) {
        .container {
            max-width: 1140px;
            margin: 0 auto;
            padding: 0 64px;
        }
    }

    @media(max-width: 768px) {
        .container {
            max-width: 100%;
            margin: 0 auto;
            padding: 0 24px;
        }
    }
`;

export default GlobalStyle;