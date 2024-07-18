import React, { createContext, useContext } from 'react'

export interface ThemeContextInterface {
    toggleThemeName: () => void
}

const ThemeContext = createContext<ThemeContextInterface>(
    {} as ThemeContextInterface
)

const useThemeContext = () => {
    return useContext(ThemeContext)
}

interface ThemeUiContextInterface {
    themeUIEvents: ThemeContextInterface
    children: React.ReactNode
}

const ThemeContextProvider: React.FC<ThemeUiContextInterface> = ({
    themeUIEvents,
    children,
}) => {
    const value: ThemeContextInterface = {
        toggleThemeName: themeUIEvents.toggleThemeName,
    }

    return (
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    )
}

export { ThemeContextProvider, useThemeContext }
