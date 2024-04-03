import type { ComponentProps } from 'svelte';
import type ProductCard from '../ProductCard.svelte';
import type { DropdownProps } from '$lib/types';

export const iconNameToPathD = {
	compass:
		'M1070 1178l306-564h-654l-306 564h654zm722-282q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z',
	home: 'home-basic.svg',
	clipboard: 'clipboard.svg',
	person: 'person.svg'
};

export type SidebarRowData = {
	title: string;
	href: string;
	iconSvgPath: string;
};

export const sidebarRows: SidebarRowData[] = [
	{
		title: 'Home',
		href: '#',
		iconSvgPath: iconNameToPathD['home']
	},
	{
		title: 'My Listings',
		href: '#',
		iconSvgPath: iconNameToPathD['clipboard']
	},
	{
		title: 'My Account',
		href: '#',
		iconSvgPath: iconNameToPathD['person']
	}
];

export const sampleProducts: ComponentProps<ProductCard>[] = [
	{
		title:
			'Vintage Airmail Mini Stationery Set, 100 Piece Set (50 Lined Sheets + 50 Matching Envelopes), 5.5 x 8.25 inch, Design, Double Sided Printing, Double Side...',
		residentialArea: 'Southwest Residential Area',
		price: '25.96',
		imagePath: '/mail.jpg'
	},
	{
		title:
			'STGAubron Gaming Desktop PC Computer,Intel Core I7 3.4 GHz up to 3.9 GHz,Radeon RX 580 8G GDDR5,16G RAM,512G SSD,WiFi,Bluetooth 5.0,RGB Fanx6,RGB...',
		residentialArea: 'Central Residential Area',
		price: '1750.00',
		imagePath: '/pc.jpg'
	},
	{
		title: 'Meta Quest 2 — Advanced All-In-One Virtual Reality Headset — 128 GB',
		residentialArea: 'Sylvan Residential Area',
		price: '249.00',
		imagePath: '/meta.jpg'
	},
	{
		title: 'Apple Vision Pro',
		residentialArea: 'Southwest Residential Area',
		price: '3500.00',
		imagePath: '/vision.jpg'
	},
	{
		title:
			'Propel Powder Packets, 3 Flavor Variety Pack, Electrolytes, Vitamins and No Sugar, Packaging May Vary, 10 Count (Pack of 5)',
		residentialArea: 'Northeast Residential Area',
		price: '12.99',
		imagePath: '/propel.jpg'
	},
	{
		title: 'NCAA Massachusetts Minutemen Unisex NCAA The Game bar Design Hat, White, Adjustable ',
		residentialArea: 'Commonwealth Honors College Residential Area',
		price: '21.99',
		imagePath: '/umass-merch.jpg'
	},
	{
		title:
			'Biopure Antibacterial Hand Wipes | Fresh Morning Breeze- Antibacterial Wipes With Aloe and Vitamin E Formula | 5 X 7 Inch Wet Wipes Cannister | No Parabens, sulfates or Phthalates, Kills 99% of Germs (Fresh Morning Breeze, 50ct, Pack of 1) ',
		residentialArea: 'Sylvan Residential Area',
		price: '14.99',
		imagePath: '/wipes.jpg'
	},
	{
		title:
			'ATERCEL Workout Gloves for Men and Women, Exercise Gloves for Weight Lifting, Cycling, Gym, Training, Breathable and Snug fit',
		residentialArea: 'Orchard Hill Residential Area',
		price: '11.56',
		imagePath: '/gloves.jpg'
	}
];

export const residentialAreas: DropdownProps[] = [
	{
		imagePath: '/southwest.jpg',
		title: 'Southwest Residential',
		checkboxValue: 'Southwest Residential Area'
	},
	{
		imagePath: '/ohill.jpg',
		title: 'Orchard Hill Residential',
		checkboxValue: 'Orchard Hill Residential Area'
	},
	{
		imagePath: '/honors.jpg',
		title: 'Commonwealth Honors College Residential',
		checkboxValue: 'Commonwealth Honors College Residential Area'
	},
	{
		imagePath: '/sylvan.jpg',
		title: 'Sylvan Residential',
		checkboxValue: 'Sylvan Residential Area'
	},
	{
		imagePath: '/northeast.jpg',
		title: 'Northeast Residential',
		checkboxValue: 'Northeast Residential Area'
	},
	{
		imagePath: '/central.jpg',
		title: 'Central Residential',
		checkboxValue: 'Central Residential Area'
	}
];

export const sampleCategories: DropdownProps[] = [
	{
		title: 'Clothing',
		checkboxValue: 'Clothing',
		imagePath: '/categories/clothing.png'
	},
	{
		title: 'Decoration',
		checkboxValue: 'Decoration',
		imagePath: '/categories/decoration.png'
	},
	{
		title: 'Entertainment',
		checkboxValue: 'Entertainment',
		imagePath: '/categories/entertainment.png'
	},
	{
		title: 'Furniture',
		checkboxValue: 'Furniture',
		imagePath: '/categories/furniture.png'
	},
	{
		title: 'Free Stuff',
		checkboxValue: 'Free Stuff',
		imagePath: '/categories/free-stuff.png'
	},
	{
		title: 'School Supplies',
		checkboxValue: 'School Supplies',
		imagePath: '/categories/school-supplies.png'
	},
	{
		title: 'Sports Goods',
		checkboxValue: 'Sports Goods',
		imagePath: '/categories/sports-goods.png'
	},
	{
		title: 'Special Deals',
		checkboxValue: 'Special Deals',
		imagePath: '/categories/special-deals.png'
	},
	{
		title: 'Tech & Electronics',
		checkboxValue: 'Tech & Electronics',
		imagePath: '/categories/tech-and-electronics.png'
	},
	{
		title: 'Textbooks',
		checkboxValue: 'Textbooks',
		imagePath: '/categories/textbooks.png'
	},
	{
		title: 'UMass Merch',
		checkboxValue: 'UMass Merch',
		imagePath: '/categories/umass-merch.png'
	}
];
