import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import GlobalsPolyfills from '@esbuild-plugins/node-globals-polyfill';
import rollupNodePolyFill from 'rollup-plugin-node-polyfills';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [tsconfigPaths(), react()],
	optimizeDeps: {
		esbuildOptions: {
			// Node.js global to browser globalThis
			define: {
				global: 'globalThis',
			},
			// Enable esbuild polyfill plugins
			plugins: [
				GlobalsPolyfills({
					buffer: true,
				}),
			],
		},
	},
	build: {
		rollupOptions: {
			plugins: [
				// Enable rollup polyfills plugin
				// used during production bundling
				(rollupNodePolyFill as any)(),
			],
		},
	},
	server: {
		host: '0.0.0.0',
	},
});
