export function useVisibleTransition({
  open,
  transition,
  containerRef,
  onClose,
  defaultVisible,
}: {
  open?: boolean
  transition?: string
  containerRef: any
  onClose: any
  defaultVisible?: boolean
}): {
  visible: boolean
  setVisible: import('react').Dispatch<import('react').SetStateAction<boolean>>
  className: string
}
export function useMediaQuery(query: any): boolean
export function useIsMobile(): boolean
export function useMsg(scope?: string, descriptorOnly?: boolean): (maybeId: any, ...rest: any[]) => string | any[]
