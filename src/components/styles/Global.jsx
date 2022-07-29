import { createGlobalStyle } from "styled-components";
import img from '../../assets/img/pexels-shutterspeed-5939632.jpg'

export const Global = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Poppins', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow: auto;

    background-image: url(${img});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}

code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
}


`

export default Global;