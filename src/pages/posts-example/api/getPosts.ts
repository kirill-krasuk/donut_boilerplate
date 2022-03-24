import { env } from '@env/index';

export async function getPosts() {
    const res = await fetch(`${ env.client.api }/posts`);
    return await res.json();
}
