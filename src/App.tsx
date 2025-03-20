import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/home/Home.page';
import './App.css';

import CssBaseline from '@mui/material/CssBaseline';

function App() {
  return (
    <>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
