/// <reference types="react" />
import { AvatarImageProps, AvatarProps } from './Avatar.props';
export declare const isAvatarImage: (props: AvatarProps) => props is AvatarImageProps;
export declare const AvatarImage: ({ size, className, ...props }: AvatarProps) => JSX.Element;
export default AvatarImage;
