
import React from 'react'
import styled from 'styled-components'

const ASCII_TITLES: Array<string> = [
`
 .d8888b.                   888    888         888b     d888                                    <br/>
d88P  Y88b                  888    888         8888b   d8888                                    <br/>
Y88b.                       888    888         88888b.d88888                                    <br/>
 "Y888b.    .d8888b .d88b.  888888 888888      888Y88888P888  .d88b.  888d888 .d8888b   .d88b.  <br/>
    "Y88b. d88P"   d88""88b 888    888         888 Y888P 888 d88""88b 888P"   88K      d8P  Y8b <br/>
      "888 888     888  888 888    888         888  Y8P  888 888  888 888     "Y8888b. 88888888 <br/>
Y88b  d88P Y88b.   Y88..88P Y88b.  Y88b.       888   "   888 Y88..88P 888          X88 Y8b.     <br/>
 "Y8888P"   "Y8888P "Y88P"   "Y888  "Y888      888       888  "Y88P"  888      88888P'  "Y8888  <br/>
`,
`
 ___   __  __  ____  ____    __  __  __  ___   ___  ___        <br/>
/ __) / _)/  \\(_  _)(_  _)  (  \\/  )/  \\(  ,) / __)(  _)    <br/>
\\__ \\( (_( () ) )(    )(     )    (( () ))  \\ \\__ \\ ) _)  <br/>
(___/ \\__)\\__/ (__)  (__)   (_/\\/\\_)\\__/(_)\\_)(___/(___) <br/>
`,
`
 ____                   __    __                                                <br/>
/\\  _\`\\                /\\ \\__/\\ \\__      /'\\_/\`\\                                <br/>
\\ \\,\\L\\_\\    ___    ___\\ \\ ,_\\ \\ ,_\\    /\\      \\    ___   _ __   ____     __   <br/>
 \\/_\\__ \\   /'___\\ / __\`\\ \\ \\/\\ \\ \\/    \\ \\ \\__\\ \\  / __\`\\/\\\`'__\\/',__\\  /'__\`\\ <br/>
   /\\ \\L\\ \\/\\ \\__//\\ \\L\\ \\ \\ \\_\\ \\ \\_    \\ \\ \\_/\\ \\/\\ \\L\\ \\ \\ \\//\\__, \`\\/\\  __/ <br/>
   \\ \`\\____\\ \\____\\ \\____/\\ \\__\\\\ \\__\\    \\ \\_\\\\ \\_\\ \\____/\\ \\_\\\\/\\____/\\ \\____\\<br/>
    \\/_____/\\/____/\\/___/  \\/__/ \\/__/     \\/_/ \\/_/\\/___/  \\/_/ \\/___/  \\/____/<br/>
`
]

const prepareTitle = (s: string) => ({ __html: s.replace(/ /g, '&nbsp;') })

const StyledHeader = styled.header`
  margin-bottom: 1em;
  h1 {
    line-height: 1;
  }
  h2 {
    margin-top: 1em;
  }
`

export const Header = () => (
  <StyledHeader>
    <h1 dangerouslySetInnerHTML={prepareTitle(ASCII_TITLES[0])}/>
    <h2>Full Stack Developer, v1.0.0 (Release: 1993)</h2>
    <h3>Running on {navigator.platform}</h3>
  </StyledHeader>
)