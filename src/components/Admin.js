import React, {useEffect, useState} from 'react';
import userFunctions from '../utilities/getUsers';
import User from './User';

const Admin = () => {
    const [users, setUsers] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        async function fetchData() {
            let data = await userFunctions.getUsers();
            console.log(data)
            setUsers(data);
            setIsLoaded(true);
        }
        fetchData()
    },[])

    return (
        <>
            {(!isLoaded) ? <div>Loading...</div> : null}
            {isLoaded && users.length > 0 ? 
                users.map((user) => (
                    <User user={user} key={user.id}/>
                ))
                : ""
            }
        </>
    )
}

export default Admin;