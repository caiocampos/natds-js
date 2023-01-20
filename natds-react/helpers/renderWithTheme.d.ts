declare const renderWithTheme: (component: JSX.Element) => {
    styles: string;
    component: import("@testing-library/react").RenderResult<typeof import("@testing-library/dom/types/queries"), HTMLElement, HTMLElement>;
};
export default renderWithTheme;
