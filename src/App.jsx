
import { Route , Routes } from 'react-router-dom';
import Start from './Start/Start.jsx'
import SignUp from './SignUp/SignUp.jsx'
import SignIn from './SignIn/SignIn.jsx'
import Terms from './Terms/Terms.jsx'
import Home from './Components/Home.jsx';
import AHome from './Admin/A-Home.jsx'
import HomeC from './Coaches/HomeC.jsx'
import HomeS from './Students/HomeS.jsx'
import ACoaches from './Admin/A-Coaches.jsx'
import AStudents from './Admin/A-Students.jsx'
import APayments from './Admin/A-Payments.jsx'

export default function App() {
  

  return(
    <>
          
          <Routes>
            <Route path="/" element={<Start />} />
            <Route path="/start" element={<Start />} />
            <Route path="/rigester" element={<SignUp />} />
            <Route path="/login" element={<SignIn />} />
            <Route path='/terms' element={<Terms />} />
            <Route path="/admin" element={<Home />} />
            <Route path="/a-home" element={<AHome />} />
            <Route path="/a-coaches" element={<ACoaches />} />
            <Route path="/a-students" element={<AStudents />} />
            <Route path="/a-payments" element={<APayments />} />
            <Route path="/coaches" element={<HomeC/>} />
            <Route path="/students" element={<HomeS/>} />
          </Routes>
    </>

  );
};



