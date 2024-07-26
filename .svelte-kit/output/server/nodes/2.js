

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.D_uVQoyx.js","_app/immutable/chunks/scheduler.u2sAWruA.js","_app/immutable/chunks/index.Cjm2oGyn.js"];
export const stylesheets = ["_app/immutable/assets/2.BvOITDsZ.css"];
export const fonts = [];
