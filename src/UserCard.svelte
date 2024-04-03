<script lang="ts">
	export let profileImage: string;
	export let name: string;
	export let email: string;
</script>

<div
	class="w-full max-w-xl bg-white border border-gray-200 rounded-lg shadow
    dark:bg-gray-800 dark:border-gray-700"
>
	<div class="mt-14 flex flex-col items-center pb-32 pt-20">
		<img class="w-48 h-48 mb-4 rounded-full shadow-lg" src={profileImage} alt="profile pic" />
		<h5 class="mb-2 text-3xl font-medium text-gray-900 dark:text-white">{name}</h5>
		<span class="text-md text-gray-500 dark:text-gray-400">{email}</span>
		<div class="flex mt-8 md:mt-6">
			<a
				href="#"
				class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-red-700
                rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-red-600
                dark:hover:bg-red-700 dark:focus:ring-red-800">Logout</a
			>
		</div>
	</div>
</div>
