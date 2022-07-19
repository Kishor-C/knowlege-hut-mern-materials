import logo from './logo.svg';
import './App.css';
import { StoreUser, FetchUsers } from './User';

function App() {
  return (
    <div className = "container-fluid">
      <h1 className = 'text-center'>A Simple User Operations</h1>
      <div className = 'row'>
        <div className = 'col-5'>
          <StoreUser />
        </div>
        <div className = 'col-5'>
          <FetchUsers />
        </div>
      </div>
    </div>
  );
}

export default App;
