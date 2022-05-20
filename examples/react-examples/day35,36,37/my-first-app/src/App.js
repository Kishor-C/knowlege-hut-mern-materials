import logo from './logo.svg';
import './App.css';

function NameItem(props) {
  return (<div>
    Hello {props.name}!
  </div>)
}
function App() {
  let users = [
    {name : 'Sachin', gender : 'Male', dob : '1978-04-24'}, 
    {name : 'Sourav', gender: 'Male', dob : '1977-05-22'},
    {name : 'Sony', gender: 'Female', dob : '1980-05-23'}
  ];
  return (
   <div>
    <h1>This is root component</h1> <hr />
    <table className = 'table'>
      <thead>
        <tr>
          <th>Sl. No</th><th>Name</th><th>Gender</th><th>Dob</th><th>Buttons</th>
        </tr>
      </thead>
      <tbody>
        {
          users.map((user, index) => <tr key = {index}>
            <td>{index + 1}</td><td>{user.name}</td><td>{user.gender}</td><td>{user.dob}</td>
            <td><button className = 'btn btn-danger'>Delete</button></td>
          </tr>)
        }
      </tbody>
    </table>
   </div>
  );
}

export default App;
