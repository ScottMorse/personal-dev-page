
import { cliSlice } from './cli'
import { uvsSlice } from './userViewSettings'

export const actions = {
  cli: cliSlice.actions,
  uvs: uvsSlice.actions
}
