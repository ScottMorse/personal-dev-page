
import React from 'react'

import { CliLogLine } from '../cliDomain'
import { useSelector } from '../../useSelector'

export const CliHistory = () => {

  const { cliLogHistory } = useSelector(({ cli }) => cli)

  return (
    <>
      {cliLogHistory.reduce((lines, logGroup) => lines.concat(logGroup.lines), [] as Array<CliLogLine>).map(({ isError, isLink, content }, i) => isLink ? (
        <div key={`cli-log-${i}`} style={isError ? { color: "red" } : {}}>
          <a href={content} target="_blank" rel="noopener noreferrer">{content}</a>
        </div>
      ) : (
        <div key={`cli-log-${i}`} style={isError ? { color: "red" } : {}} dangerouslySetInnerHTML={{ __html: content }}/>
      ))}
    </>
  )
}