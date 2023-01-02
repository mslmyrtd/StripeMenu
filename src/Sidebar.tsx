import { useGlobalContext } from './context'
import sublinks from './data'
import { FaTimes } from 'react-icons/fa'

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext()
  return (
    <aside
      className={`${isSidebarOpen ? 'sidebar-wrapper show' : 'sidebar-wrapper'
        }`}
    >
      <div className='sidebar'>
        <button className='close-btn' onClick={closeSidebar}>
          <FaTimes />
        </button>
        <div className='sidebar-links'>
          {sublinks.map((item: any, index: number): any => {
            const { links, page } = item
            return (
              <article key={index}>
                <h4>{page}</h4>
                <div className='sidebar-sublinks'>
                  {links.map((link: any, index: number) => {
                    const { url, icon, label } = link
                    return (
                      <a href={url} key={index}>
                        {icon}
                        {label}
                      </a>
                    )
                  })}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
