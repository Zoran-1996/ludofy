import { useEffect } from "react"

const FOCUSABLE_SELECTORS = [
    'a[href]:not([tabindex="-1"])',
    'button:not([disabled]):not([tabindex="-1"])',
    'input:not([disabled]):not([type="hidden"]):not([tabindex="-1"])',
    'select:not([disabled]):not([tabindex="-1"])',
    'textarea:not([disabled]):not([tabindex="-1"])',
    '[tabindex]:not([tabindex="-1"])',
    '[contenteditable="true"]',
].join(",")

export function useFocusTrap(
    containerRef: React.RefObject<HTMLElement | null>,
    isActive: boolean,
    initialFocusRef?: React.RefObject<HTMLElement | null>,
    onClose?: () => void
) {
    useEffect(() => {
        if (!isActive) return

        const container = containerRef.current
        if (!container) return

        const focusableElements = Array.from(
            container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTORS)
        ).filter((el) => !el.hasAttribute("disabled") && el.offsetParent !== null)

        if (focusableElements.length === 0) return

        const first = initialFocusRef?.current && focusableElements.includes(initialFocusRef.current)
            ? initialFocusRef.current
            : focusableElements[0]
        const last = focusableElements[focusableElements.length - 1]

        first.focus()

        function handleKeyDown(e: KeyboardEvent) {
            if (e.key === "Escape") {
                e.preventDefault()
                onClose?.()
                return
            }

            if (e.key === "Tab") {
                if (e.shiftKey) {
                    if (document.activeElement === first) {
                        e.preventDefault()
                        last.focus()
                    }
                } else {
                    if (document.activeElement === last) {
                        e.preventDefault()
                        first.focus()
                    }
                }
            }
        }

        document.addEventListener("keydown", handleKeyDown)

        return () => {
            document.removeEventListener("keydown", handleKeyDown)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isActive, onClose])
}
