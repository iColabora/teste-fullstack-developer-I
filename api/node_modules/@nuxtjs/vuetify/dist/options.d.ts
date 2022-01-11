import { SFCDescriptor } from 'vue-template-compiler';
import { UserVuetifyPreset } from 'vuetify/types/services/presets';
import { NuxtOptions } from '@nuxt/types/config';
import { FontOptions } from './font';
import { IconPreset } from './icons';
export interface VuetifyLoaderOptions {
    match?(originalTag: string, context: {
        kebabTag: string;
        camelTag: string;
        path: string;
        component: SFCDescriptor;
    }): [string, string] | undefined;
}
export interface TreeShakeOptions {
    components?: string[];
    directives?: string[];
    loaderOptions?: VuetifyLoaderOptions;
    transitions?: string[];
}
export interface Options extends Omit<UserVuetifyPreset, 'preset'> {
    customVariables?: string[];
    defaultAssets?: {
        font?: FontOptions;
        icons?: IconPreset | false;
    } | false;
    optionsPath?: string;
    preset?: string;
    treeShake?: boolean | TreeShakeOptions;
}
export declare const defaults: {
    customVariables: never[];
    defaultAssets: {
        font: {
            family: string;
        };
        icons: "mdi" | "md" | "fa" | "fa4";
    };
    optionsPath: undefined;
    treeShake: boolean;
};
export default function initOptions(this: {
    options: NuxtOptions;
}, moduleOptions?: Options): Required<Options>;
