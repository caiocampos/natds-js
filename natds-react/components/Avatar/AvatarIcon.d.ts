/// <reference types="react" />
import { AvatarIconProps, AvatarProps, AvatarSizes } from './Avatar.props';
export declare const isAvatarIcon: (props: AvatarProps) => props is AvatarIconProps;
export declare const convertIconSize: (size: AvatarSizes) => string;
export declare const AvatarIcon: ({ size, className, ...props }: AvatarProps) => JSX.Element;
export default AvatarIcon;
