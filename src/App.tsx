import './App.css';
import Main from './components/Main';
import SideBar from './components/SideBar';
import { BrowserRouter as Router,  Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
          <SideBar />
          <Main />
      </Router>
    </div>
  );
}

export default App;
