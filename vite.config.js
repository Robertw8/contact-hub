import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
	base: "/goit-react-hw-08-phonebook/",
	plugins: [react()],
});
