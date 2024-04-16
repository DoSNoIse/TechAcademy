import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import Login from './Login';
import Welcometext from './Welcometext';
import Task from './Tasks';
import Messages from './Messages';

import { BrowserRouter, Routes, Route, RouterProvider } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>

      <div className="text-light text-center bg-dark vh-100 d-flex flex-column">
        <Navbar></Navbar>
        <div className="App" >

          <Routes>
            <Route path="/" element={<Welcometext />} />
            <Route path="/tasks" element={<Task />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/login" element={<Login />} />
          </Routes>


        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;
