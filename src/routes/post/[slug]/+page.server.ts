import Shiki from '@shikijs/markdown-it';
import fs from 'fs';
import matter from 'gray-matter';
import markdown from 'markdown-it';
import path from 'path';
import { promisify } from 'util';

export const prerender = true;
const readFile = promisify(fs.readFile);
const md = new markdown();
md.use(
	await Shiki({
		theme: 'github-dark'
	})
);
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

	const content = md.render(matter(data).content);

	const date = matter(data).data.date;
	const title = matter(data).data.title;
	return {
		content,
		date,
		title
	};
}
