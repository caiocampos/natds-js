import { Theme } from '@naturacosmeticos/natds-themes';
import { TabProps } from './Tab.props';
declare type TabContainerProps = Pick<TabProps, 'icon' | 'align' | 'position' | 'elevation' | 'color'>;
declare const styles: (data?: (TabContainerProps & {
    theme?: Theme | undefined;
}) | undefined) => import("jss").Classes<"navigation" | "container" | "wrapper" | "navigationPrev" | "navigationNext">;
export default styles;
