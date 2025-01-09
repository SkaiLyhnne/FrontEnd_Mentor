

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.BUCANIvb.js","_app/immutable/chunks/disclose-version.D6lq66xp.js","_app/immutable/chunks/runtime.D3G8I-O9.js","_app/immutable/chunks/legacy.DcwGGTBk.js"];
export const stylesheets = [];
export const fonts = [];
