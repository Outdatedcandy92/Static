<!--
	Shared "coming soon" placeholder panel used by /guides and /submit
	until either page has real content.
-->
<script>
	/** Main message, e.g. "Guides are coming soon!" */
	export let message = '';
</script>

<div class="coming-soon panel-flat">
	<p>{message}</p>
	<p class="sub">Check back later, or ask in #static on the Hack Club Slack.</p>
</div>

<style>
	.coming-soon {
		max-width: 480px;
		margin: 0 auto;
		padding: 2rem 1.5rem;
		text-align: center;
	}

	.coming-soon p {
		font-family: var(--font-display);
		font-weight: 700;
		font-size: 1.15rem;
	}

	.coming-soon .sub {
		margin-top: 0.75rem;
		font-weight: 400;
		font-size: 0.95rem;
		color: var(--win98-text-muted);
	}
</style>
