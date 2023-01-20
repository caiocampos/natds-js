import { ReactPortal } from 'react';
export interface PortalProps {
    children: React.ReactNode;
    container?: Element | (() => Element | null) | null;
}
export declare const Portal: ({ children, container }: PortalProps) => ReactPortal | null;
export default Portal;
