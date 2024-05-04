import fs from 'fs';
import path from 'path';

export async function load() {
	const directory = path.resolve(process.cwd(), 'src/posts');
	const files = await fs.promises.readdir(directory);
	const posts = files.map((file) => file.replace('.md', ''));
	return {
		posts
	};
}
