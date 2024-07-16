import { FC, ReactNode } from 'react'
import PropTypes from 'prop-types'
import { Outlet } from 'react-router-dom'

import { Box, useTheme } from '@mui/material'

interface BaseLayoutProps {
    children?: ReactNode
}

const BaseLayout: FC<BaseLayoutProps> = ({ children }) => {
    const theme = useTheme()
    return (
        <Box
            sx={{
                flex: 1,
                height: '100%',
                right:
                    (theme.direction === 'rtl' || theme.direction !== 'ltr') &&
                    0,
                left: theme.direction === 'ltr' && 0,
            }}
        >
            {children || <Outlet />}
        </Box>
    )
}

BaseLayout.propTypes = {
    children: PropTypes.node,
}

export default BaseLayout
