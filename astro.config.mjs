// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mdx from '@astrojs/mdx';

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
			description: 'YaPB - AI opponent for Counter-Strike',
			customCss: ['./src/styles/custom.css'],
			editLink: {
				baseUrl: 'https://github.com/yapb/docs/edit/master/',
			},
			lastUpdated: true,
			logo: {
				src: './src/assets/logo.svg',
				alt: 'YaPB',
			},
			head: [
				{
					tag: 'meta',
					attrs: {
						name: 'theme-color',
						content: '#f59e0b',
					},
				},
				{
					tag: 'meta',
					attrs: {
						property: 'og:type',
						content: 'website',
					},
				},
				{
					tag: 'meta',
					attrs: {
						property: 'og:site_name',
						content: 'YaPB Docs',
					},
				},
				{
					// Links into headings hidden inside inactive Tabs (e.g. `#without-metamod-1`)
					// can’t be scrolled to by the browser, so activate the right tab first.
					tag: 'script',
					content: `(function(){function r(){var h=location.hash.slice(1);if(!h)return;var t;try{t=document.getElementById(decodeURIComponent(h))}catch(e){return}if(!t||t.getAttribute('role')==='tabpanel')return;var p=t.closest('[role="tabpanel"]');if(p&&p.hidden){var w=p.parentElement;while(w&&w.tagName!=='STARLIGHT-TABS')w=w.parentElement;var a=w&&w.querySelector('[role="tab"][href="#'+p.id+'"]');if(a)a.click()}requestAnimationFrame(function(){var n;try{n=document.getElementById(decodeURIComponent(h))}catch(e){return}if(n)n.scrollIntoView()})}window.addEventListener('hashchange',r);window.addEventListener('load',r);r()})();`,
				},
			],
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
			social: [
				{ icon: 'github', label: 'YaPB on GitHub', href: 'https://github.com/yapb/yapb' },
			],
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
		mdx(),
	],
});
