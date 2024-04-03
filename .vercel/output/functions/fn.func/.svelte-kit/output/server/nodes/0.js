import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.Bmr9NvOp.js","_app/immutable/chunks/scheduler.B8VM0AVf.js","_app/immutable/chunks/index.-yzd7wty.js","_app/immutable/chunks/entry.Bq9X9xzN.js","_app/immutable/chunks/stores._DzPins2.js"];
export const stylesheets = ["_app/immutable/assets/0.CPMCGjKe.css"];
export const fonts = [];
