<!--
	Persistent Win98 topbar: icon + "Static" wordmark on the left, section
	nav on the right — a single flat bevelled bar (matching
	555.hackclub.com's topbar) instead of a gradient caption stacked on
	top of a separate toolbar.
-->
<script>
	const navItems = [
		{ label: 'Home', href: '/#landing' },
		{ label: 'How it Works', href: '/#how-it-works' },
		{ label: 'Get Started', href: '/#get-started' },
		{ label: 'Guides', href: '/guides' },
		{ label: 'FAQ', href: '/#faq' }
	];

	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
</script>

<header class="topbar bevel-out">
	<button type="button" class="brand" on:click={scrollToTop} aria-label="Scroll to top">
		<img class="brand-icon" src="/icon.png" alt="" width="24" height="18" />
		<span class="wordmark">Static</span>
	</button>

	<nav class="nav" aria-label="Section navigation">
		{#each navItems as item}
			<a class="nav-link" href={item.href}>{item.label}</a>
		{/each}
		<a class="nav-link submit-link" href="/submit">Submit</a>
	</nav>
</header>

<style>
	.topbar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-wrap: wrap;
		gap: 0.5rem;
		background: var(--win98-window);
		padding: 0.5rem 0.9rem;
	}

	.brand {
		display: flex;
		align-items: center;
		gap: 0.55rem;
		min-width: 0;
		background: none;
		border: none;
		padding: 0;
		margin: 0;
		cursor: pointer;
		color: inherit;
	}

	.brand-icon {
		image-rendering: pixelated;
		flex-shrink: 0;
		transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
	}

	.brand:hover .brand-icon {
		transform: scale(1.15) rotate(-6deg);
	}

	.wordmark {
		font-family: var(--font-display);
		font-weight: 700;
		font-size: 1.4rem;
		letter-spacing: 0.02em;
		white-space: nowrap;
	}

	.nav {
		display: flex;
		align-items: center;
		gap: 0.15rem;
		flex-wrap: wrap;
		justify-content: flex-end;
		margin-left: auto;
	}

	.nav-link {
		padding: 0.3rem 0.7rem;
		font-size: 0.95rem;
		font-weight: 700;
		color: var(--win98-blue);
		text-decoration: none;
		display: inline-block;
		transform: translateY(0);
		transition: transform 0.15s ease;
	}

	.nav-link:hover,
	.nav-link:focus-visible {
		text-decoration: underline;
		text-decoration-thickness: 2px;
		transform: translateY(-2px);
	}

	/* Filled CTA, pinned to the far right by nav's margin-left: auto —
	   matches 555.hackclub.com's highlighted "Submit" nav link. */
	.submit-link {
		background: var(--win98-blue);
		color: var(--win98-titlebar-text);
		border: 2px solid var(--win98-border-darkest);
		box-shadow:
			inset 1px 1px 0 var(--win98-border-light),
			inset -1px -1px 0 var(--win98-border-darkest);
		margin-left: 0.4rem;
		transition:
			transform 0.15s ease,
			filter 0.15s ease;
	}

	.submit-link:hover,
	.submit-link:focus-visible {
		text-decoration: none;
		filter: brightness(1.15);
		transform: translateY(-2px) scale(1.05);
	}

	@media (max-width: 640px) {
		.topbar {
			justify-content: center;
		}

		.nav {
			width: 100%;
			justify-content: center;
		}
	}
</style>
