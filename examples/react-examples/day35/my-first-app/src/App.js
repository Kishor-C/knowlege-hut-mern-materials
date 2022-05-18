import logo from './logo.svg';
import './App.css';
import First from './components/First';
function App() {
  let name = "Rajesh";
  return (
   <div>
    <h1>React app created from react tool kit!</h1>  
    <First username = {name}/>
   </div>
  );
}

export default App;
