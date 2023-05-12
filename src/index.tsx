import React from 'react';
import ReactDOM from 'react-dom/client';

import {createTheme, ThemeProvider} from "@mui/material";

import Router from "./routes";

import './index.scss';
import GlobalProvider from './contexts/global';

const theme = createTheme({
    palette: {
        primary: {
            light: '#8C19D2',
            main: '#8C19D2',
            dark: '#8C19D2',
            contrastText: '#FFF',
        },
    },
    typography: {
        fontFamily: "Inter",
        fontWeightLight: 400,
        fontWeightRegular: 500,
        fontWeightMedium: 600,
        fontWeightBold: 700,
    },
});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalProvider>
        <Router/>
      </GlobalProvider>
    </ThemeProvider>
  </React.StrictMode>
);

