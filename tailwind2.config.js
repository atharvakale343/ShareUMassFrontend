module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}', "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",],
	important: true,
	// Active dark mode on class basis
	darkMode: 'class',
	i18n: {
		locales: ['en-US'],
		defaultLocale: 'en-US'
	},
	theme: {
		extend: {
			backgroundImage: (_) => ({
				check: "url('/icons/check.svg')",
				landscape: "url('/images/landscape/2.jpg')"
			}),
			colors: {
				// flowbite-svelte
				primary: { 50: '#FFF5F2', 100: '#FFF1EE', 200: '#FFE4DE', 300: '#FFD5CC', 400: '#FFBCAD', 500: '#FE795D', 600: '#EF562F', 700: '#EB4F27', 800: '#CC4522', 900: '#A5371B' },
			},
			transitionProperty: {
				'height': 'height',
			}
		}
	},
	variants: {
		extend: {
			backgroundColor: ['checked'],
			borderColor: ['checked'],
			inset: ['checked'],
			zIndex: ['hover', 'active']
		}
	},
	plugins: [require('flowbite/plugin'),],
	future: {
		purgeLayersByDefault: true
	}
};
