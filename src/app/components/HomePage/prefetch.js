// @flow

import type { StoreType } from 'core/types/store';
import { fetchOne }       from 'core/utils/fetch';
import api                from 'app/routes/api';

type MatchType = {
    query: string
}

type AuthType = {
    token?: string
}

// eslint-disable-next-line
export default async function ({ dispatch }: StoreType, { query }: MatchType, { token }: AuthType) {
    const texts = await fetchOne({
        ...api.test.getPosts
    });

    return texts;
}
