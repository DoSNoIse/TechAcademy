import { editTask, getTasks, deleteTask } from './services/api';
import { useState, useEffect } from "react";
import React from "react";
import './Tasks.css';
import EditTask from './EditTask';

const Tasks = () => {
    const [tasks, setTasks] = useState([]);
    const [loaded, setLoaded] = useState(false);

    const loadTasks = () => {
        getTasks()
            .then(tasks => {
                setTasks(tasks);
                setLoaded(true);
            })
            .catch(error => {
                console.error("Error fetching tasks:", error);
            });
    };


    const createTask = (task) => {
        createTask(task)
            .then(() => {
                loadTasks();
                window.alert("Task created successfully!");
            })
            .catch(error => {
                console.error("Error creating task:", error);
            });
    };

    const deleteTaskAndReload = (task_id) => {
        deleteTask(task_id)
            .then(() => {
                loadTasks();
                window.alert("Task deleted successfully!");
            })
            .catch(error => {
                console.error("Error deleting task:", error);
            });
    };

    useEffect(() => {
        loadTasks();
    }, []); // Empty dependency array ensures it only runs once when the component mounts
    const editTaskAndReload = (task_id) => {
        editTask(task_id)
            .then(() => {
                loadTasks();
                window.alert("Task updated successfully!");
            })
            .catch(error => {
                console.error("Error updating task:", error);
            });
    };

    return (
        <React.Fragment>
            <div className="text-light text-center bg-dark vh-100 d-flex flex-column">
                <div className="App">
                    <div className="container">
                        <div>
                            <EditTask createTask={createTask} />
                        </div>
                        <ul>
                            {tasks.map((task) => (
                                <li className="list-group list-group-flush" key={task.task_id}>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col custom-col2 custom-col-spacing">
                                                <p>Description</p>
                                                <p>Link to the workout</p>
                                                <p>Time planned</p>
                                            </div>

                                            <div className="col custom-col2">
                                                <p>{task.description}</p>
                                                <p>{task.link}</p>
                                                <p>{task.due}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="container">
                                        <div className="col">
                                            <button
                                                type="button"
                                                className="btn btn-danger"
                                                onClick={() => deleteTaskAndReload(task.task_id)}
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Tasks;
