export default class XFConfQuery {
    static list(channel: string): string[] | void;
    static read(channel: string, property: string): string | number | boolean | undefined | void;
    static write(): Promise<void>;
    private static getListCommand;
    private static getReadCommand;
}
