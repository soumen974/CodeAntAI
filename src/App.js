import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from "./Layout/Layout";
import SignIn from "./Auth/Signin";
import Home from "./pages/Home";
import HowtoUse from "./pages/HowtoUse";

function App() {
  
  return (
   <>
   <Router>
    <Routes>
      <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='/how-to-use' element={<HowtoUse/>}/>
            <Route path='/settings' element={<HowtoUse/>}/>
            <Route path='/support' element={<HowtoUse/>}/>
            <Route path='/aicoder' element={<HowtoUse/>}/>
            <Route path='/cloudsecurity' element={<HowtoUse/>}/>

      </Route>
      <Route path='/signin' element={<SignIn/>}/>
    </Routes>
    </Router>   
   </>
  );
}

export default App;
