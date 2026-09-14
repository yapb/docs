// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://yapb.github.io',
	base: '/docs',
	redirects: {
		'/': '/docs/en/',
	},
	integrations: [
		starlight({
			title: {
				en: 'YaPB 4.8',
				ru: 'YaPB 4.8',
			},
			description: 'YaPB — AI opponent for Counter-Strike',
			defaultLocale: 'en',
			locales: {
				en: {
					label: 'English',
				},
				ru: {
					label: 'Русский',
					lang: 'ru',
				},
			},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/yapb/docs' }],
			sidebar: [
				{
					label: 'Getting Started',
					translations: {
						ru: 'Начало работы',
					},
					items: [
						{ slug: 'getting-started' },
						{ slug: 'getting-started/introduction' },
						{ slug: 'getting-started/installation' },
						{ slug: 'getting-started/building' },
					],
				},
				{
					label: 'Configuration',
					translations: {
						ru: 'Настройка',
					},
					items: [
						{ slug: 'configuring' },
						{ slug: 'configuring/cvars' },
						{ slug: 'configuring/map-config' },
						{ slug: 'configuring/custom-config' },
						{ slug: 'configuring/difficulty' },
						{ slug: 'configuring/weapons' },
						{ slug: 'configuring/localization' },
						{ slug: 'configuring/customization' },
						{ slug: 'configuring/botusage' },
					],
				},
				{
					label: 'Waypointing',
					translations: {
						ru: 'Вэйпоинты',
					},
					items: [
						{ slug: 'waypointing' },
						{ slug: 'waypointing/adding-nodes' },
						{ slug: 'waypointing/node-types' },
						{ slug: 'waypointing/connections-and-flags' },
						{ slug: 'waypointing/debugging' },
					],
				},
				{ slug: 'credits' },
			],
		}),
	],
});
