import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar title="Contact list" />

      <header className="App-header">
        <Contact />
        <Contact name="Yassine" tel="098736748" email="kh@gmail.com" />
        <Contact name="Sabah" tel="08374748" email="hm@gmail.com" />


      </header>
    </div >
  );
}

export default App;
