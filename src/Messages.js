import { getMessage, getMessages, deleteMessage } from './services/api'
import { useState } from "react"
import React from "react"
import EditMessage from './EditMessage'
import './Messages.css'


const Messages = () => {
    const [Messages, setMessages] = useState([]); // Here we store our Messages from the API
    const [loaded, setLoaded] = useState(false); // This boolean variable indicates if the Messages have been loaded already

    /**
     * Fetch Messages from the API and store them in the internal state of the component.
     */

    const loadMessages = () => {
        getMessages()
            .then(messages => {
                setMessages(messages);
                setLoaded(!loaded);
            })
            .catch(error => {
                console.error("Error fetching messages:", error);
            });
    };



    // Load Messages from the API of they haven't been loaded before
    if (!loaded) {
        loadMessages();
    }

    const createMessage = (Message) => {
        // Send a POST request to the API
        createMessage(Message);
        // Reload Messages
        loadMessages();
        // Show an alert
        window.alert("Message created successfully!")
    };

    const delete_Message = (id) => {
        // Send a DELETE request to the API
        deleteMessage(id);
        // Reload Messages
        loadMessages();
        // Show an alert
        window.alert("Message deleted successfully, never don't give up")
    };
    const edit_Message = (Message) => {
        // Send a DELETE request to the API
        edit_Message(Message);   // recursive function error, fix it.
        // Reload Messages
        loadMessages();
        // Show an alert
        window.alert("Message deleted successfully, never don't give up")
    };


    return (
        <React.Fragment>
            <div className="text-light text-center bg-dark vh-100 d-flex flex-column">

                <div className="App" >
                    <div className="container" >
                        <div className="container">
                            <h2 className="header2">Enter a new message</h2>
                        </div>
                        <div>
                            <EditMessage></EditMessage>
                        </div>

                        {<ul>
                            {Messages.map((Message) => (
                                <li class="list-group list-group-flush" key={Message.id}>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col custom-col1">
                                                <p>Title of message: </p>
                                                <p>Message: </p>
                                                <p>Message sent on: </p>
                                            </div>

                                            <div className="col custom-col1">
                                                <p>{Message.title}</p>
                                                <p>{Message.message}</p>
                                                <p>{Message.time}</p>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="container">
                                        <div class="col">
                                            <button type="button" class="btn btn-danger"
                                                onClick={() => {
                                                    delete_Message(Message.id);
                                                }}
                                            >
                                                Delete
                                            </button>

                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>}
                    </div>
                </div>

            </div>
        </React.Fragment>
    );
};


export default Messages;