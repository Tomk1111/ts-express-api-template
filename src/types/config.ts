export interface IConfig {
    env: string,
    port: number;
    logs: {
        level: string;
    };
    api: {
        prefix: string;
    };
}