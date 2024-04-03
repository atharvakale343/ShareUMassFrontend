<script lang="ts">
	import ProductCardLoading from './ProductCardLoading.svelte';
	import ProductCard from './ProductCard.svelte';
	import type { ComponentProps } from 'svelte';
	import { fade } from 'svelte/transition';
	import { residentialFilter, categoryFilter } from './stores';

	export let productCards: ComponentProps<ProductCard>[];

	let filteredProducts: ComponentProps<ProductCard>[];

	$: filteredProducts = filterProducts(productCards, $residentialFilter, $categoryFilter);

	function filterProducts(
		productCards: ComponentProps<ProductCard>[],
		residentialFilter: string[],
		categoryFilter: string[]
	) {
		return productCards
			.filter(
				(card) => residentialFilter.length === 0 || residentialFilter.includes(card.residentialArea)
			)
			.filter(
				(card) => categoryFilter.length === 0 || categoryFilter.includes(card.category || 'missing')
			);
	}
</script>

{#await new Promise((resolve) => setTimeout(resolve, 2500))}
	<div out:fade={{ duration: 100 }}>
		<div
			class="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 gap-y-4 mt-2"
		>
			<ProductCardLoading />
			<ProductCardLoading />
			<ProductCardLoading />
			<ProductCardLoading />
			<ProductCardLoading />
			<ProductCardLoading />
			<ProductCardLoading />
			<ProductCardLoading />
		</div>
	</div>
{:then _}
	<div in:fade={{ delay: 0, duration: 150 }}>
		<div
			class="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 gap-y-4 mt-2"
		>
			{#each filteredProducts as card}
				{#if card}
					<ProductCard {...card} />
				{:else}
					<ProductCardLoading />
				{/if}
			{/each}
		</div>
	</div>
{/await}
