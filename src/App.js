import { ThemeProvider } from 'styled-components';

// CSS
import './App.css';
import GlobalStyles from './css/Global';

// Component
import Landing from './pages/Landing';

const theme = {
  colors: {
    white: '#FFFFFF',
    blue: '#005DA5',
    lightBlue: '#CCE6F6',
    skyBlue: '#E3EDF4',
    green: '#06A0A7',
    lightGreen: '#F1F7E9',
    moneyGreen: '#F1F7E9',
    silver: '#E7E7E7',
  },
  mobile: '768px',
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <GlobalStyles />
        <Landing />
      </div>
    </ThemeProvider>
  );
}

export default App;
