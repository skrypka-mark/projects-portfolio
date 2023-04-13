<script setup>
import PortfolioCard from '@/components/PortfolioCard';

const projects = [
	{
		id: '1',
		name: 'Name project',
		image: '/src/assets/images/Project1.png'
	},
	{
		id: '2',
		name: 'Name project',
		image: '/src/assets/images/Project2.png'
	},
	{
		id: '3',
		name: 'Name project',
		image: '/src/assets/images/Project3.png'
	},
	{
		id: '4',
		name: 'Name project',
		image: '/src/assets/images/Project4.png'
	},
	{
		id: '5',
		name: 'Name project',
		image: '/src/assets/images/Project5.png'
	},
	{
		id: '6',
		name: 'Name project',
		image: '/src/assets/images/Project6.png'
	},
	{
		id: '7',
		name: 'Name project',
		image: '/src/assets/images/Project2.png'
	},
	{
		id: '8',
		name: 'Name project',
		image: '/src/assets/images/Project3.png'
	},
	{
		id: '9',
		name: 'Name project',
		image: '/src/assets/images/Project4.png'
	},
	{
		id: '10',
		name: 'Name project',
		image: '/src/assets/images/Project5.png'
	},
	{
		id: '11',
		name: 'Name project',
		image: '/src/assets/images/Project6.png'
	}
];
</script>

<template>
	<div class='portfolio-container'>
		<PortfolioCard :key=project.id v-for='project in projects' v-bind=project />
	</div>
</template>

<style lang='scss' scoped>
.portfolio-container {
	--columns-amount: 3;

	display: grid;
	grid-template-columns: repeat(var(--columns-amount), minmax(262px, 1fr));
	gap: 20px;

	// width: 100%;

	@media (max-width: 1200px) { --columns-amount: 2; }
	// @media (max-width: 900px) {
	// 	--columns-amount: 2;
	// 	gap: 20px;
	// }
	// @media (max-width: 600px) { --columns-amount: 1; }

	padding: $container-gap;
}
</style>
