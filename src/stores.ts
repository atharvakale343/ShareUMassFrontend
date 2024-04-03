import { writable, type Writable } from 'svelte/store';

export const residentialFilter: Writable<string[]> = writable([]);
export const categoryFilter: Writable<string[]> = writable([]);
