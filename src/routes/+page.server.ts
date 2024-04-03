import type { Actions } from './$types';
import { fail } from '@sveltejs/kit';
import { superValidate, withFiles } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { formSchema } from './productAddSchema';

export const actions: Actions = {
	default: async (event) => {
		const form = await superValidate(event, zod(formSchema));
		if (!form.valid) {
			return fail(400, {
				form
			});
		}
		console.log(form);
		return withFiles({
			form
		});
	}
};

// export const actions = {
// 	addProduct: async ({ cookies, request }) => {
// 		const data = await request.formData();
// 		const productTitle: string = data.get('productTitle');
// 		const imagePath: string = data.get('imagePath');
// 		const categories: string[] = data.get('categories');
// 		const location: string = data.get('location');
// 		const price: string = data.get('price');
// 		const contact: string = data.get('contact');
// 		const description: string = data.get('description');
// 	}
// };
