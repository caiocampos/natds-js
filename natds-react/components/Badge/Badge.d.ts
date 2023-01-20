import React from 'react';
import { BadgeProps, BadgeStandardProps } from './Badge.props';
export declare const buildValue: ({ value, limit }: BadgeStandardProps) => string | number;
export declare const isBadgeStandard: (props: BadgeProps) => props is BadgeStandardProps;
declare const Badge: React.ForwardRefExoticComponent<BadgeProps & React.RefAttributes<HTMLDivElement>>;
export default Badge;
