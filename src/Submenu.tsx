import { useEffect, useRef, useState } from 'react'
import { useGlobalContext } from './context/context'

const Submenu = () => {
  const { isSubmenuOpen, location, page: { page, links } } = useGlobalContext()
  const container = useRef<HTMLInputElement>(null)
  const [columns, setColumns] = useState('col-2')
  useEffect(() => {
    setColumns("col-2")
    const submenu = container.current;
    const { center, bottom } = location
    if (submenu) {
      submenu.style.left = `${center}px`
      submenu.style.top = `${bottom}px`
    }
    if (links.length === 3) {
      setColumns("col-3")
    }
    if (links.length > 3) {
      setColumns("col-4")
    }

  }, [location, links])

  return (
    <aside className={`${isSubmenuOpen ? "submenu show " : "submenu"}`} ref={container}>
      <h4>{page}</h4>
      <div className={`submenu-center ${columns}`}>
        {links.map((link: any, index: number) => {
          const { label, icon, url } = link
          return (<a key={index} href={url}>{icon}{label}</a>)
        })}
      </div>
    </aside>
  )
}

export default Submenu
