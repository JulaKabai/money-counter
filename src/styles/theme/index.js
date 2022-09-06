import React from 'react';
import {
  createTheme, CssBaseline, StyledEngineProvider, ThemeProvider,
} from '@mui/material';
import palette from './palette';
import typography from './typography';
import breakpoints from './braekpoints';

const MaterialUiTheme = ({ children }) => {
  const theme = createTheme({ palette, typography, breakpoints });
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {
          children
        }
      </ThemeProvider>
    </StyledEngineProvider>
  );
};
export default MaterialUiTheme;
