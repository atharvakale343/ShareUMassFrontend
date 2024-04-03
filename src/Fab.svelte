<script lang="ts">
	import Plus from './svgs/Plus.svelte';

	export let onClick: () => void;
</script>

<button
	class="text-white px-2 w-auto h-16 bg-red-700 rounded-full hover:bg-red-600 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none"
	on:click={onClick}
>
	<Plus />
</button>
