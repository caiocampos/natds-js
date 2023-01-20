import { Theme } from '@naturacosmeticos/natds-themes';
declare type ChipStyleProps = {
    color: 'neutral' | 'primary' | 'secondary' | 'custom';
    hasLeftIcon: boolean;
    hasRightIcon: boolean;
    hasLeftAvatar: boolean;
    hasRightAvatar: boolean;
    isDisabled: boolean;
    isSelected: boolean;
    customBackground?: string;
    customBorderColor?: string;
    customLabelColor?: string;
    size: 'semi' | 'semiX' | 'medium';
};
declare const styles: (data?: (ChipStyleProps & {
    theme?: Theme | undefined;
}) | undefined) => import("jss").Classes<"label" | "wrapper">;
export default styles;
