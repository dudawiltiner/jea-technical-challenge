import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { CssBaseline, PaletteMode } from '@mui/material'
import { useAtom } from 'jotai'
import { isDarkModeAt } from './store'
import AppRoutes from './AppRoutes'
import { QueryClient, QueryClientProvider } from 'react-query'
import { CookiesProvider } from 'react-cookie'

export const themeOptions = (isDarkMode: boolean) => {
  return {
    palette: {
      mode: isDarkMode ? 'dark' : ('light' as PaletteMode),
      primary: {
        main: '#3f51b5'
      },
      secondary: {
        main: '#f50057'
      }
    }
  }
}

const client = new QueryClient();

function AppRender() {
  const [isDarkMode] = useAtom(isDarkModeAt)
  const theme = createTheme(themeOptions(isDarkMode))

  return (
    <QueryClientProvider client={client}>
      <CookiesProvider>
        <ThemeProvider theme={theme}>
          <AppRoutes />
          <CssBaseline />
        </ThemeProvider>
      </CookiesProvider>
    </QueryClientProvider>
  )
}

export default AppRender
