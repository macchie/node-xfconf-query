import { exec } from 'child_process';

export default class XFConfQuery {

  public static list(channel: string): string[] | void {
    exec(this.getListCommand(channel), (error, stdout, stderr) => {
      if (error) {
        throw error;
      }

      if (stdout && stdout !== '') {
        return stdout.split("\n")
      } else {
        return [];
      }
    });
  }

  public static read(channel: string, property: string): string | number | boolean | undefined | void {
    exec(this.getReadCommand(channel, property), (error, stdout, stderr) => {
      if (error) {
        throw error;
      }

      if (stdout && stdout !== '') {
        return stdout;
      } else {
        return undefined;
      }
    });
  }

  public static async write() {
    console.log(`i can write`)
  }

  // private

  private static getListCommand(channel: string): string {
    return `xfconf-query -c ${channel} -l`;
  }

  private static getReadCommand(channel: string, property: string): string {
    return `xfconf-query -c ${channel} -p ${property}`;
  }
}