import fs from 'fs';
import markdown from 'markdown-it';
import path from 'path';
import { promisify } from 'util';


export const prerender = true;
const readFile = promisify(fs.readFile);

export async function load({ params }) {
	const { slug } = params;
	const filePath = path.resolve('src/posts', `${slug}.md`);
	let data: string = '';
	try {
		data = await readFile(filePath, 'utf-8');
	} catch (e) {
		return {
			status: 404,
			error: new Error(`Post not found`)
		};
	}
	const md = new markdown();
	const content = md.render(data);
	return {
		content
	};
}