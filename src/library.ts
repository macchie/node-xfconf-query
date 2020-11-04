import { exec } from 'child_process';

export default class XFConfQuery {

  public static async list(channel: string): Promise<string[] | void> {
    return new Promise((resolve) => {
      exec(this.getListCommand(channel), (error, stdout, stderr) => {
        if (error) {
          return resolve(undefined);
        }
  
        console.log(stdout.split("\n"));
  
        if (stdout && stdout !== '') {
          return resolve(stdout.split("\n"));
        } else {
          return resolve([]);
        }
      });
    })
  }

  public static async read(channel: string, property: string): Promise<string | number | boolean | undefined | void> {
    return new Promise((resolve) => {
      exec(this.getReadCommand(channel, property), (error, stdout, stderr) => {
        if (error) {
          return resolve(undefined);
        }

        console.log(stdout);

        if (stdout && stdout !== '') {
          return resolve(stdout);
        } else {
          return resolve(undefined);
        }
      });
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