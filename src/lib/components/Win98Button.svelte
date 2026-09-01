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
	}

	.win98-button:active {
		box-shadow: none;
		transform: translate(5px, 5px);
	}
</style>
