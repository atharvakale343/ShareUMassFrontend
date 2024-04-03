<script lang="ts">
	import { residentialAreas, sampleCategories, type SidebarRowData } from './utils/constants';
	import SidebarRow from './SidebarRow.svelte';
	import Dropdown from './Dropdown.svelte';
	import { residentialFilter } from './stores';
	import { categoryFilter } from './stores';
	export let currentRow: SidebarRowData;
	export let sidebarRows: SidebarRowData[];

	currentRow = sidebarRows[0];
</script>

<div class="relative rounded-md min-h-screen h-fit my-4 ml-4 shadow-2xl lg:block w-80">
	<div class="h-full min-h-screen bg-white rounded-md dark:bg-gray-700 pb-4">
		<div class="flex items-center justify-center pt-6">
			<img src="/UMASS-UNBOXED-SHORT.png" alt="ShareUMass Logo" />
		</div>
		<nav class="mt-6">
			<div>
				{#each sidebarRows as row (row.title)}
					<SidebarRow {...row} bind:currentRow />
				{/each}
			</div>
		</nav>
		<div class="px-4 mt-4">
			<Dropdown
				title="Residential Area"
				subtitle="Filter by residential area"
				checkboxRows={residentialAreas}
				bind:group={$residentialFilter}
			/>
		</div>
		<div class="px-4 mt-4">
			<Dropdown
				title="Categories"
				subtitle="Filter by category"
				checkboxRows={sampleCategories}
				bind:group={$categoryFilter}
			/>
		</div>
	</div>
</div>
