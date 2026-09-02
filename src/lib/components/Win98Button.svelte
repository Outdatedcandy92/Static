<!--
	Classic Win98 beveled button. Renders as <a> when `href` is set
	(used for the scroll-to-section CTA), otherwise a <button>.
-->
<script>
	/** @type {string | undefined} */
	export let href = undefined;
	/** @type {string} */
	let className = '';
	export { className as class };
</script>

{#if href}
	<a {href} class="win98-button {className}" on:click>
		<slot />
	</a>
{:else}
	<button type="button" class="win98-button {className}" on:click>
		<slot />
	</button>
{/if}

<style>
	/* Thick black border + a hard offset shadow (not a soft inset bevel) —
	   reads as a drawn/graphic button, and doubles as press feedback:
	   the shadow collapses and the button shifts into its place on
	   :active, like a sticker being pushed flat. */
	.win98-button {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 0.5em;
		font-family: var(--font-body);
		font-weight: 700;
		font-size: 1.05rem;
		color: var(--win98-text);
		background: var(--win98-window);
		padding: 0.75em 1.4em;
		text-decoration: none;
		cursor: pointer;
		border: 3px solid var(--win98-border-darkest);
		box-shadow: var(--win98-shadow);
		transform: translate(0, 0);
		transition:
			transform 0.15s cubic-bezier(0.34, 1.56, 0.64, 1),
			box-shadow 0.15s ease;
	}

	/* Lifts slightly on hover (deeper shadow), then the :active rule
	   below takes over on click and pushes it flat — the sticker
	   "peels up, then gets pressed down" language used sitewide. */
	.win98-button:hover {
		transform: translate(-2px, -2px);
		box-shadow: 7px 7px 0 rgba(0, 0, 0, 0.85);
	}

	.win98-button:active {
		box-shadow: none;
		transform: translate(5px, 5px);
	}
</style>
