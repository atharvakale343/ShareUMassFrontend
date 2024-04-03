<script lang="ts">
	export let imagePath: string | undefined = undefined;
	export let title: string;
	export let checkboxValue: string;
	export let group: string[];
	let checked: boolean;

	$: updateChekbox(group);
	$: updateGroup(checked);

	function updateChekbox(group: string[]) {
		checked = group.indexOf(checkboxValue) >= 0;
	}

	function updateGroup(checked: boolean) {
		const index = group.indexOf(checkboxValue);
		if (checked) {
			if (index < 0) {
				group.push(checkboxValue);
				group = group;
			}
		} else {
			if (index >= 0) {
				group.splice(index, 1);
				group = group;
			}
		}
	}
</script>

<label class="flex items-center flex-1 p-4 bg-white cursor-pointer select-none hover:bg-gray-100">
	{#if imagePath}
		<div class="flex flex-col items-center justify-center w-10 h-10 mr-4">
			<a href="#" class="relative block">
				<img alt="profil" src={imagePath} class="mx-auto object-cover rounded-full h-10 w-10" />
			</a>
		</div>
	{/if}
	<div class="flex-1 pl-1 mr-2">
		<div class="font-medium dark:text-white line-clamp-2 text-ellipsis w-full">
			{title}
		</div>
	</div>
		<input
			type="checkbox"
			class="mr-3 rounded-md text-red-800 w-6 h-6 cursor-pointer appearance-none transition-all before:hidden before:absolute before:top-2/4
		before:left-2/4 before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full"
			bind:checked
			value={checkboxValue}
		/>
</label>
