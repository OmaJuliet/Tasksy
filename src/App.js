import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Tasks from './pages/Tasks';
import Create from './pages/Create';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import View from './components/View';


const theme = createTheme({
  typography: {
    button: {
      fontSize: '0.9rem',
      marginTop: "1.2rem"
    },

    h6: {
      marginTop: "1rem",
      padding: "5px",
    }

  },

  input: {
    marginTop: 20,
    marginBottom: 20,
    color: "red"
  }

});



function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <View >
            <Routes>
              <Route path="/" element={<Tasks />} />
              <Route path="/create" element={<Create />} />
            </Routes>
          </View>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
