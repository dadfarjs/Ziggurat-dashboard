import { useTheme } from '@mui/material'

const useDirectionCheck = (dir: 'rtl' | 'ltr') => {
    const theme = useTheme()
    if (dir === 'ltr') {
        return theme.direction === 'ltr'
    } else return theme.direction === 'rtl' || theme.direction !== 'ltr'
}

export default useDirectionCheck
