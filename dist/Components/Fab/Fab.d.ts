import * as React from 'react';
import { FabColor, IFabProps } from './Fab.props';
export declare const defaultProps: {
    color: FabColor;
    disabled: boolean;
};
export declare const Fab: React.ForwardRefExoticComponent<IFabProps & React.RefAttributes<HTMLButtonElement>>;
export default Fab;
