import React, { useState } from 'react'
import { ThemeProvider } from '@mui/material'
import {
    ThemeContextInterface,
    ThemeContextProvider,
} from 'contexts/ThemeContext'
import { ThemeNameType } from 'models/theme'
import { themeCreator } from './base'

const ThemeProviderWrapper: React.FC<any> = (props) => {
    const [themeName, setThemeName] = useState<ThemeNameType>(
        (localStorage.getItem('appTheme') as ThemeNameType) ?? 'LightTheme'
    )
    const theme = themeCreator(themeName)
    const ThemeUIEvents: ThemeContextInterface = {
        toggleThemeName: () => {
            const currentThemeName: ThemeNameType =
                (localStorage.getItem('appTheme') as ThemeNameType) ||
                'LightTheme'
            const newThemeName: ThemeNameType =
                currentThemeName === 'LightTheme' ? 'DarkTheme' : 'LightTheme'
            setThemeName(newThemeName)
            localStorage.setItem('appTheme', newThemeName)
        },
    }

    return (
        <ThemeContextProvider themeUIEvents={ThemeUIEvents}>
            <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
        </ThemeContextProvider>
    )
}

export default ThemeProviderWrapper
