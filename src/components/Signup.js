import React, {useState} from 'react';
import userFunctions from '../utilities/getUsers';

const Signup = () => {
    const INITIAL_STATE = {firstName: "", lastName: "", email: ""};
    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleSubmit = evt => {
        evt.preventDefault();
        userFunctions.addUser(formData);
        setFormData(INITIAL_STATE);
        alert(`${formData.firstName} has been added!`)
    }

    const handleChange = evt => {
        const {name, value} = evt.target;
        setFormData(fData => ({
            ...fData,
            [name]: value
        }))
    };

    return (
        <>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name: </label>
                <input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                />
                <label htmlFor="lastName">Last Name: </label>
                <input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                />
                <label htmlFor="email">Email: </label>
                <input
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <button>Submit</button>
            </form>
        </>
    )
}

export default Signup;