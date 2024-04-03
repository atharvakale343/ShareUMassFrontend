import type { LayoutServerLoad } from './$types';
import { superValidate } from 'sveltekit-superforms';
import { formSchema } from './productAddSchema';
import { zod } from 'sveltekit-superforms/adapters';

export const load: LayoutServerLoad = (async () => {
	return {
		form: await superValidate(zod(formSchema))
	};
}) satisfies LayoutServerLoad;
