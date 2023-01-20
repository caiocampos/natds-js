import { Theme } from '@naturacosmeticos/natds-themes';
import { TagProps } from './Tag.props';
declare type TagStyleProps = Pick<TagProps, 'size' | 'color' | 'position' | 'customBackgroundColor' | 'customLabelColor'>;
declare const styles: (data?: (TagStyleProps & {
    theme?: Theme | undefined;
}) | undefined) => import("jss").Classes<"content" | "container" | "wrapper">;
export default styles;
