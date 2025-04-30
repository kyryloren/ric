'use client'

import { createGlobalStyle } from 'styled-components'
import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro'

const CustomStyles = createGlobalStyle`
  :root {
    overscroll-behavior: none;
  }
  
  html {
    box-sizing: border-box;
    width: 100%;
  }

  body {
    min-width: 100vw;
    min-height: 100vh;
    margin: 0;
    font-family: ${theme`fontFamily.serif`};
    background-color: ${theme`colors.white`};
    color: ${theme`colors.black`};
    overflow-x: hidden;
    overscroll-behavior-y: none;
    ${tw`antialiased`}
  }

  main {
    visibility: hidden;
    opacity: 0;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  &::-webkit-scrollbar {
    display: none;
  }

  @supports (font: -apple-system-body) and (-webkit-appearance: none) {
    img[loading='lazy'] {
      clip-path: inset(0.6px);
    }
  }

  .overflow {
    overflow: hidden;
    display: inline-block;
    margin-top: -3%;
  }
`

const GlobalStyle = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
)

export default GlobalStyle
