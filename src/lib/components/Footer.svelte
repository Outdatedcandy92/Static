<!--
	Win98 status-bar style footer, persistent across every route.
-->
<footer class="status-bar bevel-out">
	<img class="status-icon" src="/icon.png" alt="" width="16" height="12" />
	<span>made by rudy</span>
</footer>

<style>
	.status-bar {
		display: flex;
		align-items: center;
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
</style>
