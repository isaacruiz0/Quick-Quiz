import { BrowserRouter, Routes, Route} from 'react-router-dom';
import AnimatedRoutes from './AnimatedRoutes/AnimatedRoutes';



import './App.scss';

function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <AnimatedRoutes />
        </BrowserRouter>

      </div>
  );
}

export default App;
