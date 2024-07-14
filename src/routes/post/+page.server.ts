import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { promisify } from 'util';

export const prerender = true;
interface Post {
  id: number;
  name: string;
}
export async function load() {
	const directory = path.resolve(process.cwd(), 'src/posts');
	const fileNames: string[] = await fs.promises.readdir(directory);
  console.log(fileNames);
	const readFile = promisify(fs.readFile);
  const files: Post[] = [];
  for (const fileName of fileNames) { 
    const filedata = await readFile(path.resolve(`src/posts/${fileName}`), 'utf-8');
    files.push({id: Number(matter(filedata).data.id), name: fileName});
  }
  console.log(files);
  const sortfiles = files.sort((a, b) => a.id - b.id);
  const posts:string[] = sortfiles.map((file) => file.name.replace('.md', ''));
  console.log(posts);
	return {
		posts,
	};
}
