<script>
	const faqs = [
		{
			title: 'Eligibility',
			body: 'Placeholder answer — swap in the real eligibility rules here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
		},
		{
			title: 'What do I get?',
			body: 'Placeholder answer — swap in the real prize details here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
		},
		{
			title: 'Do I need experience?',
			body: 'Placeholder answer — swap in the real experience requirements here. Lorem ipsum dolor sit amet, consectetur.'
		},
		{
			title: 'What software should I use?',
			body: 'Placeholder answer — swap in the recommended PCB/CAD/firmware tools here. Lorem ipsum dolor sit amet, consectetur.'
		},
		{
			title: "What counts as 'shipped'?",
			body: 'Placeholder answer — swap in the real shipping/submission criteria here. Lorem ipsum dolor sit amet, consectetur.'
		},
		{
			title: 'What is Hack Club?',
			body: "Hack Club is a nonprofit network of free, teen-led coding clubs and hardware programs. We build real tools and ship free parts so teenagers can learn by making things — no experience required."
		}
	];
</script>

<section id="faq" class="section">
	<div class="faq-inner">
		<h2 class="section-heading">FAQ</h2>
		<div class="faq-grid">
			{#each faqs as faq}
				<div class="faq-card panel-flat">
					<div class="accent-strip"></div>
					<div class="faq-card-body">
						<h3>{faq.title}</h3>
						<p>{faq.body}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.faq-inner {
		max-width: 1100px;
		margin: 0 auto;
		width: 100%;
	}

	.faq-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1.5rem;
	}

	.faq-card {
		position: relative;
		height: 220px;
		overflow: hidden;
	}

	.faq-card-body {
		padding: 1.4rem 1.1rem 1rem;
		height: 100%;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		gap: 0.6rem;
	}

	.faq-card-body h3 {
		font-family: var(--font-display);
		font-size: 1.05rem;
		font-weight: 700;
	}

	.faq-card-body p {
		font-size: 0.9rem;
		color: var(--win98-text-muted);
		overflow: hidden;
	}

	@media (max-width: 900px) {
		.faq-grid {
			grid-template-columns: 1fr;
		}

		.faq-card {
			height: auto;
			min-height: 160px;
		}
	}
</style>
