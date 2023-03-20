import logo from './logo.svg';
import './styles.css'
import './App.css';
import Navigation from './navigation';
import Resume from "./components/Resume";
import AWK from "./components/AWK"
import PS from "./components/PS"

function App() {
  return (
    <div className="App">
      <Navigation />
        <Resume/>
        <AWK/>
      <PS/>
    </div>
  );
}

export default App;
