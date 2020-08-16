
import { createAction } from '@reduxjs/toolkit'

import { SubmitCommandPayload } from './cliDomain'

export const cliSagaActions = {
  takeCommand: createAction<SubmitCommandPayload>("TAKE_COMMAND_SAGA")
}