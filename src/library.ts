import { exec } from 'child_process';

export default class XFConfQuery {

  public static list(channel: string): string[] | void {
    exec(this.getListCommand(channel), (error, stdout, stderr) => {
      if (error) {
        throw error;
      }

      if (stdout) {
        return stdout.split("\n")
      } else {
        return [];
      }
    });
  }

  public static async read() {
    console.log(`i can read`)
  }

  public static async write() {
    console.log(`i can write`)
  }

  private static getListCommand(channel: string): string {
    return `xfconf-query -c ${channel} -l`;
  }
}