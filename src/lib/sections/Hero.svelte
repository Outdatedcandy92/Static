<script>
	import Win98Button from '$lib/components/Win98Button.svelte';
</script>

<section id="landing" class="section-full hero">
	<div class="hero-inner">
		<div class="hero-copy">
			<h1>
				Design a FM Radio<br />
				Get it for <span class="free">free</span>!
			</h1>
			<p class="subheading">for teenagers, 19 or under</p>
			<Win98Button href="#how-it-works">learn how to make a radio</Win98Button>
		</div>
		<div class="hero-image">
			<img src="/images/radio-cutout.png" alt="A finished FM radio build, angled with its antenna extended" />
		</div>
	</div>
</section>

<style>
	.hero {
		border-top: none;
	}

	.hero-inner {
		max-width: 1200px;
		margin: 0 auto;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 2rem;
		flex-wrap: wrap;
	}

	.hero-copy {
		flex: 1 1 380px;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 1.25rem;
	}

	h1 {
		font-size: clamp(2.25rem, 5.5vw, 3.75rem);
		line-height: 1.1;
	}

	.free {
		color: var(--win98-blue);
		text-decoration: underline;
		text-decoration-thickness: 3px;
		text-underline-offset: 4px;
	}

	.subheading {
		font-size: 1.15rem;
		font-weight: 700;
		color: var(--win98-text-muted);
	}

	.hero-image {
		flex: 1 1 320px;
		display: flex;
		justify-content: center;
		max-width: 480px;
	}

	.hero-image img {
		width: 100%;
		height: auto;
		filter: drop-shadow(6px 6px 0 rgba(0, 0, 0, 0.85));
	}

	@media (max-width: 640px) {
		.hero-inner {
			flex-direction: column-reverse;
			text-align: center;
		}

		.hero-copy {
			align-items: center;
		}
	}
</style>
