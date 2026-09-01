<svelte:head>
	<title>PCB Design Guide — Static</title>
</svelte:head>

<div class="guide">

# PCB Design Guide

_This is a placeholder guide page. Real content coming soon — written in
Markdown via mdsvex, so it can be dropped in without touching any Svelte
code._

## Getting started

Outline the tools, footprints, and starter template teenagers should use to
lay out their first radio PCB here.

## Common mistakes

A short list of gotchas (footprint mismatches, missing decoupling caps,
antenna trace routing) goes here once written.

## Where to get help

Ask in `#static` on the Hack Club Slack.

</div>

<style>
	.guide {
		max-width: 720px;
		margin: 0 auto;
		padding: 3rem 1.5rem;
		font-family: var(--font-body);
	}

	.guide :global(h1),
	.guide :global(h2) {
		font-family: var(--font-display);
		margin-top: 2rem;
		margin-bottom: 0.75rem;
	}

	.guide :global(p),
	.guide :global(li) {
		line-height: 1.6;
	}

	.guide :global(code) {
		background: var(--win98-window);
		padding: 0.1em 0.35em;
		border: 1px solid var(--win98-border-dark);
	}
</style>
