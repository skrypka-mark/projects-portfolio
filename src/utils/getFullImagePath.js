export const getFullImagePath = path => new URL(`/src/assets/${path}`, import.meta.url).href;
