import { BrowserRouter } from "react-router-dom";
import Layout from "./components/pages/Layout";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";  
import Home from  "./components/pages/Home"
import Contact from  "./components/pages/Contact"
import LoginReg from "./components/pages/auth/LoginReg"
import SendPasswordResetEmail from "./components/pages/auth/SendPasswordResetEmail";
import ResetPasswordForm from "./components/pages/auth/ResetPasswordForm";
import Dashboard from  "./components/pages/Dashboard"

function App() {
  return (
      <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index  element={<Home/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="login" element={<LoginReg/>}/>
        <Route path="sendPasswordResetEmail" element={<SendPasswordResetEmail/>}/>
        <Route path="reset" element={<ResetPasswordForm/>}/>
        </Route>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="*" element={<h1>Error 404 Page not found!</h1>}/>
    </Routes>
    </BrowserRouter>
      </> 
  );
}

export default App;
