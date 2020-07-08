import { Option } from 'fp-ts/lib/Option';

export type Context = {
    status?: number;
    url?: string;
    to?: string;
    token?: string;
    initialProps: Option<{
        [key: string]: any;
    }>;
}
