
import './App.scss';
import MomentumScroll from './components/MomentumScroll';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';

function App() {
  return (

    <MomentumScroll>
      <div className="App">
        <Header />
        <div className="page">
          <HomePage />
        </div>
        <Footer />
      </div>
    </MomentumScroll>
  );
}

export default App;
