import React, { useEffect, useRef } from 'react'
import { useGlobalContext } from './context/context'

const Submenu = () => {
  const { isSubmenuOpen, location, page: { page, links } } = useGlobalContext()
  const container = useRef<HTMLInputElement>(null)
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
      <h4>{page}</h4>
    </aside>
  )
}

export default Submenu
