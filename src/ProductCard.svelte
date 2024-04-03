<script lang="ts">
	import Modal from './Modal.svelte';
	import ProductLook from './ProductLook.svelte';

	export let title: string;
	export let residentialArea: string;
	export let price: string;
	export let imagePath: string;
	export let category: string = 'TEST-CATEGORY-TODO';

	let showModal: boolean = false;

	let showProductDetails = (e: Event) => {
		e.preventDefault();
		showModal = true;
	};
</script>

<Modal bind:showModal>
	<ProductLook productTitle={title} {imagePath} location={residentialArea} {price} />
</Modal>

<!-- svelte-ignore a11y-invalid-attribute -->
<a
	href="#"
	class="mx-auto bg-white shadow-lg w-64 rounded-2xl transition-all duration-100 ease-in-out transform hover:scale-105"
	on:click={showProductDetails}
>
	<div class="h-48 p-1 overflow-hidden">
		<div class="h-full flex items-center justify-center">
			<img src={imagePath} alt="ShareUMass Logo" class="w-full h-full object-contain" />
		</div>
	</div>
	<div class="p-3 flex flex-col gap-y-2">
		<div class="mt-6 flex-none h-20 flex items-center">
			<h1 class="text-md font-bold text-gray-900 line-clamp-3">
				{title}
			</h1>
		</div>
		<h1 class="bg-teal-300 rounded-md pl-2 text-sm font-bold text-gray-900 line-clamp-1">
			{residentialArea}
		</h1>
		<div class="text-[#101828]">
			<span class="font-bold text-2xl leading-none">$</span>
			<span class="font-bold text-4xl"> {price} </span>
		</div>
	</div>
</a>
