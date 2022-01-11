import { Module } from '@nuxt/types/config/module';
export interface FontOptions {
    family?: string | string[];
    size?: number;
}
declare const setupFont: Module<FontOptions>;
export default setupFont;
