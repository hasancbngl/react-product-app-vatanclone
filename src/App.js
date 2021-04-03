import './App.css';
import DataProvider from './container/context/Context';
import Sections from './components/sections/Sections';

function App() {
  return (
    <DataProvider>
    <Sections />
    </DataProvider>
  );
}

export default App;
