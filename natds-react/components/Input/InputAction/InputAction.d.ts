import { InputActionIcon, InputActionImage, InputProps } from '../Input.props';
export declare const isIconAction: (props: InputProps) => props is InputActionIcon;
export declare const isImageAction: (props: InputProps) => props is InputActionImage;
declare const InputAction: (props: InputProps) => JSX.Element;
export default InputAction;
