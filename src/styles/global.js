import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --color-primary: #27AE60;
    --color-secondary: #EB5757;

    --color-grey-600: #333333;
    --color-grey-400: #BDBDBD;
    --color-grey-300: #828282;
    --color-grey-100: #E0E0E0;
    --color-grey-0: #F5F5F5;

    --color-negative: #E60000;
    --color-warning: #FFCD07;
    --color-sucess: #168821;
    --color-information: #155BCB;


    --font-primary: "Inter", sans-serif;

    --font-size-heading-1: 1.625rem;
    --font-size-heading-2: 1.375rem;
    --font-size-heading-3: 1.125rem;
    --font-size-headline: 1rem;
    --font-size-body: 0.875rem;
    --font-size-caption: 0.75rem;

    --font-weight-bold: 700;
    --font-weight-semibold: 600;
    --font-weight-regular: 400;


    --bt-padding-inline: 1.25rem;
    --bt-height-1: 3.75rem;
    --bt-height-2: 2.5rem;


    --bd-radius: 0.5rem;

  }

  * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
  }

  body, html{
    width: 100vw;
    height: 100vh;
  }

  body {
    background: white;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

  body, input, button, textarea {
    font-family: var(--font-primary);
  }

  h1, h2, h3, h4, h5, h6, strong{
    font-weight: var(--font-weight-bold);
  }

  button {
    cursor: pointer;
    border: 2px solid white;
    border-radius: var(--bd-radius);
    padding-inline: var(--bt-padding-inline);
  }
`;
