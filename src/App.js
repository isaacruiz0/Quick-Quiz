import { BrowserRouter, Routes, Route} from 'react-router-dom';
// Pages
import LandingPage from './Components/LandingPage/LandingPage'


import './App.scss';

function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<LandingPage />} />
          </Routes>
        </BrowserRouter>

      </div>
  );
}

export default App;
