import { alert } from '@mdit/plugin-alert';
import { container } from '@mdit/plugin-container';
import Shiki from '@shikijs/markdown-it';
import fs from 'fs';
import matter from 'gray-matter';
import markdown from 'markdown-it';
import mila from 'markdown-it-link-attributes';
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
md.use(alert);
md.use(container, {
	name: 'warning'
});
md.use(mila, {
	attrs: {
		target: '_blank',
		rel: 'noopener'
	}
});
type Param = {
	slug: string;
};
export async function load({ params }: { params: Param }) {
	const { slug } = params;
	const filePath = path.resolve('src/posts', `${slug}.md`);
	let data = '';
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
