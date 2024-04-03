<script lang="ts">
	import { type ComponentProps, tick } from 'svelte';
	import Sidebar from './Sidebar.svelte';
	import LoadingScreen from './LoadingScreen.svelte';
	import SearchBar from './SearchBar.svelte';
	import ProductGrid from './ProductGrid.svelte';
	import SidebarRow from './SidebarRow.svelte';
	import { sidebarRows, sampleProducts } from './utils/constants';
	import UserCard from './UserCard.svelte';
	import Fab from './Fab.svelte';
	import Modal from './Modal.svelte';
	import ProductAdd from './ProductAdd.svelte';
	import { type SuperValidated, type Infer } from 'sveltekit-superforms';
	import type { ProductFormSchema } from './routes/productAddSchema';

	export let form: SuperValidated<Infer<ProductFormSchema>>;

	let currentRow: ComponentProps<SidebarRow>;
	let loggedInUser: ComponentProps<UserCard> = {
		profileImage: '/profile.jpg',
		name: 'Bonnie Green',
		email: 'bgreene@gmail.com'
	};
	let showProductAdd: boolean = false;
</script>

<div class="bg-gray-100">
	<div class="flex flex-row">
		<div class="basis-1/5">
			<Sidebar bind:currentRow {sidebarRows} />
		</div>
		{#await new Promise((resolve) => setTimeout(() => resolve(tick()), 1500))}
			<div class="basis-4/5 m-1">
				<LoadingScreen />
			</div>
		{:then}
			<div class="flex flex-col basis-4/5 m-1">
				{#if currentRow.title === 'Home'}
					<div class="pt-2 ml-2 mr-2">
						<SearchBar />
					</div>
					<div class="p-2">
						<ProductGrid productCards={sampleProducts} />
					</div>
				{:else if currentRow.title === 'My Listings'}
					<div class="pt-2 ml-2 mr-2">
						<SearchBar />
					</div>
					<div class="p-2">
						<ProductGrid productCards={sampleProducts} />
					</div>
				{:else}
					<div class="m-3 h-full flex items-center justify-center">
						<UserCard {...loggedInUser} />
					</div>
				{/if}
			</div>
		{/await}
	</div>
	<div class="float-right fixed bottom-0 right-0 mb-10 mr-10">
		<Fab onClick={() => (showProductAdd = !showProductAdd)} />
	</div>
</div>

<Modal bind:showModal={showProductAdd}>
	<ProductAdd bind:form bind:showProductAdd />
</Modal>
