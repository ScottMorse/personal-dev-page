
export interface ThemeType {
  keyname: string;
  backgroundColor: string;
  fontColor: string;
}

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends ThemeType {}
}