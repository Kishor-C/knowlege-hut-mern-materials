import {useState} from 'react';
export function Forms() {
    let [name, setName] = useState('');
    let [age, setAge] = useState('');
    let handleSubmit = (e) => {
        e.preventDefault(); // prevents form getting submitted
        console.log(`send ${name} and ${age} to backend`);
        setName('');
        setAge('');
    }
    let handleChange = (e) => {
        let inputName = e.target.name;
        let inputValue = e.target.value;
        switch(inputName) {
            case 'n1': 
            //update name
            setName(inputValue);
            break;
            case 'n2': 
            //update age
            setAge(inputValue);
            break;
        }
    }
    
    return (<div className = 'form-group'>
        <h3>Simple Form</h3>
        <form onSubmit = {handleSubmit}>
            <div>
                <label>
                    Enter name <input type = 'text' onChange = {handleChange} value = {name}
                    className = 'form-control' autoComplete='off' name = 'n1'></input>
                </label>
            </div>

            <div>
            <label>
                Enter age <input type = 'text' onChange = {handleChange} value = {age}
                className = 'form-control' autoComplete='off' name = 'n2'></input>
            </label>
            </div>
            <div>
            <input type = 'submit' value = 'Submit' className = 'btn btn-primary'></input>
            </div>
            <div>
                Hello {name}!, your age is {age}
            </div>
        </form>
    </div>)
}