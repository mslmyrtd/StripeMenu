import React, { createContext, MouseEvent, useContext, useState } from 'react'

interface InputProviderProps {
    children: React.ReactNode
}
interface AppContextInterface {
    isSidebarOpen: boolean
    isSubmenuOpen: boolean
    openSidebar: (event: MouseEvent<HTMLButtonElement>) => void
    closeSidebar: (event: MouseEvent<HTMLButtonElement>) => void
    openSubmenu: (event: MouseEvent<HTMLButtonElement>) => void
    closeSubmenu: (event: MouseEvent<HTMLButtonElement>) => void
    setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>
    setIsSubmenuOpen: React.Dispatch<React.SetStateAction<boolean>>

}
const initialContext = {
    isSidebarOpen: true,
    isSubmenuOpen: true,
    openSidebar: () => null,
    closeSidebar: () => null,
    openSubmenu: () => null,
    closeSubmenu: () => null,
    setIsSidebarOpen: () => null,
    setIsSubmenuOpen: () => null,
}
const AppContext = createContext<AppContextInterface>(initialContext)

export const AppProvider = ({ children }: InputProviderProps) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false)
    const [isSubmenuOpen, setIsSubmenuOpen] = useState<boolean>(true)
    const openSidebar = (): void => {
        setIsSidebarOpen(true)
    }
    const closeSidebar = (): void => {
        setIsSidebarOpen(false)
    }
    const openSubmenu = (): void => {
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
                setIsSidebarOpen
            }}
        >
            {children}
        </AppContext.Provider>
    )
}
export const useGlobalContext = () => {
    return useContext(AppContext)
}
