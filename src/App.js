import logo from './logo.svg';
import Navbar from './components/Navbar';
import Contacts from './components/Contacts';
import { Provider } from './components/Context';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'


function App() {
  return (
    <Provider>
      <div className="App">
        <Navbar title="Contact list" />
        <Contacts />
      </div >
    </Provider>
  );
}
export default App;
