import React from 'react'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { CssBaseline, PaletteMode } from '@mui/material'
import MenuBar from './components/Menu'
import { useAtom } from 'jotai'
import { isDarkModeAt } from './store'
import ProjectsManage from './components/ProjectsManage'
import Error from './components/404'

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

function AppRender() {
  const [isDarkMode] = useAtom(isDarkModeAt)
  const theme = createTheme(themeOptions(isDarkMode))

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Error />
    </ThemeProvider>
  )
}

export default AppRender
