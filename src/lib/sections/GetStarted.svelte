<script>
	import Win98Button from '$lib/components/Win98Button.svelte';

	// Drop a YouTube/Vimeo embed URL here later, e.g.
	// "https://www.youtube-nocookie.com/embed/VIDEO_ID"
	// and this section will render the iframe instead of the placeholder.
	export let embedUrl = '';
</script>

<section id="get-started" class="section">
	<div class="get-started-inner">
		<h2 class="section-heading">new to hardware?</h2>
		<p class="subheading">
			Join thousands of teenagers who are learning as well at Hack Club.<br />
			Ask questions in #static
		</p>

		<div class="video-frame panel-flat">
			{#if embedUrl}
				<iframe
					src={embedUrl}
					title="Static intro video"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
				></iframe>
			{:else}
				<div class="video-placeholder" role="img" aria-label="Video coming soon">
					<span class="play-icon">▶</span>
					<span class="coming-soon">Video tutorial coming soon!</span>
				</div>
			{/if}
		</div>

		<Win98Button href="/guides" class="guide-button">read the guide</Win98Button>
	</div>
</section>

<style>
	.get-started-inner {
		max-width: 960px;
		margin: 0 auto;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.subheading {
		text-align: center;
		font-size: 1.05rem;
		color: var(--win98-text-muted);
		margin-bottom: 2rem;
	}

	.video-frame {
		width: 100%;
		aspect-ratio: 16 / 9;
		padding: 4px;
	}

	.video-frame iframe {
		width: 100%;
		height: 100%;
		border: 0;
	}

	.video-placeholder {
		width: 100%;
		height: 100%;
		background: #6e6e6e;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 0.75rem;
	}

	.play-icon {
		font-size: 3rem;
		color: #c0c0c0;
	}

	.coming-soon {
		font-family: var(--font-display);
		font-weight: 700;
		font-size: 1.05rem;
		color: #e6e6e6;
	}

	.get-started-inner :global(.guide-button) {
		margin-top: 1.75rem;
	}
</style>
