
import { all } from 'redux-saga/effects'

import { cliRootSaga } from './cli'

export function* rootSaga(){
  yield all([
    cliRootSaga(),
  ])
}