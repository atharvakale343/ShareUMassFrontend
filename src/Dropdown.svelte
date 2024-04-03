<script lang="ts">
	import CheckboxRow from './CheckboxRow.svelte';

	import type { DropdownProps } from '$lib/types';

	export let title: string;
	export let subtitle: string;
	export let checkboxRows: DropdownProps[];
	export let group: string[];

	let isDropdownVisible = false;
	let isButtonEnabled: boolean;
	$: isButtonEnabled = group.length > 0;

	function toggleDropdown(e: Event) {
		e.preventDefault();
		isDropdownVisible = !isDropdownVisible;
	}
	function clearAll() {
		group = [];
		isButtonEnabled = false;
	}

	const _rotateClasses = ['-rotate-0', '-rotate-90'];
</script>

<div
	class="container flex flex-col shrink items-center justify-center w-full mx-auto bg-gray-300
	rounded-lg shadow dark:bg-gray-800 h-auto
	"
>
	<a
		href="#"
		class="w-full py-3 px-6 transform duration-300 {!isDropdownVisible && !isButtonEnabled
			? 'rounded-lg hover:bg-gray-200'
			: 'rounded-t-lg'} bg-gray-300 cursor-pointer
			"
		on:click={toggleDropdown}
	>
		<div class="flex flex-row items-center space-x-14">
			<div class="flex-1 flex-col bg-inherit">
				<h3 class="text-lg font-medium leading-6 text-gray-900 dark:text-white">
					{title}
				</h3>
				<p class="max-w-2xl mt-1 text-sm text-gray-500 dark:text-gray-200">
					{subtitle}
				</p>
			</div>
			<svg
				class="transition-transform duration-300 transform -rotate-{isDropdownVisible ? 0 : 90}"
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<path d="m6 9 6 6 6-6" />
			</svg>
		</div>
	</a>
	{#if isDropdownVisible}
		<div class="flex flex-col w-full transition-transform">
			<!-- add a clear all button just below -->
			<button
				class="w-full py-1 px-1 rounded-sm cursor-pointer text-sm uppercase text-white
		   {isButtonEnabled
					? 'bg-red-800 font-semibold border-gray-200\
		   pointer-events-auto cursor-pointer hover:bg-red-600 transition-colors duration-200'
					: 'bg-gray-300 font-light border-gray-700\
				pointer-events-none cursor-not-allowed'}"
				on:click={clearAll}
				disabled={!isButtonEnabled}
			>
				<div class="flex flex-row items-center justify-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						fill="currentColor"
						class="bi bi-x"
						viewBox="0 0 16 16"
					>
						<path
							d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"
						/>
					</svg>
					<div>Clear all</div>
				</div>
			</button>
			<ul
				class="flex flex-col divide-y divide w-full h-fit"
				style:visibility={isDropdownVisible ? 'visible' : 'hidden'}
			>
				{#each checkboxRows as row}
					<li class="flex flex-row">
						<CheckboxRow {...row} bind:group></CheckboxRow>
					</li>
				{/each}
			</ul>
		</div>
	{:else if isButtonEnabled}
		<button
			class="w-full py-1 px-1 rounded-sm cursor-pointer text-sm uppercase text-white
		   {isButtonEnabled
				? 'bg-red-800 font-semibold border-gray-200\
		   pointer-events-auto cursor-pointer hover:bg-red-600 transition-colors duration-200 rounded-b-lg'
				: 'bg-gray-300 font-light border-gray-700\
				pointer-events-none cursor-not-allowed'}"
			on:click={clearAll}
			disabled={!isButtonEnabled}
		>
			<div class="flex flex-row items-center justify-center">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="20"
					height="20"
					fill="currentColor"
					class="bi bi-x"
					viewBox="0 0 16 16"
				>
					<path
						d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"
					/>
				</svg>
				<div>Clear all</div>
			</div>
		</button>
	{/if}
</div>
