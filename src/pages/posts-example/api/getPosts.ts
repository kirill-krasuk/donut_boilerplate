import { env } from '@env/index';

export async function getPosts() {
	const response = await fetch(`${ env.client.api }/posts`);
	return response.json();
}
