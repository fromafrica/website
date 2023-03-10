import adapter from '@sveltejs/adapter-vercel';
import { resolve } from 'path';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),
        vite: {
            resolve: {
                alias: {
                    $components: resolve('./lib/components')
                }
            }
        }
	}
};

export default config;
