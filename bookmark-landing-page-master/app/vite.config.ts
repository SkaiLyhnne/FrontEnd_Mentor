import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()]/*,
	optimizeDeps: {
		exclude: ['chunk-WGDAOCU5.js']
	}*/
});