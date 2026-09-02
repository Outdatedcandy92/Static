<script>
	const steps = [
		{ title: '1. design a pcb', image: '/images/step1-pcb.png', alt: 'A PCB layout tool showing the radio circuit board design' },
		{ title: '2. design a case', image: '/images/step2-case.png', alt: 'A CAD program showing a 3D-modeled radio case' },
		{ title: '3. write firmware', image: '/images/step3-firmware.png', alt: 'A code editor with firmware source for the radio' },
		{ title: '4. submit :D', image: '/images/step4-submit.png', alt: 'Submitting the finished PCB design' }
	];
</script>

<section id="how-it-works" class="section">
	<h2 class="section-heading">how it works</h2>
	<div class="steps">
		{#each steps as step}
			<div class="step-card panel-flat">
				<div class="accent-strip"></div>
				<img src={step.image} alt={step.alt} />
				<p class="step-title">{step.title}</p>
			</div>
		{/each}
	</div>
</section>

<style>
	.steps {
		max-width: 1400px;
		margin: 0 auto;
		display: flex;
		gap: 1.75rem;
		flex-wrap: wrap;
		justify-content: center;
	}

	.step-card {
		position: relative;
		flex: 1 1 250px;
		max-width: 320px;
		padding-top: 6px;
		overflow: hidden;
		transition:
			transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1),
			box-shadow 0.2s ease;
	}

	.step-card:hover {
		transform: translate(-4px, -4px) scale(1.04);
		box-shadow: 9px 9px 0 rgba(0, 0, 0, 0.85);
	}

	.step-card:hover .accent-strip {
		height: 9px;
	}

	.step-card img {
		width: 100%;
		height: 250px;
		object-fit: cover;
		transition: transform 0.3s ease;
	}

	.step-card:hover img {
		transform: scale(1.08);
	}

	.step-title {
		padding: 0.85rem 1rem;
		font-family: var(--font-display);
		font-weight: 700;
		font-size: 1.15rem;
	}

	@media (max-width: 640px) {
		.steps {
			flex-direction: column;
			align-items: center;
		}

		.step-card {
			width: 100%;
			max-width: 360px;
		}
	}
</style>
