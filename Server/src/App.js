import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import SignInPage from './Components/SigninPage';
import SignUpPage from './Components/Signuppage';
import Create from './Components/Create';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/" element={<SignInPage />} />
          <Route path="/Create" element={<Create/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
