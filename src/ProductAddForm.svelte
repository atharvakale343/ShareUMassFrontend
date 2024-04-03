<script lang="ts">
	import { Input } from '$lib/components/ui/input';
	import * as Form from '$lib/components/ui/form';
	import SuperDebug, { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import {
		categories,
		formSchema,
		residentialAreas,
		type ProductFormSchema
	} from './routes/productAddSchema';
	import { Textarea } from '$lib/components/ui/textarea';
	import spinner from '$lib/assets/spinner.svg';
	import * as Select from '$lib/components/ui/select';
	export let data: SuperValidated<Infer<ProductFormSchema>>;
	export let showProductAdd: boolean;

	let formElement: HTMLElement;

	const form = superForm(data, {
		validators: zodClient(formSchema),
		onUpdate(event) {
			if (event.form.posted) {
				console.log('Form posted');
				showProductAdd = false;
			}
		},
		// delayMs: 500,
		timeoutMs: 8000
	});

	const { form: formData, enhance, submitting, delayed, timeout } = form;

	$: selectedLocation = {
		label: residentialAreas[$formData.location],
		value: $formData.location
	};

	$: selectedCategories = $formData.categories.map((c) => ({ label: categories[c], value: c }));
</script>

<form method="POST" action="/" use:enhance class="min-h-fit" enctype="multipart/form-data">
	<Form.Field {form} name="productTitle">
		<Form.Control let:attrs>
			<Form.Label>Product Name</Form.Label>
			<Input {...attrs} bind:value={$formData.productTitle} />
		</Form.Control>
		<Form.Description>Enter the product title.</Form.Description>
		<Form.FieldErrors />
	</Form.Field>
	<Form.Field {form} name="description" class="mt-4">
		<Form.Control let:attrs>
			<div class="grid w-full gap-1.5">
				<Form.Label>Description</Form.Label>
				<Textarea {...attrs} bind:value={$formData.description} />
			</div>
		</Form.Control>
		<Form.Description>Enter a short description of the product.</Form.Description>
		<Form.FieldErrors />
	</Form.Field>
	<Form.Field {form} name="location" class="mt-4">
		<Form.Control let:attrs>
			<Form.Label>Residential Area</Form.Label>
			<div bind:this={formElement} class="relative">
				<Select.Root
					selected={selectedLocation}
					onSelectedChange={(s) => {
						s && ($formData.location = s.value);
					}}
					portal={formElement}
				>
					<Select.Trigger {...attrs}>
						<Select.Value placeholder="Select residential hall" />
					</Select.Trigger>
					<Select.Content side="bottom" avoidCollisions={false}>
						{#each Object.entries(residentialAreas) as [value, label]}
							<Select.Item {value}>{label}</Select.Item>
						{/each}
					</Select.Content>
				</Select.Root>
			</div>
			<input hidden bind:value={$formData.location} name={attrs.name} />
		</Form.Control>
		<Form.Description>Select the residential area.</Form.Description>
		<Form.FieldErrors />
	</Form.Field>
	<Form.Field {form} name="categories" class="mt-4">
		<Form.Control let:attrs>
			<Form.Label>Categories</Form.Label>
			<div bind:this={formElement} class="relative">
				<Select.Root
					multiple
					selected={selectedCategories}
					onSelectedChange={(s) => {
						if (s) {
							$formData.categories = s.map((c) => c.value);
						} else {
							$formData.categories = [];
						}
					}}
					portal={formElement}
				>
					{#each $formData.categories as category}
						<input hidden bind:value={category} name={attrs.name} />
					{/each}
					<Select.Trigger {...attrs}>
						<Select.Value placeholder="Select categories" />
					</Select.Trigger>
					<Select.Content side="bottom" avoidCollisions={false}>
						{#each Object.entries(categories) as [value, label]}
							<Select.Item {value}>{label}</Select.Item>
						{/each}
					</Select.Content>
				</Select.Root>
			</div>
		</Form.Control>
		<Form.Description>Select one or more product categories.</Form.Description>
		<Form.FieldErrors />
	</Form.Field>
	<Form.Field {form} name="price">
		<Form.Control let:attrs>
			<Form.Label>Price (in $)</Form.Label>
			<Input {...attrs} bind:value={$formData.price} />
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>
	<Form.Field {form} name="contact">
		<Form.Control let:attrs>
			<Form.Label>Contact Information</Form.Label>
			<Input {...attrs} bind:value={$formData.contact} />
		</Form.Control>
		<Form.Description
			>An email address or phone number where other students can reach you</Form.Description
		>
		<Form.FieldErrors />
	</Form.Field>
	<Form.Field {form} name="image">
		<Form.Control let:attrs>
			<div class="grid w-full max-w-sm items-center gap-1.5">
				<Form.Label>Picture</Form.Label>
				<input
					{...attrs}
					id="picture"
					type="file"
					on:input={(e) => ($formData.image = e.currentTarget.files?.item(0) ?? null)}
				/>
			</div>
		</Form.Control>
		<Form.Description
			>An email address or phone number where other students can reach you</Form.Description
		>
		<Form.FieldErrors />
	</Form.Field>
	<div class="flex flex-row space-x-2 mt-20">
		<Form.Button formaction="/">Submit</Form.Button>
		{#if $delayed}
			<img src={spinner} alt="spinner" class="w-8" />
		{/if}
	</div>
</form>
