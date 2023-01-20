import { ToolbarVariant } from './Toolbar.props';
declare type ToolbarVariantArgs = {
    variant?: ToolbarVariant;
};
export declare type ToolbarMaterialVariant = 'regular' | 'dense';
export declare const getVariantForMaterial: ({ variant }: ToolbarVariantArgs) => ToolbarMaterialVariant;
export {};
