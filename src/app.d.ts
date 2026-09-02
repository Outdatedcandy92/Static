// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}

	// The Plausible snippet in src/app.html defines this queueing stub
	// before its real script loads (see src/routes/+layout.svelte, which
	// calls it on client-side navigations).
	interface Window {
		plausible?: (...args: unknown[]) => void;
	}
}

// mdsvex compiles plain `.md` files (see the `extensions` option in
// svelte.config.js) into Svelte components with a `metadata` export
// carrying the parsed frontmatter — mirrors mdsvex's own ambient
// declarations for `.svx` / `.svelte.md` in node_modules/mdsvex/globals.d.ts.
declare module '*.md' {
	import type { Component } from 'svelte';

	export default Component;
	export const metadata: Record<string, unknown>;
}

export {};
