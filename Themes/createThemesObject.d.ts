import { themes as styleThemes } from '@naturacosmeticos/natds-styles';
import { IThemesWeb } from './IThemesWeb';
export declare const createThemesObject: () => IThemesWeb<keyof typeof styleThemes>;
export default createThemesObject;
