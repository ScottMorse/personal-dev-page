
import { Enum } from '../../lib/customEnum'

export interface CliLogLine {
  isLink: boolean;
  isError: boolean;
  content: string;
}

export interface CliLogGroup {
  lines: Array<CliLogLine>;
}

export interface CliCommand {
  command: string;
  nArgs: number;
  valid: boolean;
}

export interface SubmitCommandPayload {
  command: string;
}

export interface AddLogGroupToHistoryPayload {
  logGroup: CliLogGroup;
}

export class CliCommandEnum extends Enum implements CliCommand {

  public static readonly NOTHING = new CliCommandEnum("", 0)
  public static readonly CLEAR = new CliCommandEnum("clear", 0)
  public static readonly BIO = new CliCommandEnum("bio", 0)
  public static readonly UNKNOWN = new CliCommandEnum("__UNKNOWN__", 0, false)

  public static get(comm: string): CliCommand {
    const cleanComm = comm.toLowerCase().trim()
    return this.toArr().find(({ command }) => command === cleanComm) || this.UNKNOWN
  }

  public static getAutofills(text: string): Array<CliCommand> {
    const cleanText = text.toLowerCase().trim()
    if(!cleanText) return []
    const comms = this.toArr().filter(c => !!c.command.toLowerCase().trim().match(cleanText))
    comms.sort((a, b) => a.command > b.command ? 1 : -1)
    return comms
  }

  protected constructor(
    public command: string,
    public nArgs: number,
    public valid = true
  ) { super() }

  public static toArr(){
    return super.toArr() as Array<CliCommand>
  }

  public static toObj(){
    return super.toObj() as { [key: string]: CliCommand }
  }
}

export const BIO = `
This is my bio.
This is my bio.
This is my bio.
This is my bio.

This is my bio.
https://github.com

This is my bio.
This is my bio.
This is my bio.
`