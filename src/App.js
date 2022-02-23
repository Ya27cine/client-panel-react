import logo from './logo.svg';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <div className="App">
      <Navbar title="Contact list" />

      <Contact name="Yassine" tel="098736748" email="kh@gmail.com" />
      <Contact name="Sabah" tel="08374748" email="hm@gmail.com" />
    </div >
  );
}
export default App;
