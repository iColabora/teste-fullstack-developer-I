import { Module } from '@nuxt/types/config/module';
import { Options as SassOptions } from 'sass-loader';
import { Options } from './options';
export declare type SassOptionsV10 = SassOptions & {
    additionalData?: string;
    indentedSyntax?: boolean;
};
declare const setupSass: Module<Options['customVariables']>;
export default setupSass;
