<script lang="ts">
	import { onMount, tick } from 'svelte';
	import Shiny from './svgs/Shiny.svelte';
	import Contact from './svgs/Contact.svelte';
	import ProductAddForm from './ProductAddForm.svelte';

	import { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { formSchema, type ProductFormSchema } from './routes/productAddSchema';
	import { page } from '$app/stores';
	export let form: SuperValidated<Infer<ProductFormSchema>>;
	export let showProductAdd: boolean;
	let image: HTMLImageElement;

	// page.subscribe((data) => {
	// 	const file = data?.form?.image;
	// 	const reader = new FileReader();
	// 	reader.addEventListener('load', function () {
	// 		if (reader.result) {
	// 			image.setAttribute('src', reader.result as string);
	// 		}
	// 	});
	// 	reader.readAsDataURL(file);
	// });
</script>

<div class="flex flex-col">
	<div class="bg-white shadow-md rounded-3xl p-4">
		<form
			method="POST"
			action="/?/addProduct"
			class="flex-none lg:flex items-center justify-center"
		>
			<div class="flex-auto basis-1/2 h-full sm:w-80 lg:mb-0 mr-4 flex items-center justify-center">
				<img
					bind:this={image}
					class="w-full h-full object-scale-down lg:h-96 lg:w-96 rounded-2xl p-8"
					src="/image-preview.png"
					alt="Uploaded"
				/>
			</div>
			<div class="flex-auto basis-1/2 flex flex-col justify-center ml-3 py-2 pr-6">
				<div class="flex flex-wrap pb-4">
					<div class="w-full flex-none text-xs text-blue-700 font-medium">U(N)BOXED Store</div>
					<h2 class="flex-auto text-xl font-medium w-20 mt-1">Create new Post</h2>
				</div>
				<ProductAddForm bind:data={form} bind:showProductAdd />
			</div>
		</form>
	</div>
</div>
