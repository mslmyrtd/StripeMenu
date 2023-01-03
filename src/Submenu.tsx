import React, { useEffect, useRef } from 'react'
import { useGlobalContext } from './context/context'

const Submenu = () => {
  const { isSubmenuOpen, location } = useGlobalContext()
  const container = useRef<HTMLInputElement>(null)
  console.log(container.current);
  useEffect(() => {
    const submenu = container.current;
    const { center, bottom } = location
    if (submenu) {
      submenu.style.left = `${center}px`
      submenu.style.top = `${bottom}px`

    }
    // console.log(submenu.style.left);
  }, [location])

  return (
    <aside className={`${isSubmenuOpen ? "submenu show " : "submenu"}`} ref={container}>
      submenu
    </aside>
  )
}

export default Submenu
