import logo from './logo.svg';
import './App.css';
import { Comment } from './components/Posts';

function App() {
  let comment1 = {
    text : "Hi, How are you!",
    profile : {
      name : 'Mark Zukerberg'
    }
  }
  let comment2 = {
    text : "Hey!",
    profile : {
      name : 'Alia Bhatt'
    }
  }
  return (
   <div>
    <h1>React app created from react tool kit!</h1>  
    <Comment comment = {comment1}/> 
    <Comment comment = {comment2}/>
   </div>
  );
}

export default App;
