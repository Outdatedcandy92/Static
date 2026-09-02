<script>
	import { onMount } from 'svelte';
	import ComingSoon from '$lib/components/ComingSoon.svelte';

	// Auto-discovers every guide: drop a new `.md` file into
	// src/lib/guides/ (with `title` / `subtitle` / `order` frontmatter)
	// and it shows up in the sidebar below — nothing else to wire up.
	// mdsvex compiles each into a Svelte component plus a `metadata`
	// export carrying the parsed frontmatter.
	const modules = import.meta.glob('/src/lib/guides/*.md', { eager: true });

	const guides = Object.entries(modules)
		.map(([path, mod]) => {
			const { default: component, metadata } = /** @type {{ default: import('svelte').Component, metadata?: Record<string, unknown> }} */ (
				mod
			);
			const slug = (path.split('/').pop() ?? path).replace(/\.md$/, '');
			const meta = metadata ?? {};
			return {
				slug,
				title: /** @type {string} */ (meta.title ?? slug),
				subtitle: /** @type {string} */ (meta.subtitle ?? ''),
				order: Number(meta.order ?? 999),
				component
			};
		})
		.sort((a, b) => a.order - b.order || a.title.localeCompare(b.title));

	let activeSlug = guides[0]?.slug ?? null;
	$: activeGuide = guides.find((guide) => guide.slug === activeSlug) ?? guides[0] ?? null;

	function syncFromHash() {
		const slug = window.location.hash.slice(1);
		if (slug && guides.some((guide) => guide.slug === slug)) {
			activeSlug = slug;
		}
	}

	onMount(() => {
		syncFromHash();
		window.addEventListener('hashchange', syncFromHash);
		return () => window.removeEventListener('hashchange', syncFromHash);
	});
</script>

<svelte:head>
	<title>{activeGuide ? `${activeGuide.title} - Guides - Static` : 'Guides - Static'}</title>
</svelte:head>

<section class="section">

	{#if guides.length === 0}
		<ComingSoon message="Guides are coming soon!" />
	{:else}
		<div class="guide-layout">
			<aside class="sidebar">
				<div class="sidebar-header">Guides</div>
				{#each guides as guide}
					<a
						href="#{guide.slug}"
						class="guide-item"
						class:active={guide.slug === activeGuide?.slug}
					>
						<span class="guide-title">{guide.title}</span>
						{#if guide.subtitle}
							<span class="guide-subtitle">{guide.subtitle}</span>
						{/if}
					</a>
				{/each}
			</aside>

			<article class="guide-content">
				{#if activeGuide}
					{#key activeGuide.slug}
						<div class="content-header">
							<p class="eyebrow">guide</p>
							<h2>{activeGuide.title}</h2>
							{#if activeGuide.subtitle}
								<p class="content-subtitle">{activeGuide.subtitle}</p>
							{/if}
						</div>
						<div class="markdown-body">
							<svelte:component this={activeGuide.component} />
						</div>
					{/key}
				{/if}
			</article>
		</div>
	{/if}
</section>

<style>
	/* Nested Win98 "explorer window" look, matching 555.hackclub.com's
	   guide page (github.com/outdatedcandy92/555): the panel itself and
	   the sidebar are each their own recessed pane (thick black border +
	   a thin inset highlight one shade lighter), sitting inside one
	   another like a real Windows list/detail view — a deliberate
	   exception to the rest of Static's flat "sticker" cards, just for
	   this page, because that layered-window depth is what makes 555's
	   guide reader read as an app instead of a page. */
	.guide-layout {
		max-width: 1200px;
		margin: 0 auto;
		display: grid;
		grid-template-columns: minmax(220px, 300px) minmax(0, 1fr);
		gap: 1rem;
		background: var(--win98-card);
		border: 4px solid var(--win98-border-darkest);
		box-shadow: inset 0 0 0 3px var(--win98-border-lightest);
		padding: 1rem;
	}

	.sidebar {
		background: #c9c9c9;
		border: 3px solid var(--win98-border-darkest);
		box-shadow: inset 0 0 0 2px #e3e3e3;
		padding: 0.75rem 0.5rem;
	}

	.sidebar-header {
		padding: 0.5rem 0.75rem 0.85rem;
		font-family: var(--font-display);
		font-weight: 700;
		font-size: 1.3rem;
		border-bottom: 2px solid var(--win98-border-darkest);
		margin-bottom: 0.5rem;
	}

	.guide-item {
		display: flex;
		flex-direction: column;
		padding: 0.7rem 0.75rem;
		margin-bottom: 0.5rem;
		background: transparent;
		color: var(--win98-text);
		text-decoration: none;
		border: 2px solid transparent;
		transition:
			background 0.15s ease,
			transform 0.15s ease;
	}

	/* Idle tabs sit flush (no border/shadow), but nudge right and pick up
	   a faint tint on hover so they don't feel dead before you click. */
	.guide-item:hover:not(.active) {
		background: rgba(0, 0, 0, 0.08);
		transform: translateX(3px);
	}

	/* Only the active one gets the "pressed" bevel, like a selected item
	   in a Win98 listbox. */
	.guide-item.active {
		background: var(--win98-blue);
		color: var(--win98-titlebar-text);
		border-color: var(--win98-border-darkest);
		box-shadow:
			inset 1px 1px 0 var(--win98-border-lightest),
			inset -1px -1px 0 var(--win98-border-darkest);
	}

	.guide-title {
		font-family: var(--font-display);
		font-weight: 700;
		font-size: 1.05rem;
		line-height: 1.25;
	}

	.guide-subtitle {
		font-size: 0.78rem;
		opacity: 0.85;
		margin-top: 0.2rem;
	}

	.guide-content {
		background: #efefef;
		border: 3px solid var(--win98-border-darkest);
		padding: 1.5rem 1.25rem 1.75rem;
		min-height: 360px;
	}

	.content-header {
		padding-bottom: 0.75rem;
		margin-bottom: 1rem;
		border-bottom: 3px solid var(--win98-border-darkest);
	}

	.eyebrow {
		margin: 0 0 0.35rem;
		font-size: 0.75rem;
		font-weight: 700;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--win98-blue);
	}

	.content-header h2 {
		font-size: clamp(1.7rem, 2.2vw, 2.3rem);
		line-height: 1.1;
	}

	.content-subtitle {
		margin-top: 0.35rem;
		color: var(--win98-text-muted);
	}

	.markdown-body {
		font-size: 1.05rem;
		line-height: 1.7;
	}

	.markdown-body :global(h3) {
		font-family: var(--font-display);
		margin: 1.4rem 0 0.6rem;
		line-height: 1.2;
		font-size: clamp(1.15rem, 1.7vw, 1.4rem);
	}

	.markdown-body :global(h3:first-child) {
		margin-top: 0;
	}

	.markdown-body :global(p),
	.markdown-body :global(li) {
		margin: 0.5rem 0;
	}

	.markdown-body :global(ul),
	.markdown-body :global(ol) {
		padding-left: 1.4rem;
		margin: 0.9rem 0;
	}

	.markdown-body :global(a) {
		color: var(--win98-blue);
		text-decoration: underline;
		text-decoration-thickness: 2px;
		text-underline-offset: 3px;
	}

	.markdown-body :global(pre) {
		background: #111111;
		color: #f4f4f4;
		padding: 1rem;
		border: 3px solid var(--win98-border-darkest);
		overflow-x: auto;
		margin: 1rem 0;
	}

	.markdown-body :global(code) {
		font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
		background: rgba(0, 0, 0, 0.08);
		padding: 0.15rem 0.35rem;
	}

	.markdown-body :global(pre code) {
		background: transparent;
		padding: 0;
	}

	.markdown-body :global(blockquote) {
		margin: 1rem 0;
		padding: 0.6rem 0.9rem;
		border-left: 4px solid var(--win98-blue);
		background: var(--win98-window);
		font-style: italic;
	}

	.markdown-body :global(img),
	.markdown-body :global(video) {
		max-width: 100%;
		display: block;
		height: auto;
		margin: 1rem auto;
		border: 3px solid var(--win98-border-darkest);
		background: #ffffff;
	}

	@media (max-width: 860px) {
		.guide-layout {
			grid-template-columns: 1fr;
		}

		.sidebar {
			display: flex;
			flex-wrap: wrap;
			gap: 0.4rem;
			min-height: 0;
		}

		.sidebar-header {
			flex: 1 1 100%;
		}

		.guide-item {
			flex: 1 1 200px;
			margin-bottom: 0;
		}
	}
</style>
