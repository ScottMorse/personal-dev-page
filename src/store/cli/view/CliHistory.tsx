
import React from 'react'

import { CliLogLine } from '../cliDomain'
import { useSelector } from '../../useSelector'

export const CliHistory = () => {

  const { cliLogHistory } = useSelector(({ cli }) => cli)

  return (
    <>
      {cliLogHistory.reduce((lines, logGroup) => lines.concat(logGroup.lines), [] as Array<CliLogLine>).map((line, i) => (
        <div key={`cli-log-${i}`}>
          {line.content}
        </div>
      ))}
    </>
  )
}