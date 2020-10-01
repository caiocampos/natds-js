import React, { useState } from "react";
import styled from "styled-components";
import { IThemeWeb } from "../Themes";
import useDefaultTheme from "../hooks/useDefaultTheme";

export interface IDrawerBodyProps {
  children?: React.ReactNode;
  component?: React.ElementType;
}

export const DrawerBody = React.forwardRef<HTMLElement, IDrawerBodyProps>((
  props: IDrawerBodyProps,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: any,
) => {
  const {
    children, component, ...otherProps
  } = props;
  const [
    scrolled, setScrolled,
  ] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const theme: any = useDefaultTheme();
  const SCROLL_POSITION_ZERO = 0;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleScrolled = (event: any) => setScrolled(event.target.scrollTop > SCROLL_POSITION_ZERO);

  return (
    <DrawerBodyComponent
      scrolled={scrolled}
      as={component}
      theme={theme}
      ref={ref}
      {...otherProps}>
      <DrawerBodyScrollComponent
        onScroll={handleScrolled}
        theme={theme}>
        {children}
      </DrawerBodyScrollComponent>
    </DrawerBodyComponent>
  );
});

DrawerBody.displayName = "DrawerBody";

export default DrawerBody;

/**
 * @todo refactor(web): replace string by shadow token
 */
const SCROLLED_BOX_SHADOW = "rgba(0, 0, 0, .14) inset 0 9px 5px -5px";

/**
 * @todo refactor(web): replace string by shadow token
 */
const NOT_SCROLLED_BOX_SHADOW = "none";

const getDrawerBodyComponentBoxShadow = ({ scrolled }: { scrolled: boolean }) => {
  if (scrolled) {
    return SCROLLED_BOX_SHADOW;
  }

  return NOT_SCROLLED_BOX_SHADOW;

};

export const DrawerBodyComponent = styled.div<{ scrolled: boolean, theme: IThemeWeb }>`
  flex: 1 1 auto;
  display: flex;
  position: relative;
  overflow: hidden;

  &:before {
    content: "";
    box-shadow: ${({ scrolled }) => getDrawerBodyComponentBoxShadow({ scrolled })};
    height: 10px;
    pointer-events: none;
    top: 0;
    left: 0;
    right: 0;
    position: absolute;
    transition: box-shadow ease-in-out .1s;
    z-index: 2;
  }
`;

export const DrawerBodyScrollComponent = styled.div<{ theme: IThemeWeb }>`
  flex: 1 1 auto;
  overflow-y: auto;
  padding: ${({ theme }) => `0 ${theme.sizes.tiny}px`};
  position: relative;
`;
