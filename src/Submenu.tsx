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
      <div className={`submenu-center col-2`}>
        {links.map((link: any, index: number) => {
          console.log(typeof link);
          const { label, icon, url } = link
          return (<a key={index} href={url}>{icon}{label}</a>)
        })}
      </div>
    </aside>
  )
}

export default Submenu
