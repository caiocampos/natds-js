/// <reference types="react" />
import { AvatarLabelProps, AvatarProps } from './Avatar.props';
export declare const isAvatarLabel: (props: AvatarProps) => props is AvatarLabelProps;
export declare const AvatarLabel: ({ className, size, ...props }: AvatarProps) => JSX.Element;
export default AvatarLabel;
