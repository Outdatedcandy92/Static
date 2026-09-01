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
		max-width: 1200px;
		margin: 0 auto;
		display: flex;
		gap: 1.5rem;
		flex-wrap: wrap;
		justify-content: center;
	}

	.step-card {
		position: relative;
		flex: 1 1 220px;
		max-width: 280px;
		padding-top: 6px;
		overflow: hidden;
	}

	.step-card img {
		width: 100%;
		height: 220px;
		object-fit: cover;
	}

	.step-title {
		padding: 0.75rem 0.9rem;
		font-family: var(--font-display);
		font-weight: 700;
		font-size: 1.05rem;
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
