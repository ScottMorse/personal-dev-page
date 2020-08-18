
import { createGlobalStyle } from 'styled-components'

import { IosevkaMedium, IosevkaBold } from '../assets/fonts'

import { cssReset } from './reset'
import { clear } from 'console'

export const GlobalStyle = createGlobalStyle`

  ${cssReset}

  @font-face {
    font-family: Asset-Mono;
    src: url(${IosevkaMedium});
    font-weight: normal;
  }

  @font-face {
    font-family: Asset-Mono;
    src: url(${IosevkaBold});
    font-weight: bold;
  }

  html {
    font-family: Asset-Mono, 'Courier New', Courier, monospace;
    background-color: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.fontColor};
  }

  body {
    margin: 1em 1.5em;
    line-height: 1.25;
  }

  a {
    color: ${({ theme }) => theme.fontColor};
  }
`