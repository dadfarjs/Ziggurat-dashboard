import PropTypes from 'prop-types'
import { FC, ReactNode } from 'react'
import { Outlet } from 'react-router-dom'

import { Box } from '@mui/material'
import useDirectionCheck from 'src/utils/hooks/useDirectionCheck'

interface BaseLayoutProps {
    children?: ReactNode
}

const BaseLayout: FC<BaseLayoutProps> = ({ children }) => {
    return (
        <Box
            sx={{
                flex: 1,
                height: '100%',
                right: useDirectionCheck('rtl') && 0,
                left: useDirectionCheck('ltr') && 0,
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
