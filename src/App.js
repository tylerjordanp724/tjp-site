
import './App.scss';
import Header from './components/Header';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="page-content">
        <HomePage />
      </div>
    </div>
  );
}

export default App;
