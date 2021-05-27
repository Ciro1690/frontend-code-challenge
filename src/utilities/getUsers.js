import axios from "axios";

const BASE_URL = "http://localhost:3000";

async function getUsers () {
    let response = await axios.get(`${BASE_URL}/users`);
    return response.data;
}

async function addUser(data) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', '');

    const options = {
        method: 'POST',
        headers,
        body: JSON.stringify(data)
    };

    const request = new Request(`${BASE_URL}/users`, options);
    const response = await fetch(request);
    const status = await response.status;

    if (status === 201) {
        console.log(response)
        return response;
    }
}

const userFunctions = {
    getUsers, addUser
}

export default userFunctions;