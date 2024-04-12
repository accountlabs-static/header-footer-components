declare function Link({
  arrow,
  exit,
  to,
  children,
  blank,
  href,
  onClick,
  ...args
}: {
  [x: string]: any
  arrow?: boolean
  exit: any
  to?: string
  children: any
  blank: any
  href: any
  onClick: any
}): import('react/jsx-runtime').JSX.Element
declare namespace Link {
  namespace propTypes {
    let arrow: any
    let exit: any
    let color: any
    let hoverColor: any
    let underline: any
    let href: any
    let to: any
    let blank: any
  }
}
export default Link
