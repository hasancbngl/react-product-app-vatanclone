import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router} from 'react-router-dom';
import DataProvider from './context/context';
import Sections from './components/sections/Sections';

function App() {
  return (
    <DataProvider>
    <Router>
    <Navbar />
    <Sections />
    </Router>
    </DataProvider>
  );
}

export default App;
