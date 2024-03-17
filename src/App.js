
import './App.scss';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="page-content">
        <HomePage />
      </div>
      <Footer />
    </div>
  );
}

export default App;
