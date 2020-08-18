
import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import styled, { keyframes } from 'styled-components'

import { CliCommandEnum } from '../cliDomain'
import { cliSagaActions } from '../cliSagaActions'
import { useSelector } from '../../useSelector'
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
  const [autofills, setAutofills] = useState<Array<CliCommandEnum>>([])
  const [commandHistoryPos, setCommandHistoryPos] = useState(-1)

  const { cliCommandHistory } = useSelector(({ cli }) => cli)

  const dispatch = useDispatch()

  useEffect(() => {
    setAutofills(CliCommandEnum.getAutofills(userText))
  }, [userText, setAutofills])

  const handleEnter = () => {
    dispatch(cliSagaActions.takeCommand({ command: userText }))
    setUserText("")
  }

  const handleBackspace = () => setUserText(userText.slice(0,userText.length - 1))

  const _handleCommHistPosChange = (pos: number) => {
    if(pos >= cliCommandHistory.length || pos < 0) return
    setCommandHistoryPos(pos)
    setUserText(cliCommandHistory[pos])
  }

  const handleArrowUp = () => {
    _handleCommHistPosChange(commandHistoryPos + 1)
  }

  const handleArrowDown = () => {
    _handleCommHistPosChange(commandHistoryPos - 1)
  }

  const handleTab = () => {
    if(autofills.length === 1) setUserText(autofills[0].command)
  }

  const handleCtlC = () => {
    setUserText("")
  }

  const handleNewChar = (s: string) => {
    setUserText(
      (userText + s)
        .replace(/ ( )+/g, ' ')
        .replace(/[^\S ]+/g, '')
        .replace(/^ $/, '')
    )
  }

  useWinListener("keydown", (e: KeyboardEvent) => {
    const { key } = e
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
      case "ArrowDown":
        handleArrowDown()
        break
      case "Tab":
        e.preventDefault()
        handleTab()
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
    if(key !== 'ArrowUp' && key !== 'ArrowDown'){
      setCommandHistoryPos(-1)
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