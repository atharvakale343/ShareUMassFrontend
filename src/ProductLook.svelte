<script lang="ts">
	import { onMount, tick } from 'svelte';
	import Shiny from './svgs/Shiny.svelte';
	import Contact from './svgs/Contact.svelte';
	import dedent from 'dedent';

	export let productTitle: string;
	export let imagePath: string;
	export let categories: string[] = ['Electronics', 'Furniture', 'Clothing', 'Books', 'Other'];
	export let location: string;
	export let price: string;
	export let contact: string = 'example@example.com';
	export let description: string = dedent`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lobortis feugiat vivamus at augue eget arcu dictum varius duis. Eleifend donec pretium vulputate sapien nec sagittis. Etiam erat velit scelerisque in dictum non consectetur a erat. Gravida quis blandit turpis cursus in hac habitasse. Feugiat pretium nibh ipsum consequat nisl vel. Duis tristique sollicitudin nibh sit amet commodo nulla facilisi. Elementum pulvinar etiam non quam lacus suspendisse. Habitasse platea dictumst quisque sagittis purus sit amet volutpat. Arcu risus quis varius quam quisque id. Turpis tincidunt id aliquet risus. Tempor commodo ullamcorper a lacus. Sagittis id consectetur purus ut faucibus. In iaculis nunc sed augue lacus. Vel pretium lectus quam id leo in. Ac turpis egestas sed tempus urna et pharetra.`;

	let descriptionElement: HTMLSpanElement;
	let readMoreElement: HTMLAnchorElement;
	let sellerCopyClicked: boolean = false;

	let isReadMore: boolean = true; // is the read more button text "Read more" or "View less"

	onMount(async () => {
		await tick();
		console.log(descriptionElement.scrollHeight, descriptionElement.offsetHeight);
		if (descriptionElement.scrollHeight > descriptionElement.offsetHeight) {
			readMoreElement.style.display = 'initial';
		} else {
			readMoreElement.style.display = 'none';
		}

		readMoreElement.addEventListener('click', () => {
			if (isReadMore) {
				readMoreElement.textContent = 'View less';
				isReadMore = false;
			} else {
				readMoreElement.textContent = 'Read more';
				isReadMore = true;
			}
		});
	});

	function copySeller() {
		navigator.clipboard.writeText(contact);
		sellerCopyClicked = true;
		setTimeout(() => (sellerCopyClicked = false), 1000);
	}
</script>

<div class="flex flex-col">
	<div class="bg-white shadow-md rounded-3xl p-4">
		<div class="flex-none lg:flex items-center justify-center">
			<div class="flex-auto basis-1/2 h-full sm:w-80 lg:mb-0 mr-4 flex items-center justify-center">
				<img
					src={imagePath}
					alt={productTitle}
					class="w-full h-full object-scale-down lg:h-96 lg:w-96 rounded-2xl p-8"
				/>
			</div>
			<div class="flex-auto basis-1/2 flex flex-col justify-center ml-3 py-2">
				<div class="flex flex-wrap">
					<div class="w-full flex-none text-xs text-blue-700 font-medium">U(N)BOXED Store</div>
					<h2 class="flex-auto text-lg font-medium w-20">{productTitle}</h2>
				</div>
				<div class="w-fit mt-1 flex flex-row divide-x-2 flex-wrap">
					{#each categories as category}
						<div class="mt-1 border-transparent">
							<h1 class="bg-teal-300 rounded-md px-2 text-sm font-bold text-gray-900 line-clamp-1">
								{category}
							</h1>
						</div>
					{/each}
				</div>
				<div class="flex mt-2">
					<p class="">
						<span
							class="flex-auto {isReadMore ? 'line-clamp-4' : ''} text-ellipsis text-wrap
							w-full text-sm font-sans font-normal text-gray-900"
							bind:this={descriptionElement}>{description}</span
						>
						<a
							href="#"
							class="text-sm font-sans font-normal text-blue-700"
							bind:this={readMoreElement}>Read more</a
						>
					</p>
				</div>
				<p class="mt-3"></p>
				<div class="flex py-4 text-sm text-gray-500">
					<div class="flex-1 inline-flex items-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5 mr-3 text-gray-400"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
							>
							</path>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
							></path>
						</svg>
						<p class="">{location}</p>
					</div>
					<div class="flex-1 inline-flex items-center">
						<Shiny />
						<p class="">Condition: <br />Lightly Used</p>
					</div>
				</div>
				<div class="flex py-4 text-sm text-gray-500">
					<div class="flex-1 inline-flex items-center w-40">
						<div class="flex flex-row items-center w-full">
							<div class="flex-none">
								<Contact />
							</div>
							<div class="truncate grow-0">
								Seller: <br /><a href="#" on:click={copySeller} class="text-blue-600"
									>{sellerCopyClicked ? 'Copied!' : contact}</a
								>
							</div>
						</div>
					</div>
					<div class="flex-1 inline-flex items-center text-gray-900">
						<span class="font-bold text-xl leading-none pl-1">$</span>
						<span class="font-bold text-3xl ml-1"> {price} </span>
					</div>
				</div>
				<div class="flex p-4 pb-2 border-t border-gray-200"></div>

				<button
					class="mb-2 md:mb-0 bg-gray-900 px-5 py-2 shadow-sm tracking-wider text-white rounded-full hover:bg-gray-800"
					on:click={copySeller}
					type="button"
					aria-label="like"
					>{sellerCopyClicked ? 'Seller Contact Copied!' : 'Contact Seller'}
				</button>
			</div>
		</div>
	</div>
</div>
