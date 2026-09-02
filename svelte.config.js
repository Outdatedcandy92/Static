import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.md']
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// mdsvex lets .md files be treated as Svelte components / routes,
	// so guide pages under src/routes/guides/** can be written in markdown.
	extensions: ['.svelte', '.md'],
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],
	kit: {
		// Fully static output (no server/backend) via adapter-static.
		// `export const prerender = true` in src/routes/+layout.js prerenders every route.
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: true
		}),
		prerender: {
			// /guides links to #<slug> hashes for its client-side guide
			// switcher (see src/routes/guides/+page.svelte) — those aren't
			// real in-page anchor ids, so skip SvelteKit's crawl-time check
			// for them instead of failing the build.
			handleMissingId: 'ignore'
		}
	}
};

export default config;
