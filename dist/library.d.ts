export default class XFConfQuery {
    static list(channel: string): string[] | void;
    static read(): Promise<void>;
    static write(): Promise<void>;
    private static getListCommand;
}
