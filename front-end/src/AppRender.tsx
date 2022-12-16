import React from 'react';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { PaletteMode } from '@mui/material';
import MenuBar from './components/Menu';
import { useAtom } from 'jotai'
import { isDarkModeAt } from './store'
import ProjectsManage from './components/ProjectsManage';

export const themeOptions = (isDarkMode: boolean) => {
  return {
    palette: {
      mode: isDarkMode ? 'dark' : 'light' as PaletteMode,
      primary: {
        main: '#3f51b5',
      },
      secondary: {
        main: '#f50057',
      },
    },
  }
};


function AppRender() {
  const [isDarkMode] = useAtom(isDarkModeAt)
  const theme = createTheme(themeOptions(isDarkMode));

  return (
    <ThemeProvider theme={theme}>
      <MenuBar />
      <ProjectsManage />
    </ThemeProvider>
  );
}

export default AppRender;
