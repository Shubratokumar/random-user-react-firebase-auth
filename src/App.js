import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Users from "./components/Users/Users";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import UserDetails from "./components/UserDetails/UserDetails";
import Footer from "./components/Footer/Footer";
import NotFound from "./components/NotFound/NotFound";
import RequireAuth from "./components/RequireAuth/RequireAuth";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home></Home>} />
        <Route path="users" element={<Users></Users>} />
        <Route
          path="users/:userId"
          element={
            <RequireAuth>
              <UserDetails></UserDetails>
            </RequireAuth>
          }
        />
        <Route path="login" element={<Login></Login>} />
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
