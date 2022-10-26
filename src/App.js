import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Appointment from "./components/Appointment/Appointment";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Register from "./components/Register/Register";
import ServiceDetails from "./components/ServiceDetails/ServiceDetails";
import AuthProvider from "./context/AuthProvider";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>

          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route
              path="/details/:serviceID"
              element={
                <PrivateRoute>
                  <ServiceDetails></ServiceDetails>
                </PrivateRoute>
              }
            ></Route>
            <Route path="/about" element={<About></About>}></Route>
            <Route
              path="/appointment"
              element={
                <PrivateRoute>
                  <Appointment></Appointment>
                </PrivateRoute>
              }
            ></Route>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/register" element={<Register></Register>}></Route>
            <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
          </Routes>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
