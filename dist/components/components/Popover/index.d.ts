export default Popover;
declare function Popover({ content, children, placement, transition, trigger, onChange, defaultOpen, ...args }: {
    [x: string]: any;
    content: any;
    children: any;
    placement?: string;
    transition?: string;
    trigger?: string;
    onChange: any;
    defaultOpen?: boolean;
}): import("react/jsx-runtime").JSX.Element;
declare namespace Popover {
    namespace propTypes {
        let children: any;
    }
}
