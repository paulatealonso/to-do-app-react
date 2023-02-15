import './App.css';
import { ContextProvider } from './context/NoteContext';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';




function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Routes>
        <Route path='/' element={<Homepage/>}/>
        </Routes>
      </ContextProvider>
    </div>
  );
}

export default App;
