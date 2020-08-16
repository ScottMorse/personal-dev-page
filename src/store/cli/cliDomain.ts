
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
  public static readonly UNKNOWN = new CliCommandEnum("__UNKNOWN__", 0, false)

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