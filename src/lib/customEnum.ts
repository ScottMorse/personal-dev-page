
export class Enum {

  static toObj() {
    return (
      Object.entries(this).filter(([key, value]) => {
        void key
        return value instanceof Enum
      }).reduce((obj, [key, val]) => {
        return { ...obj, [key]: val }
      }, {})
    )
  }

  static toArr() { 
    return Object.values(this).filter((value) => value instanceof Enum)
  }
}