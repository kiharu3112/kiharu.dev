import fs from 'fs';
import path from 'path';

export const prerender = true;

export async function load() {
	const directory = path.resolve(process.cwd(), 'src/posts');
	const files = await fs.promises.readdir(directory);
	const mds = files.filter((file) => file.endsWith('.md'));
	const posts = mds.map((md) => md.replace('.md', ''));
	return {
		posts
	};
}
