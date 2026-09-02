<!--
	Win98 status-bar style footer, persistent across every route.

	The two links on the right are required on every Hack Club YSWS
	website's footer (Promise Policy:
	docs.hackclub.com/handbook/policies/promise-policy) — don't remove them.
-->
<footer class="status-bar bevel-out">
	<img class="status-icon" src="/icon.png" alt="" width="16" height="12" />
	<span>made by rudy</span>

	<nav class="legal-links" aria-label="Legal">
		<a class="legal-link bevel-in" href="https://hackclub.com/privacy-and-terms">privacy &amp; terms</a>
		<a class="legal-link bevel-in" href="https://forms.hackclub.com/bounty">fulfillment bounty</a>
	</nav>
</footer>

<style>
	.status-bar {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		gap: 0.45rem;
		background: var(--win98-window);
		padding: 0.4rem 0.7rem;
		font-size: 0.85rem;
		color: var(--win98-text-muted);
	}

	.status-icon {
		image-rendering: pixelated;
		flex-shrink: 0;
	}

	.legal-links {
		display: flex;
		gap: 0.4rem;
		margin-left: auto;
	}

	.legal-link {
		padding: 0.15rem 0.55rem;
		background: var(--win98-window);
		color: var(--win98-link);
		text-decoration: none;
		white-space: nowrap;
		display: inline-block;
		transform: translateY(0);
		transition: transform 0.15s ease;
	}

	.legal-link:hover,
	.legal-link:focus-visible {
		text-decoration: underline;
		text-decoration-thickness: 2px;
		transform: translateY(-2px);
	}
</style>
