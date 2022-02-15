export type Context = {
    status?: number;
    url?: string;
    to?: string;
    token?: string;
    initialProps:{
        [key: string]: any;
    } | {};
}
