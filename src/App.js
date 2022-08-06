import { BrowserRouter, Routes, Route} from 'react-router-dom';
// Pages
import LandingPage from './Components/LandingPage/LandingPage'
import Category from './Components/Category/Category'


import './App.scss';

function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/Category' element={<Category />} />
          </Routes>
        </BrowserRouter>

      </div>
  );
}

export default App;
