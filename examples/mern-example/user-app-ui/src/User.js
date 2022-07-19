import axios from "axios";
import {useState} from 'react';

// fetch all user component
export function FetchUsers() {
    let [users, setUsers] = useState([]);
    let handleClick = () => {
        let url = "http://localhost:3001/user";
        axios.get(url)
        .then(response => setUsers(response.data))
        .catch(error => console.log(error));
    }
    return (<div>
        <h3>List of Users</h3>
        <button className = 'btn btn-primary' onClick = {handleClick}>Refresh</button>
        <table className = 'table'>
            <thead>
                <tr>
                    <th>ID</th><th>Name</th><th>Age</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((item, index) => {
                        return <tr key = {index}>
                            <td>{item._id}</td><td>{item.name}</td><td>{item.age}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>)
}
export function StoreUser() {
    let [_id, setId] = useState('');
    let [name, setName] = useState('');
    let [age, setAge] = useState('');
    let [message, setMessage] = useState('');
    let handleSubmit = (e) => {
        e.preventDefault();
        let url = "http://localhost:3001/user";
        axios.post(url, {"_id":_id, "name":name, "age":age})
        .then((response) => setMessage(response.data.insertedId + ' stored'))
        .catch((error) => setMessage('Sorry user failed to store'));
    }
    
    return (<div>
        <h3>User Registration</h3>
        <form onSubmit = {handleSubmit}>
            <div className = "form-group">
                <label>
                    Enter Id
                    <input type = 'text' onChange = {(e) => setId(e.target.value)}
                     autoComplete="off" name = '_id' placeholder="Enter Id" className = "form-control"></input>
                </label>
            </div>
            
            <div className = "form-group">
                <label>
                    Enter Name
                    <input type = 'text' onChange = {(e) => setName(e.target.value)}
                    autoComplete="off" name = 'name' placeholder="Enter Name" className = "form-control"></input>
                </label>
            </div>
            <div className = "form-group">
                <label>
                    Enter Age
                    <input type = 'text' onChange = {(e) => setAge(e.target.value)} 
                    autoComplete="off" name = 'age' placeholder="Enter Age" className = "form-control"></input>
                </label>
            </div>
            <br />
            <div className = "form-group">
                <input type = "submit" value = "Register" className = "btn btn-primary"></input>
            </div>
        </form>
        <div className = 'text-primary'>
            {message}
        </div>
    </div>)
}