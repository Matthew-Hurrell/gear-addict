import { useEffect, useRef, useState } from 'react'

const useClickOutsideToggle = () => {

    const [isActive, setIsActive] = useState(false);

    const ref = useRef(null);

    const handleClick = (event) => {
      setIsActive(current => !current);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                setIsActive(false);
            }
        }

        document.addEventListener('mouseup', handleClickOutside);
        return () => {
            document.removeEventListener('mouseup', handleClickOutside);
        }
    }, [ref]);

    return { isActive, setIsActive, ref, handleClick };
}

export default useClickOutsideToggle