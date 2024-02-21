import './App.css';
import { Routes ,Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Favourites from './pages/Favourites';
import Details from './pages/Details';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' exact element={<Home/>}></Route>
        <Route path='/favourites' element={<Favourites/>}></Route>
        <Route path='/details/:id' element={<Details/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
