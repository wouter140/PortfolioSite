import {useLayoutEffect, useState} from "react";


const isBrowser = typeof window !== `undefined`;

function getScrollPosition({ element }) {
    if (!isBrowser) return { x: 0, y: 0 }

    const target = element && 'current' in element ? element.current : element;
    const position = target?.getBoundingClientRect()

    return target
        ? { x: position.left, y: position.top }
        : { x: window.pageXOffset || window.scrollX || 0, y: window.pageYOffset || window.scrollY || 0 }
}

export function useScrollPosition(element) {
    const [position, setPosition] = useState({x: 0, y: 0});

    useLayoutEffect(() => {
        const handleScroll = () => {
            setPosition(getScrollPosition({ element }));
        }

        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [element])

    return position;
}