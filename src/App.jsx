import './App.css';
import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import {SunIcon} from './components/SunIcon'
import Switch from './components/Switch'
import {MoonIcon} from './components/MoonIcon'
import Form from './components/Form'


const LightTheme = {
  primary: '#4caf50',
  primaryLight: '#89c089',
  primaryDark: '#2e7d30',
  backgroundPrimary: '#ffffff',
  backgroundSecondary: '#ffffff',
  title: '#242424',
  text: '#333',
  textDark: '#0f0f0f',
  boxShadow: '#d9d9d9',
  transparent: 'transparent',
  borderOutline: '#79797938',
  constantWhite: '#fff',

  success: '#039d21',
  error: '#b92e2e',
  warning: '#942d2d',
  info: '#b7cfe6',
}

const DarkTheme = {
  primary: '#4caf50',
  primaryDark: '#2e7d30',
  backgroundPrimary: '#1c1c1c',
  backgroundSecondary: '#2c2c2c',
  title: '#ffffffde',
  text: '#a5a5a5',
  textDark: '#888',
  boxShadow : '#1a1a1a',
  transparent: 'transparent',
  borderOutline: '#ffffff2d',
  constantWhite: '#fff',

  success: '#039d21',
  error: '#b92e2e',
  warning: '#942d2d',
  info: '#5b5b5b',
}

const StyledApp = styled.div`
  background-color: ${(props) => props.theme.backgroundPrimary};
  transition: all 0.25s ease;
`
const DaH1 = styled.h1`
  color: ${(props) => props.theme.title};
`
const DaP = styled.p`
  color: ${(props) => props.theme.text};
`

function App() {

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  const isDarkTheme = theme === "dark";

  const toggleTheme = () => {
    const newTheme = isDarkTheme ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <ThemeProvider theme={isDarkTheme ? DarkTheme : LightTheme}>
      <StyledApp>

        <div className="App">

          <div>
            <div className='toggle'>
              <SunIcon />
              <Switch toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
              <MoonIcon />
            </div>

            <div>
              <DaH1>Welcome!</DaH1>
              <DaP>We are happy to have you back. Kindly login </DaP>
            </div>
          </div>

          <div>
            <Form />
          </div>
        </div>

      </StyledApp>
    </ThemeProvider>
  );
};

export default App;