
import { Enum } from '../../lib/customEnum'
import { compareAlphaNum } from '../../lib/utils/compareAlphaNum'

import { ThemeType } from './themeType'

export class ThemeEnum extends Enum implements ThemeType {

  static readonly WHITE_ON_BLACK = new ThemeEnum("w_o_b", "black", "white")
  static readonly DEFAULT = ThemeEnum.WHITE_ON_BLACK

  static getByKeyname(keyname: string): ThemeType {
    return this.toArr().find(theme => compareAlphaNum(theme.keyname, keyname)) || this.DEFAULT
  }

  protected constructor(
    public keyname: string,
    public backgroundColor: string,
    public fontColor: string
  ){ super() }

  static toArr(): Array<ThemeType>{
    return super.toArr() as Array<ThemeType>
  }
}