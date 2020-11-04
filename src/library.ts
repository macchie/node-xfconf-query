import { exec } from 'child_process';

export default class XFConfQuery {

  public static async listChannels(): Promise<string[] | undefined> {
    return new Promise((resolve) => {
      exec('xfconf-query -l', (error, stdout, stderr) => {
        if (error) {
          return resolve(undefined);
        }
  
        if (stdout !== undefined && stdout !== '') {
          const channelsListResult = stdout.split("\n").filter(line => line.length > 0);
          let [ channelsListTitle, ...channelsList ] = channelsListResult;
          channelsList = channelsList.map(line => line.trim());
          return resolve(channelsList);
        } else {
          return resolve(undefined);
        }
      });
    });
  }

  public static async listProperties(channel: string): Promise<string[] | undefined> {
    return new Promise((resolve) => {
      exec(this.getListPropertiesCommand(channel), (error, stdout, stderr) => {
        if (error) {
          return resolve(undefined);
        }
  
        if (stdout !== undefined && stdout !== '') {
          const properties = stdout.split("\n").filter(line => line.length > 0);
          return resolve(properties);
        } else {
          return resolve(undefined);
        }
      });
    });
  }

  public static async read(channel: string, property: string): Promise<string | number | boolean | undefined> {
    return new Promise((resolve) => {
      exec(this.getReadPropertyCommand(channel, property), (error, stdout, stderr) => {
        if (error) {
          return resolve(undefined);
        }

        if (stdout !== undefined && stdout !== '') {
          try {
            const value = stdout.trim();

            // if bool type
            if (value === 'false' || value === 'true') {
              return resolve(value === 'true');
            }

            // if int type
            if (parseInt(value, 10) !== NaN) {
              return resolve(parseInt(value, 10));
            }

            // string type & others
            return resolve(value);
          } catch (error) {
            return resolve(stdout);
          }
        } else {
          return resolve(undefined);
        }
      });
    });
  }

  public static async write(channel: string, property: string, value: string | number | boolean): Promise<boolean> {
    return new Promise((resolve) => {
      exec(this.getWritePropertyCommand(channel, property, value), (error, stdout, stderr) => {
        if (error) {
          return resolve(false);
        }

        if (stdout !== undefined && stdout === '') {
          return resolve(true);
        }
        
        return resolve(false);
      });
    });
  }

  // private

  private static getListPropertiesCommand(channel: string): string {
    return `xfconf-query -c ${channel} -l`;
  }

  private static getReadPropertyCommand(channel: string, property: string): string {
    return `xfconf-query -c ${channel} -p ${property}`;
  }

  private static getWritePropertyCommand(channel: string, property: string, value: string | number | boolean): string {
    return `xfconf-query -c ${channel} -p ${property} -s ${value} -t ${this.getValueType(value)} --create`;
  }

  private static getValueType(value: string | number | boolean) {
    let type;

    switch (typeof value) {
      case 'number':
        type = 'int';
        break;
      case 'boolean':
        type = 'bool';
        break;
      default:
        type = 'string';
        break;
    }

    return type;
  }
}