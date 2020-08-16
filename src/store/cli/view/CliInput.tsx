
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled, { keyframes } from 'styled-components'

import { cliSagaActions } from '../cliSagaActions'
import { useWinListener } from '../../../hooks'
import { PROMPT } from './prompt'

const blink = keyframes`
  from {
    visibility:hidden;
  } 50% {
    visibility:hidden;
  } to {
    visibility:visible;
  }
`

const StyledPrompt = styled.div`
  input {
    display: none;
  }
  label {
    display: flex;
  }
  .text-cursor {
    width: 0.45em;
    height: 0.9em;
    transform: translateY(0.14em);
    margin-left: 0.1em;
    background-color: ${({ theme }) => theme.fontColor};
    animation: ${blink} 1s linear infinite;
  }
`

export const INPUT_DOM_ID = "cli-main-input"

export const CliInput = () => {

  const [userText, setUserText] = useState("")
  const [ctlHeld, setCtlHeld] = useState(false)
  const [commandHistoryPos, setCommandHistoryPos] = useState(0)

  const dispatch = useDispatch()

  const handleEnter = () => {
    dispatch(cliSagaActions.takeCommand({ command: userText }))
    setUserText("")
  }

  const handleBackspace = () => setUserText(userText.slice(0,userText.length - 1))

  const handleArrowUp = () => {}

  const handleCtlC = () => setUserText("")

  const handleNewChar = (s: string) => {
    setUserText(
      (userText + s)
        .replace(/ ( )+/g, ' ')
        .replace(/[^\S ]+/g, '')
        .replace(/^ $/, '')
    )
  }

  useWinListener("keydown", ({ key }: KeyboardEvent) => {
    switch(key){
      case "Enter":
        handleEnter()
        break
      case "Backspace":
        handleBackspace()
        break
      case "Control":
        setCtlHeld(true)
        break
      case "ArrowUp":
        handleArrowUp()
        break
      case "c":
      case "d":
        if(ctlHeld){
          handleCtlC()
          break
        }
      // eslint-disable-next-line
      default:
        if(key.match(/^[\w ]$/)){
          handleNewChar(key)
        }
    }
  })

  useWinListener("keyup", ({ key }: KeyboardEvent) => {
    switch(key){
      case "Control":
        setCtlHeld(false)
        break
    }
  })

  return (
    <StyledPrompt>
      <input id={INPUT_DOM_ID} type="text" value={userText} onChange={(e) => {}}/>
      <label htmlFor={INPUT_DOM_ID}>
        {PROMPT}
        &nbsp;
        {(userText.length > 0 && userText[userText.length - 1] === ' ') ? (
          <>{userText.slice(0, userText.length - 1)}&nbsp;</>
        ) : (
          userText
        )}
        <div className="text-cursor"/>
      </label>
    </StyledPrompt>
  )
}