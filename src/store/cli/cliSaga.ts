
import { all, takeLatest } from 'redux-saga/effects'

import { cliSagaActions } from './cliSagaActions'

export function* takeCommandSaga(){
  
}

export function* cliRootSaga(){
  yield all([
    takeLatest(cliSagaActions.takeCommand, takeCommandSaga)
  ])
}