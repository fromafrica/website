import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
 
export const load = (() => {
  const post = {'title': 'My first post', 'content': 'Hello world'};
 
  if (post) {
    return post;
  }
 
  if (!post) {
    throw error(404, 'Not found');
  }
}) satisfies PageServerLoad;