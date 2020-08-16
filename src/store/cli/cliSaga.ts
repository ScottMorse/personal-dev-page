
import { PayloadAction } from '@reduxjs/toolkit'
import { all, takeLatest } from 'redux-saga/effects'

import { cliSagaActions } from './cliSagaActions'
import { cliSlice } from './cliSlice'
import { SubmitCommandPayload, CliLogLine } from './cliDomain'

import { PROMPT } from './view/prompt'

const makePlainLine = (s: string): CliLogLine => ({ isLink: false, isError: false, content: s }) 

export function* takeCommandSaga({ payload: { command }}: PayloadAction<SubmitCommandPayload>){
  yield cliSlice.actions.addLogGroupToHistory({ 
    logGroup: { 
      lines: [makePlainLine(PROMPT + " " + command)] }
    }
  )
  yield all([])
}

export function* cliRootSaga(){
  yield all([
    takeLatest(cliSagaActions.takeCommand, takeCommandSaga)
  ])
}