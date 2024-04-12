export default Button
declare function Button({
  className,
  type,
  size,
  ellipse,
  icon,
  arrow,
  block,
  tagName,
  loading,
  disabled,
  children,
  ...args
}: {
  [x: string]: any
  className: any
  type: any
  size: any
  ellipse: any
  icon: any
  arrow: any
  block: any
  tagName?: string
  loading: any
  disabled: any
  children: any
}): import('react/jsx-runtime').JSX.Element
declare namespace Button {
  namespace propTypes {
    let type: any
    let size: any
    let icon: any
    let arrow: any
    let ellipse: any
    let tagName: any
    let href: any
    let onClick: any
    let children: any
  }
}
