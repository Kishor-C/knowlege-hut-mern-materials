import logo from './logo.svg';
import './App.css';
import {useState} from 'react'; // useState is a hook
function User(props) {
  let [name, setName] = useState('Dummy'); 
  let [age, setAge] = useState(0);

  let handleClick = (e) => {
    setName('Rahul');
    setAge(35);
  }
  return (<div>
    <h2>User component!</h2>
    <div>Hello {name}!, your age is {age}</div>
    <div>
      <button onClick = {handleClick}>My Button1</button>
      <button onClick = {(e) => {setName('Ramesh'); setAge(44)}}>My Button2</button>
    </div>
  </div>)
}
function App() {
  return (
    <div className = 'container-fluid'>
      <h1>Understanding Events in Reactjs</h1>
      <User />
    </div>
  );
}

export default App;
