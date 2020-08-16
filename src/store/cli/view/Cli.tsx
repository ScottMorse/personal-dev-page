
import React from 'react'

import { CliInput } from './CliInput'
import { CliHistory } from './CliHistory'
import { CliActiveLog } from './CliActiveLog'

export const Cli = () => (
  <div>
    <CliHistory/>
    <CliInput/>
    <CliActiveLog/>
  </div>
)