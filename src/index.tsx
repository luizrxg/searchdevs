import React from 'react';
import ReactDOM from 'react-dom/client';

import {createTheme, ThemeProvider} from "@mui/material";

import Routes from "./routes";
import Home from "./pages/home/page/home";
import Profile from "./pages/profile";

import './index.scss';

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
      {/*<Home/>*/}
      <Profile/>
    </ThemeProvider>
  </React.StrictMode>
);

