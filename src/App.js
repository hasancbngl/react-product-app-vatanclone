import './App.css';
import DataProvider from './context/Context';
import Sections from './components/sections/Sections';

function App() {
  return (
    <DataProvider>
    <Sections />
    </DataProvider>
  );
}

export default App;
