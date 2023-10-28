import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Login from './components/login';
import Landing from './components/landing';
import Register from './components/Register';

function App() {
  return (
    <Router>
        <Navbar/>
        
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                {/* <Route path="/about" element={<CreateCourse />} />
                <Route path="/courses" element={<ShowCourses />} /> */}
            </Routes>
        </Router>
  );
}

export default App;
