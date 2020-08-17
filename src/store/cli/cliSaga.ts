
import { PayloadAction } from '@reduxjs/toolkit'
import { all, takeLatest, put } from 'redux-saga/effects'

import { cliSagaActions } from './cliSagaActions'
import { cliSlice } from './cliSlice'
import { SubmitCommandPayload, CliLogLine, CliCommandEnum } from './cliDomain'

import { PROMPT } from './view/prompt'

const makePlainLine = (s: string): CliLogLine => ({ isLink: false, isError: false, content: s }) 

function* handleUnknownComm(comm: string){
  yield put(cliSlice.actions.addLogGroupToHistory({ 
    logGroup: { lines: [{ isLink: false, isError: true, content: `Error: command '${comm}' not found` }] }
  }))
}

function* handleClearComm(){
  yield put(cliSlice.actions.clearHistory())
}

function* commandSwitch(rawCommand: string){
  const command = CliCommandEnum.get(rawCommand)

  switch(command){
    case CliCommandEnum.NOTHING:
      return
    case CliCommandEnum.UNKNOWN:
      yield handleUnknownComm(rawCommand)
      break
    case CliCommandEnum.CLEAR:
      yield handleClearComm()
      break
  }
}

function* takeCommandSaga({ payload: { command }}: PayloadAction<SubmitCommandPayload>){
  yield all([
    put(cliSlice.actions.addLogGroupToHistory({ 
      logGroup: { lines: [makePlainLine(PROMPT + " " + command)] }
    })),
    put(cliSlice.actions.addCommandToHistory({ command }))
  ])
  yield commandSwitch(command)
}

export function* cliRootSaga(){
  yield all([
    takeLatest(cliSagaActions.takeCommand.type, takeCommandSaga)
  ])
}