import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter } from 'react-router-dom'

import 'nprogress/nprogress.css'
import App from 'src/App'
import { SidebarProvider } from 'src/contexts/SidebarContext'
import * as serviceWorker from 'src/serviceWorker'
import ThemeProviderWrapper from 'src/theme/ThemeProvider'

ReactDOM.createRoot(document.getElementById('main')!).render(
    <React.StrictMode>
        <HelmetProvider>
            <ThemeProviderWrapper>
                <SidebarProvider>
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                </SidebarProvider>
            </ThemeProviderWrapper>
        </HelmetProvider>
    </React.StrictMode>
)

serviceWorker.unregister()
