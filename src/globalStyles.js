import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root , :root.theme1{
    --color-heading:hsl(0, 0%, 100%);
    --color-toggle:hsl(6, 63%, 50%);
    --color-key:hsl(221, 14%, 31%);
    --color-shadow-key: hsl(28, 16%, 65%);
    --color-del-reset:hsl(0, 0%, 100%);
    --color-shadow-del-reset:hsl(224, 28%, 35%);
    --color-equal:hsl(0, 0%, 100%);
    --color-shadow-equal:hsl(6, 70%, 34%);
    --bg-color-body:hsl(222, 26%, 31%);
    --bg-color-screen:hsl(224, 36%, 15%);
    --bg-color-key:hsl(30, 25%, 89%);
    --bg-color-key-active:hsl(30, 25%, 95%);
    --bg-color-keypad:hsl(223, 31%, 20%);
    --bg-color-del-reset:hsl(225, 21%, 49%);
    --bg-color-del-reset-active:hsl(225, 21%, 59%);
    --bg-color-equal:hsl(6, 63%, 50%);
    --bg-color-equal-active:hsl(6, 63%, 60%);



}
:root.theme2{
    --color-heading:hsl(60, 10%, 19%);
    --color-toggle:hsl(25, 98%, 40%);
    --color-key:hsl(60, 10%, 19%);
    --color-shadow-key: hsl(35, 11%, 61%);
    --color-del-reset:hsl(0, 0%, 100%);
    --color-shadow-del-reset:hsl(185, 58%, 25%);
    --color-equal:hsl(0, 0%, 100%);
    --color-shadow-equal:hsl(25, 99%, 27%);
    --bg-color-body:hsl(0, 0%, 90%);
    --bg-color-screen:hsl(0, 0%, 93%);
    --bg-color-key:hsl(45, 7%, 89%);
    --bg-color-key-active:hsl(45, 7%, 95%);
    --bg-color-keypad:hsl(0, 5%, 81%);
    --bg-color-del-reset:hsl(185, 42%, 37%);
    --bg-color-del-reset-active:hsl(185, 42%, 47%);
    --bg-color-equal:hsl(25, 98%, 40%);
    --bg-color-equal-active:hsl(25, 98%, 50%);
}
:root.theme3{
    --color-heading:hsl(52, 100%, 62%);
    --color-toggle: hsl(176, 100%, 44%);
    --color-key:hsl(52, 100%, 62%);
    --color-shadow-key: hsl(290, 70%, 36%);
    --color-del-reset:hsl(0, 0%, 100%);
    --color-shadow-del-reset: hsl(285, 91%, 52%);
    --color-equal:hsl(198, 20%, 13%);
    --color-shadow-equal:hsl(177, 92%, 70%);
    --bg-color-body: hsl(268, 75%, 9%);
    --bg-color-screen:hsl(268, 71%, 12%);
    --bg-color-key:  hsl(268, 47%, 21%);
    --bg-color-key-active:  hsl(268, 47%, 31%);
    --bg-color-keypad:hsl(268, 71%, 12%);
    --bg-color-del-reset: hsl(281, 89%, 26%);
    --bg-color-del-reset-active: hsl(281, 89%, 36%);
    --bg-color-equal: hsl(176, 100%, 44%);
    --bg-color-equal-active: hsl(176, 100%, 54%);
}

*, *::after, *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
html {
    font-size: 62.5%;
}
body {

   font-family: "League Spartan", serif;

}
button {
font-size: inherit;
}

@media (min-width :31.25em ) {
    html {
        font-size: 68.75%
    }
}
`;

export default GlobalStyle;
