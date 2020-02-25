/* eslint-disable no-unused-vars */
import { Store }    from '@core/types/store';
import { fetchOne } from '@core/utils/fetch';
import api          from '@app/routes/api';

type Match = {
    query: string;
}

type Auth = {
    token?: string;
}

export default async function ({ dispatch }: Store, { query }: Match, { token }: Auth): Promise<any> {
    const texts = await fetchOne({
        ...api.test.getPosts
    });

    return texts;
}
