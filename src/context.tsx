import { createContext, useContext, useState } from "react";
import sublinks from "./data";

interface InputProviderProps {
    children: React.ReactNode
}
interface AppContextInterface {
    isSidebarOpen: boolean
    isSubmenuOpen: boolean
    openSidebar: Function
    closeSidebar: Function
    openSubmenu: Function
    closeSubmenu: Function
}


const AppContext = createContext<AppContextInterface | null>(null)

export const AppProvider = ({ children }: InputProviderProps) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true)
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

    return <AppContext.Provider value={{ isSubmenuOpen, isSidebarOpen, openSidebar, closeSidebar, openSubmenu, closeSubmenu }}>{children}</AppContext.Provider>
}
export const useGlobalContext = () => {
    return useContext(AppContext)
}
