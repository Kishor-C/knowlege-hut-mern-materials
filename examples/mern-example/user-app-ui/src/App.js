import logo from './logo.svg';
import './App.css';
import { StoreUser } from './User';

function App() {
  return (
    <div className = "container-fluid">
      <h1 className = 'text-center'>A Simple User Operations</h1>
      <div className = 'row'>
        <div className = 'col-5'>
          <StoreUser />
        </div>
      </div>
    </div>
  );
}

export default App;
