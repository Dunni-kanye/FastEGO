import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SplashScreen from "./components/SplashScreen";
import SplashScreen2 from "./components/SplashScreen2";
import WelcomePage from "./components/WelcomePage";
import MobileNumberPage from "./components/MobileNumberPage";
import VerifyPhonePage from "./components/VerifyPhonePage";
import SecureAccess from "./components/SecureAccess";
import CreatePasscode from "./components/CreatePasscode";
import UserInfoForm from "./components/UserInfoForm";
import SubmissionScreen from "./components/SubmissionScreen";
import GetStartedPage from "./components/GetStartedPage";
import AccountConfirmation from "./components/AccountConfirmation";
 

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/splash" element={<SplashScreen2 />} />
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/signup1" element={<GetStartedPage />} />
        <Route path="/Mobile" element={<MobileNumberPage />} />
        <Route path="/Verify" element={<VerifyPhonePage />} />
        <Route path="/Secure" element={<SecureAccess />} />
        <Route path="/Password" element={<CreatePasscode />} />
        <Route path="/Userinfo" element={<UserInfoForm />} />
        <Route path="/Submit" element={<SubmissionScreen />} />
        <Route path="/Confirmation" element={<AccountConfirmation />} />
      </Routes>
    </Router>
  );
};

export default App;
