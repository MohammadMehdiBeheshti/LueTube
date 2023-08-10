import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
// import million from "million/compiler";

// https://vitejs.dev/config/
// export default defineConfig({
// 	plugins: [million.vite({ auto: true }), preact()],
// 	server: {
// 		port: 3000,
// 		watch: {
// 			usePolling: true,
// 		},
// 	},
// });

export default defineConfig({
	plugins: [preact()],
	server: {
		port: 3000,
	},
});
