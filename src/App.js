import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Layout from "./Layout/Layout";
import SignIn from "./Auth/Signin";
import Home from "./pages/Home";
import HowtoUse from "./pages/HowtoUse";

function App() {

  const isAuthenticated = localStorage.getItem("User") === 'true'


  return (
   <>
   <Router>
    <Routes>
        <Route path="/signin" element={isAuthenticated ? <Navigate to="/" replace /> : <SignIn />} />
        <Route path="/" element={isAuthenticated ? <Layout /> : <Navigate to="/signin" replace />}>
          <Route index element={<Home />} />
          <Route path="how-to-use" element={<HowtoUse />} />
          <Route path="settings" element={<HowtoUse />} />
          <Route path="support" element={<HowtoUse />} />
          <Route path="aicoder" element={<HowtoUse />} />
          <Route path="cloudsecurity" element={<HowtoUse />} />
        </Route>
    </Routes>
    </Router>   
   </>
  );
}

export default App;
