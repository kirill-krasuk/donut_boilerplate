import { fetchOne } from '@core/utils/fetch';
import { api }      from '@app/routes/api';


// export default async function ({ dispatch }: Store, { query }: Match, { token }: Auth): Promise<any> {
export default async function (): Promise<any> {
    const texts = await fetchOne({
        ...api.test.getPosts
    });

    return texts;
}
