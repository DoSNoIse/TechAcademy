const API_URL = 'http://localhost:5000';

/**
 * fetch tasks from the API
 * and 
 * return them
 */


export function getTasks() { // Retrieve tasks from the API
    return fetch(`${API_URL}/tasks`)
        .then((response) => response.json())
        .then((data) => data);
}

export function getTask(id) { // Retrieve a single task from the API by its ID
    return fetch(`${API_URL}/task${id}`)
        .then((response) => response.json())
        .then((data) => data);
}

export function createTask(id) {
    // Send a POST request to the API for creting a new task entity
    return fetch(`${API_URL}/task/${id}`, {
        method: 'POST',
    })
        .then((response) => response.json())
        .then((data) => data);
}
//function updateTask(task) {... }   // Send a PUT request to the API for updating an existing entity
export function deleteTask(id) { // Send a DELETE request to the API for deleting a task entity
    return fetch(`${API_URL}/tasks/${id}`, {
        method: 'DELETE',
    })
        .then((response) => response.json())
        .then((data) => data);
}

export function editTask(id) { // Send a PUT request to the API for deleting a task entity
    return fetch(`${API_URL}/tasks/${id}`, {
        method: 'PUT',
    })
        .then((response) => response.json())
        .then((data) => data);
}

export function getMessage(id) { // Retrieve a single task from the API by its ID
    return fetch(`${API_URL}/messages${id}`)
        .then((response) => response.json())
        .then((data) => data);
}

export function getMessages() { // Retrieve tasks from the API
    return fetch(`${API_URL}/messages`)
        .then((response) => response.json())
        .then((data) => data);
}

export function createMessage(id) {
    // Send a POST request to the API for creting a new task entity
    return fetch(`${API_URL}/messages/${id}`, {
        method: 'POST',
    })
        .then((response) => response.json())
        .then((data) => data);
}

export function editMessage(id) { // Send a PUT request to the API for deleting a task entity
    return fetch(`${API_URL}/messages/${id}`, {
        method: 'PUT',
    })
        .then((response) => response.json())
        .then((data) => data);
}

export function deleteMessage(id) { // Send a DELETE request to the API for deleting a task entity
    return fetch(`${API_URL}/messages/${id}`, {
        method: 'DELETE',
    })
        .then((response) => response.json())
        .then((data) => data);
}

export function getUser(id) { // Retrieve a single task from the API by its ID
    return fetch(`${API_URL}/users${id}`)
        .then((response) => response.json())
        .then((data) => data);
}

export function createUser(user) {
    // Send a POST request to the API for creting a new task entity
    return fetch(`${API_URL}/user`, {
        method: 'POST',
    })
        .then((response) => response.json())
        .then((data) => data);
}