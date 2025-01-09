

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.h8gfMisk.js","_app/immutable/chunks/disclose-version.D6lq66xp.js","_app/immutable/chunks/runtime.D3G8I-O9.js"];
export const stylesheets = [];
export const fonts = [];
