import 'bootstrap/dist/css/bootstrap.css';
import './Navbar.css'
import logo from './Triangle2.png';
function Navbar() {
    return (
        <div>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400&display=swap" rel="stylesheet" />

            <div className="text-light text-center bg-dark vh-100 d-flex flex-column">
                <div className="my-auto">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1>
                        JBF
                    </h1>
                    <p className="pp">Performance tracking for athletes</p>
                </div>
                <div className="">
                    <div>
                        <div className="d-flex justify-content-evenly align-items-center mb-5" id="bottomNav">
                            <div className="nav-item"><a className="nav-link" href="/">HOME</a></div>
                            <div className="nav-item"><a className="nav-link" href="/tasks">TASKS</a></div>
                            <div className="nav-item"><a className="nav-link" href="/messages">MESSAGES</a></div>
                            <div className="nav-item"><a className="nav-link" href="https://v3sfk7.csb.app/">RANDOM</a></div>
                            <div className="nav-item"><a className="nav-link" href="/login">LOG IN</a></div>
                        </div>

                    </div>
                </div>
            </div>
        </div>)
}

export default Navbar