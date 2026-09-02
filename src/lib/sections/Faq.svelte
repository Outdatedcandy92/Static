<script>
	const faqs = [
		{
			title: 'Eligibility',
			body: 'You have to be 13 to 18 years old to be eligible to participate in Hack Club YSWS programs.'
		},
		{
			title: 'What do I get?',
			body: 'You get a kit with the parts to build an FM radio shipped to you, or you can receive funding to build one yourself.'
		},
		{
			title: 'Do I need experience?',
			body: "No, you don't need experience to start. You can follow the guides and build your own radio from there."
		},
		{
			title: 'What software should I use?',
			body: 'KiCad or EasyEDA for PCB design, and Fusion 360 or Onshape for CAD.'
		},
		{
			title: "What counts as 'shipped'?",
			body: 'A shipped project is publicly available online, like a GitHub repo or equivalent, so people can see it, use it, and build their own version from it.'
		},
		{
			title: 'What is Hack Club?',
			body: 'Hack Club is a 501(c)(3) nonprofit and a network of technical high schoolers. We run programs like this one so teenagers can learn real skills by building real projects, for free.'
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
		max-width: 1200px;
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
		transition:
			transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1),
			box-shadow 0.2s ease;
	}

	.faq-card:hover {
		transform: translate(-4px, -4px) scale(1.03);
		box-shadow: 9px 9px 0 rgba(0, 0, 0, 0.85);
	}

	.faq-card:hover .accent-strip {
		height: 9px;
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
