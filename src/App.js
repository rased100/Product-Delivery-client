import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
      </Router>
    </div>
  );
}

export default App;
