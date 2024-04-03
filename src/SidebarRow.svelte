<script lang="ts">
	import type { SidebarRowProps } from './lib/types';
	export let iconSvgPath: string;
	export let title: string;
	export let href: string;
	export let currentRow: SidebarRowProps;

	function sidebarClick() {
		currentRow = { title, href, iconSvgPath };
	}
</script>

<a
	class="sidebar {currentRow.title === title ? 'sidebar-active' : 'sidebar-inactive'}"
	{href}
	on:click={sidebarClick}
>
	<span class="text-left">
		<img src={iconSvgPath} alt={title} class="w-8 h-8" />
	</span>
	<span class="mx-4 text-md font-normal"> {title} </span>
</a>

<style lang="postcss">
	.sidebar {
		@apply flex items-center justify-start w-full p-4 my-2 font-thin
    uppercase transition-colors duration-200;
	}
	.sidebar-active {
		@apply text-red-900 border-r-4 border-red-900
    bg-gradient-to-r from-white to-red-100
    dark:from-gray-700 dark:to-gray-800;
	}
	.sidebar-inactive {
		@apply text-gray-500 
     dark:text-gray-200 hover:text-red-900;
	}
</style>
