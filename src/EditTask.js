import { useState } from "react";
import React from "react";
import { editTask } from "./services/api";
import './Tasks.css'


const EditTask = (props) => {
    // This state variable holds the task that we want to create / update
    const [newTask, setNewTask] = useState({
        description: '',
        link: '',
        due: new Date(),
        assignee: "David" //this is the user MF
    });
    const onFormSubmit = async (e) => {
        e.preventDefault();

        if (newTask.description === "" || newTask.link === "" || newTask.due === "") {
            alert("Please fill in all fields");
            return;
        }

        try {
            const response = await fetch("http://localhost:5000/tasks", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newTask)
            });

            if (response.ok) {
                // Handle successful response
                console.log("Task created successfully");
                // Reset the form
                setNewTask({
                    description: "",
                    link: "",
                    assignee: "David",
                    due: new Date()
                });
                alert("Your fat has got a task")
            } else {
                // Handle error response
                console.log("Failed to create task");
            }
        } catch (error) {
            console.log("Error:", error);
        }


    };
    // Render the form
    return (
        <React.Fragment>
            <div className="container">
                <h2 className="header2">Enter a new task</h2>
            </div>
            <form>
                {""}
                <input
                    id='task_description'
                    value={newTask.description}
                    type='text'
                    placeholder='description'
                    onChange={(e) => {
                        setNewTask({ ...newTask, description: e.target.value });
                    }}
                />
                <input
                    id='task_link'
                    value={newTask.link}
                    type='text'
                    placeholder='link'
                    onChange={(e) => {
                        setNewTask({ ...newTask, link: e.target.value });
                    }}
                />
                <input

                    id='task_dueDate'
                    value={newTask.dueDate}
                    type="datetime-local"
                    placeholder='due date'
                    onChange={(e) => {
                        setNewTask({ ...newTask, due: new Date(newTask.due) });
                    }}
                />
                {/* Submit button to send the form data to the API */}
                <button
                    type="button" class="btn btn-outline-success"
                    onClick={(e) => {
                        setNewTask({ ...newTask, assignee: "David" })
                        onFormSubmit(e);
                    }}
                >
                    Submit
                </button>
            </form>
        </React.Fragment>
    );
};
export default EditTask