import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
	plugins: [react()],
	build: {
		outDir: "../dist/client",
		assetsDir: ".",
		rollupOptions: {
			input: {
				main: "./index.html",
			},
		},
	},
});
