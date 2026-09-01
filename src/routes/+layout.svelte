<script>
	import '../app.css';
	import { onMount } from 'svelte';
	import TopBar from '$lib/components/TopBar.svelte';
	import Footer from '$lib/components/Footer.svelte';

	/** @type {HTMLElement} */
	let chromeEl;

	function syncChromeHeight() {
		if (!chromeEl) return;
		document.documentElement.style.setProperty('--chrome-h', `${chromeEl.offsetHeight}px`);
	}

	onMount(() => {
		syncChromeHeight();
		// Fonts loading in can change the header's height after first paint.
		document.fonts?.ready.then(syncChromeHeight);
		window.addEventListener('resize', syncChromeHeight);
		return () => window.removeEventListener('resize', syncChromeHeight);
	});
</script>

<div class="app-shell">
	<div class="site-chrome" bind:this={chromeEl}>
		<TopBar />
	</div>

	<main class="app-content">
		<slot />
	</main>

	<Footer />
</div>

<style>
	/* Plain flex column (no visual frame) so the footer always sits at the
	   bottom of the viewport on short pages (Guides, Submit) instead of
	   floating right under the content. Tall pages (the homepage, whose
	   sections already sum to several viewport heights) are unaffected —
	   .app-content just grows past 100vh like normal flow. */
	.app-shell {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}

	.app-shell :global(.app-content) {
		flex: 1;
	}

	.site-chrome {
		position: sticky;
		top: 0;
		z-index: 100;
	}
</style>
