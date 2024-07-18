import { useRoutes } from 'react-router-dom'
import router from 'src/router'

// import AdapterDateFns from '@mui/lab/AdapterDateFns'
// import LocalizationProvider from '@mui/lab/LocalizationProvider'

import { I18nextProvider } from 'react-i18next'
import i18n from 'lib/I18n'

import { CssBaseline } from '@mui/material'
import useDirection from './utils/hooks/useDirection'
import useThemeLocalStorage from 'utils/hooks/useThemeLocalStorage'

function App() {
    const content = useRoutes(router)
    useDirection()
    useThemeLocalStorage()

    return (
        <>
            {/* <LocalizationProvider dateAdapter={AdapterDateFns}> */}
            <I18nextProvider i18n={i18n} defaultNS={'translation'}>
                <CssBaseline enableColorScheme />
                {content}
            </I18nextProvider>
            {/* </LocalizationProvider> */}
        </>
    )
}

export default App
