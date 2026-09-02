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
			<p class="subheading">for teenagers, 18 or under</p>
			<Win98Button href="#how-it-works">learn how to make a radio</Win98Button>
		</div>
		<div class="hero-image">
			<!-- PCB sits underneath; the case sits on top at the same registration
			     and fades out on hover to reveal the board inside. -->
			<div class="hero-stack">
				<img class="hero-layer" src="/images/hero-pcb.png" alt="" aria-hidden="true" />
				<img
					class="hero-layer hero-case"
					src="/images/hero-case.png"
					alt="A finished FM radio build, angled with its antenna extended"
				/>
			</div>
		</div>
	</div>
</section>

<style>
	.hero {
		border-top: none;
	}

	.hero-inner {
		max-width: 1400px;
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
		flex: 1 1 460px;
		display: flex;
		justify-content: center;
		max-width: 760px;
	}

	/* PCB + case share one grid cell so they line up pixel-for-pixel —
	   both renders come from the same registered crop, so stacking them
	   this way (instead of absolute positioning) keeps them aligned at
	   any width without hardcoding pixel offsets. */
	.hero-stack {
		display: grid;
		width: 100%;
		filter: drop-shadow(6px 6px 0 rgba(0, 0, 0, 0.85));
		transition:
			transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1),
			filter 0.3s ease;
	}

	.hero-stack:hover {
		transform: scale(1.06) rotate(-1.5deg);
		filter: drop-shadow(10px 10px 0 rgba(0, 0, 0, 0.85));
	}

	.hero-layer {
		grid-area: 1 / 1;
		width: 100%;
		height: auto;
	}

	.hero-case {
		transition: opacity 0.3s ease;
	}

	/* Case fades down to a ghost on hover, revealing the board underneath. */
	.hero-stack:hover .hero-case {
		opacity: 0.2;
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
