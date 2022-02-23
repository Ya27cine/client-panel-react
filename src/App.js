import logo from './logo.svg';
import Navbar from './components/Navbar';
import Contacts from './components/Contacts';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <div className="App">
      <Navbar title="Contact list" />

      <Contacts />

    </div >
  );
}
export default App;
