import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import { IconButton, Tooltip, useTheme } from '@mui/material'
import { useThemeContext } from 'contexts/ThemeContext'

const HeaderMode = () => {
    const theme = useTheme()
    const ThemeMode = useThemeContext()
    const handleClickChangeMode = () => {
        ThemeMode?.toggleThemeName()
    }
    return (
        <Tooltip arrow title="Mode">
            <IconButton color="primary" onClick={handleClickChangeMode}>
                {theme?.palette.mode === 'dark' ? (
                    <LightModeIcon />
                ) : (
                    <DarkModeIcon />
                )}
            </IconButton>
        </Tooltip>
    )
}

export default HeaderMode
