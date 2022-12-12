import { useEffect, useMemo, useState } from 'react'
const useElementOnScreen = (targetRef) => {
    const options = {
        root: null,
        rootMargin: '',
        threshold: 0.5
    }
    const [isVisibile, setIsVisible] = useState()
    const callbackFunction = entries => {
        const [entry] = entries //const entry = entries[0]
        setIsVisible(entry.isIntersecting)
    }
    useEffect(() => {
        const observer = new IntersectionObserver(callbackFunction, options)
        const currentTarget = targetRef.current
        if (currentTarget) observer.observe(currentTarget)

        return () => {
            if (currentTarget) observer.unobserve(currentTarget)
        }
    }, [targetRef])
    return isVisibile
}
export default useElementOnScreen 