import { useEffect } from 'react'
import { ThemeNameType } from 'models/theme'

const useThemeLocalStorage = (): void => {
    useEffect(() => {
        const appTheme = localStorage.getItem(
            'appTheme'
        ) as ThemeNameType | null

        if (!appTheme || !['LightTheme', 'DarkTheme'].includes(appTheme)) {
            localStorage.setItem('appTheme', 'LightTheme' as ThemeNameType)
        }
    }, [])
}

export default useThemeLocalStorage
