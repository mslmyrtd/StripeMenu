import React, { createContext, MouseEvent, useContext, useState } from 'react'
import sublinks from '../data/data'

interface InputProviderProps {
    children: React.ReactNode
}
interface AppContextInterface {
    isSidebarOpen: boolean
    isSubmenuOpen: boolean
    openSidebar: (event: MouseEvent<HTMLButtonElement>) => void
    closeSidebar: (event: MouseEvent<HTMLButtonElement>) => void
    openSubmenu: Function
    closeSubmenu: () => void
    setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>
    setIsSubmenuOpen: React.Dispatch<React.SetStateAction<boolean>>
    location: any
    page: any

}
const initialContext = {
    isSidebarOpen: false,
    isSubmenuOpen: false,
    openSidebar: () => null,
    closeSidebar: () => null,
    openSubmenu: () => null,
    closeSubmenu: () => null,
    setIsSidebarOpen: () => null,
    setIsSubmenuOpen: () => null,
    location: {},
    page: {
        page: "",
        links: []
    }
}
const AppContext = createContext<AppContextInterface>(initialContext)

export const AppProvider = ({ children }: InputProviderProps) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false)
    const [isSubmenuOpen, setIsSubmenuOpen] = useState<boolean>(false)
    const [location, setLocation] = useState<object>({})
    const [page, setPage] = useState<any>({ page: "", links: [] })
    const openSidebar = (): void => {
        setIsSidebarOpen(true)
    }
    const closeSidebar = (): void => {
        setIsSidebarOpen(false)
    }
    const openSubmenu = (text: string, coordinates: object): void => {
        const page = sublinks.find((link) => link.page === text)
        setPage(page)
        setLocation(coordinates)
        setIsSubmenuOpen(true)
    }
    const closeSubmenu = (): void => {
        setIsSubmenuOpen(false)
    }

    return (
        <AppContext.Provider
            value={{
                isSubmenuOpen,
                isSidebarOpen,
                openSidebar,
                closeSidebar,
                openSubmenu,
                closeSubmenu,
                setIsSubmenuOpen,
                setIsSidebarOpen,
                location,
                page
            }}
        >
            {children}
        </AppContext.Provider>
    )
}
export const useGlobalContext = () => {
    return useContext(AppContext)
}
