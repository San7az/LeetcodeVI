class Logger {
  static #defaultLevel = 'INFO' // 静态公共字段
  print() {
    console.log(Logger.#defaultLevel)
  }

  static log() {
    console.log(Logger.#defaultLevel)
  }
}
let log = new Logger()
log.print()
Logger.log()
