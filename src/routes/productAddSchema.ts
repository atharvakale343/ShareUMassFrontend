import { z } from 'zod';
import { sampleCategories } from '../utils/constants';

import validator from 'validator';

export const categories = {
	Clothing: 'Clothing',
	Decoration: 'Decoration',
	Entertainment: 'Entertainment',
	Furniture: 'Furniture',
	'Free Stuff': 'Free Stuff',
	'School Supplies': 'School Supplies',
	'Sports Goods': 'Sports Goods',
	'Special Deals': 'Special Deals',
	'Tech & Electronics': 'Tech & Electronics',
	Textbooks: 'Textbooks',
	'UMass Merch': 'UMass Merch'
} as const;

export const residentialAreas = {
	'Southwest Residential': 'Southwest Residential Area',
	'Orchard Hill Residential': 'Orchard Hill Residential Area',
	'Commonwealth Honors College Residential': 'Commonwealth Honors College Residential Area',
	'Sylvan Residential': 'Sylvan Residential Area',
	'Northeast Residential': 'Northeast Residential Area',
	'Central Residential': 'Central Residential Area'
} as const;

type ResidentialAreas = keyof typeof residentialAreas;
type Categories = keyof typeof categories;

export const formSchema = z.object({
	productTitle: z.string().min(5).max(100),
	image: z
		.instanceof(File, { message: 'Please upload a file.' })
		.refine((f) => f.size < 10_000_000, 'Max 10 MB upload size.')
		.nullable(),
	categories: z
		.array(z.enum(Object.keys(categories) as [Categories, ...Categories[]]))
		.min(1, 'Please select at least one category.'),
	location: z.enum(Object.keys(residentialAreas) as [ResidentialAreas, ...ResidentialAreas[]]),
	price: z.coerce
		.number()
		.min(1.0, 'Price must be at least $1.00')
		.max(1000000, 'Price must be less than $1,000,000'),
	contact: z
		.string()
		.email('Invalid email or phone number')
		.or(z.string().min(10).refine(validator.isMobilePhone)),
	description: z.string().min(5).max(1000)
});

export type ProductFormSchema = typeof formSchema;
