import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Edit from "./pages/EditPendaftaran.jsx";
import Login from "./pages/Login.jsx";
import Registrasi from "./pages/Registrasi.jsx";
import Welcome from "./pages/Welcome.jsx";
import Pendaftaran from "./pages/Pendaftaran.jsx";

const PrivateRoute = ({ element: Component, ...rest }) => {
  const isAuthenticated = localStorage.getItem("token");

  return (
    <Route
      {...rest}
      element={props => (
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Navigate to="/login" replace />
        )
      )}
    />
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registrasi" element={<Registrasi />} />
        <PrivateRoute path="/dashboard" element={<Welcome />} />
        <Route path="/pendaftaran" element={<Pendaftaran />} />
      </Routes>
    </Router>
  );
};

export default App;
