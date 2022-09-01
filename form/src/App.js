import logo from './logo.svg';
import './App.css';
import Myform from './components/Myform';

function App() {
  return (
    <div className="App">
        <h2> forms </h2>
        <Myform user={{name: "Jhonata", email: "jhonata98@yopmail.com", bio: "Sou programador", role: "editor"}}/>
    </div>
  );
}

export default App;
