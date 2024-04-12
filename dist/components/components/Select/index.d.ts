export default Select
declare function Select({
  value,
  options,
  multiple,
  onChange,
  tooltip,
  ...args
}: {
  [x: string]: any
  value: any
  options: any
  multiple?: boolean
  onChange: any
  tooltip: any
}): import('react/jsx-runtime').JSX.Element
declare namespace Select {
  namespace propTypes {
    let options: any
    let multiple: any
    let onChange: any
  }
}
