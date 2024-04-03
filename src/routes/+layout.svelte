<script lang="ts">
	import MainScreen from '../MainScreen.svelte';
	import '../app.css';
	import type { PageData } from './$types';
	import SuperDebug from 'sveltekit-superforms';
	export let data: PageData;

	let form = data.form;
</script>

<MainScreen {form} />

<slot />
