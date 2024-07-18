import { Box } from '@mui/material'
import HeaderSearch from './Search'
import HeaderNotifications from './Notifications'
import HeaderMode from './Mode'

function HeaderButtons() {
    return (
        <Box sx={{ mr: 1 }}>
            <HeaderMode />
            <HeaderSearch />
            <Box sx={{ mx: 0.5 }} component="span">
                <HeaderNotifications />
            </Box>
        </Box>
    )
}

export default HeaderButtons
