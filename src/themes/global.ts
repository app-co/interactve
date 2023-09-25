import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {

        margin: 0;

        padding: 0;

        box-sizing: border-box;

    }



    :focus {

        outline: 0;
    }

    html {
      scroll-behavior: smooth;
    }


    body {
  /* background: linear-gradient(
      to bottom,
      transparent,
      rgb(var(--background-end-rgb))
    )
    rgb(var(--background-start-rgb)); */
    background-color: #ebebeb;
}

input {
  outline: none;
}

span {
  font-weight: 600;
}

button {
  padding: 3px 10px;
  &:hover {
    opacity: .8;
  }
}

div {
  display: flex;
  flex-direction: column;
}

h1,h2,h3,h4,span,p {
  font-family: 'Kanit'
}


h1 {
  font-size: calc(24px + 1.4vw);
  font-weight: 900;
}

h2 {
  font-size: calc(22px + 1vw);
  font-weight: 600;
}


h3 {
  font-size: calc(16px + .7vw);
  font-weight: 400;
}


h4 {
  font-size: calc(14px + .5vw);
  font-weight: 200;
}

p {
  font-size: calc(8px + .5vw);
  font-weight: 200;
}





body, input, textarea, button {

    font-weight: 400;
    font-size: 1rem;
    border: none;


}

button {
  cursor: pointer;
  border-radius: 5px;
  padding: calc(2px .5vw) calc(5px + .5vw)

}

`
