import { useState } from "react";
import React from "react";


const EditMessage = (props) => {
    // This state variable holds the Message that we want to create / update
    const [newMessage, setNewMessage] = useState({
        message: '',
        title: '',
        time: new Date(),
        assignee: "David" //this is the user MF
    });
    const onFormSubmit = async (e) => {
        e.preventDefault();

        if (newMessage.message === "" || newMessage.title === "") {
            alert("Please fill in all fields");
            return;
        }

        try {
            const response = await fetch("http://localhost:5000/messages", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newMessage)
            });

            if (response.ok) {
                // Handle successful response
                console.log("Message created successfully");
                // Reset the form
                setNewMessage({
                    message: "",
                    title: "",
                    assignee: "David",
                    time: new Date()
                });
                alert("Your fat has got a Message")
            } else {
                // Handle error response
                console.log("Failed to create Message");
            }
        } catch (error) {
            console.log("Error:", error);
        }
    };
    // Render the form
    return (
        <React.Fragment>
            <form>
                {/* Input field for the Message message */}
                <input
                    id='Message_message'
                    value={newMessage.message}
                    type='text'
                    placeholder='message'
                    onChange={(e) => {
                        setNewMessage({ ...newMessage, message: e.target.value });
                    }}
                />
                <input
                    id='Message_title'
                    value={newMessage.title}
                    type='text'
                    placeholder='title'
                    onChange={(e) => {
                        setNewMessage({ ...newMessage, title: e.target.value });
                    }}
                />
               
                {/* Submit button to send the form data to the API */}
                <button
                    type="button" class="btn btn-outline-success"
                    onClick={(e) => {
                        setNewMessage({ ...newMessage, assignee: "David" })
                        onFormSubmit(e);
                    }}
                >
                    Submit
                </button>
            </form>
        </React.Fragment>
    );
};
export default EditMessage