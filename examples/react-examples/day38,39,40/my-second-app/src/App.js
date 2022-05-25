import {Link, Route, Routes} from 'react-router-dom';
import { Forms } from './components/Forms';
import axios from 'axios'; 
import { useState } from 'react';

function Users() {
  let [users, setUsers] = useState([]);
  let handleClick = () => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => {setUsers(res.data)})
    .catch(error => console.log(error))
  }
  return (<div>
    <h2>List all users from Fake API</h2>
    <button className = 'btn btn-secondary' onClick = {handleClick}>Load</button>
    <table className = 'table table-striped'>
      <thead>
        <tr>
          <th>Id</th><th>Name</th><th>Username</th><th>Email</th>
        </tr>
      </thead>
      <tbody>
        {
          users.map((user, index) => <tr key = {index}>
            <td>{user.id}</td><td>{user.name}</td>
            <td>{user.username}</td><td>{user.email}</td>
          </tr>)
        }
      </tbody>
    </table>
  </div>)
}

function Home() {
  return (<div>
    <h2>Home component</h2>
  </div>)
}
function Contacts() {
  return (<div>
    <h2>Contacts component</h2>
  </div>)
}
function About() {
  return (<div>
    <h2>About component</h2>
  </div>)
}
function App() {
 return (<div className = 'container-fluid'>
   <h1 className = 'text-center'>This is an example on SPA</h1>
   <div>
     <Link to = "/home">Home</Link> | 
     <Link to = "/contacts">Contact us</Link> | 
     <Link to = "/about">About us</Link> |
     <Link to = "/forms">Form</Link> |
     <Link to = "/fetch">Fetch Users</Link> 
   </div>
   <hr />
   <div>
    <Routes>
      <Route path = "/home" element = {<Home />} />
      <Route path = "/contacts" element = {<Contacts />} />
      <Route path = "/about" element = {<About />} />
      <Route path = "" element = {<Home />} />
      <Route path = "/forms" element = {<Forms />} />
      <Route path = "/fetch" element = {<Users />} />
    </Routes>
   </div>
 </div>)
}

export default App;
