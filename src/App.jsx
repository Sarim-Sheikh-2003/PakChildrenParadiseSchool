import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from './Components/Header';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import Leadership from './Pages/Leadership';
import CalendarPage from './Pages/CalendarPage';
import ContactUs from './Pages/ContactUs';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/AboutUs' element={<AboutUs />}></Route>
        <Route path='/Leadership' element={<Leadership />}></Route>
        <Route path='/Calendar' element={<CalendarPage />}></Route>
        <Route path='/ContactUs' element={<ContactUs />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
