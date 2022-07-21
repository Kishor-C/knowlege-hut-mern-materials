import logo from './logo.svg';
import './App.css';
import { StoreUser, FetchUsers } from './User';

import {Route, Link, Routes} from 'react-router-dom';

function App() {
  return (
    <div className = "container-fluid">
      <h1 className = 'text-center'>A Simple User Operations</h1>
      <div className = 'row'>
        <div className = 'col'>
          <Link to = '/registration'>Registration</Link> /
          <Link to = '/fetchUsers'>Display Users</Link> /
          <Link to = '/updateUser'>Update User</Link>/
          <Link to = '/fetchUserById'>Find User</Link>
        </div>
      </div>
      <div className = 'row'>
        <Routes>
          <Route path = '/' element = {<StoreUser />} />
          <Route path = '/registration' element = {<StoreUser />} />
          <Route path = '/fetchUsers' element = {<FetchUsers />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
