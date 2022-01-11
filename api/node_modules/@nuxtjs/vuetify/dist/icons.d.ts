import { Module } from '@nuxt/types/config/module';
declare const presetsCDN: {
    mdi: string;
    md: string;
    fa: string;
    fa4: string;
};
export declare type IconPreset = keyof typeof presetsCDN;
declare const setupIcons: Module<IconPreset>;
export default setupIcons;
