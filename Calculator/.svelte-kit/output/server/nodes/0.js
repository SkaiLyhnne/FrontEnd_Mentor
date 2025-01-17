

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.B-s-8hHj.js","_app/immutable/chunks/disclose-version.CCy301RS.js","_app/immutable/chunks/runtime.Bu0T94yf.js"];
export const stylesheets = [];
export const fonts = [];
