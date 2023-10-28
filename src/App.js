import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Login from './components/login';
import Landing from './components/landing';
import Register from './components/Register';
import Booking from './components/booking';
import ContactUs from './components/contactus';
import AboutUs from './components/AboutUs';
import BookingPage from './components/bookingContainer';
import OrderMedicine from './components/OrderMedicine';
import InformationAndEducation from './components/Edu';


function App() {
  return (
    <Router>
        <Navbar/>
        
            <Routes>
            <Route path="/Edu" element={<InformationAndEducation />} />
            <Route path="/medicine" element={<OrderMedicine />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/about" element={<AboutUs />} />
                <Route path="/" element={<Landing />} />
                <Route path="/users/login" element={<Login />} />
                <Route path="/users/register" element={<Register />} />
                <Route path="/bookings" element={<Booking />} />
                <Route path="/bookingPage" element={<BookingPage />} />
                
            </Routes>
        </Router>

  );
}

export default App;
