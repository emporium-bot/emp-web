export abstract class AppLog {
  static readonly IDENTIFIER = '[emp-web]';

  static error(...args: any[]): void {
    // eslint-disable-next-line no-console
    console.error(this.IDENTIFIER, ...args);
  }

  static warn(...args: any[]): void {
    // eslint-disable-next-line no-console
    console.warn(this.IDENTIFIER, ...args);
  }
}
