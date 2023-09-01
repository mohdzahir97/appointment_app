import logo from './logo.svg';
import './App.css';

import Home from './components/landing/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/layout/Header';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import Logout from './components/auth/Logout';
import Profile from './components/services/Profile';
import Services from './components/tabcontainer/services/Services';
import ScheduleMeetingCom from './components/services/ScheduleMeetingCom';
import UpcomingMeetingCom from './components/services/UpcomingMeetingCom';
import ChangePassword from './components/auth/ChangePassword';
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={<SignIn />}></Route>
          <Route path='/register' element={<SignUp />}></Route>
          <Route path='/logout' element={<Logout />}></Route>

          <Route path='/services' element={<Services />}>
            <Route path='profile' element={<Profile />} />
            <Route path='change_password' element={<ChangePassword />} />
            <Route path='schedule_meeting' element={<ScheduleMeetingCom />} />
            <Route path='up_coming_meeting' element={<UpcomingMeetingCom />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
