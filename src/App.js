import './App.css';
import Header from './components/header/Header.js';
import Card from './components/card/Card.js';
import Footer from './components/footer/Footer.js';
import {
  Route,
  Link,
  BrowserRouter as Router,
  BrowserRouter,
} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter className='App'>
      <Header />
      <Card />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
