import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
  useNavigate,
} from "react-router-dom";
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
// import { Store } from "./APP/Store.js";
import { Provider } from "react-redux";
import Register from "./pages/Register.jsx";
import { isLoggedIn } from "./utility/auth.jsx";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  // if (!isLoggedIn()) {
  //   // Redirect them to the login page, but save the current location they were
  //   // trying to go to when they were redirected. This allows us to send them
  //   // along to that page after they login, which is a nicer user experience
  //   // than dropping them off on the home page.
  //   return <Navigate to="/" replace />;
  return isLoggedIn() ? children : <Navigate to="/" replace />;
};

const routerProvider = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/Register",
    element: <Register />,
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Provider store={Store}> */}
    <RouterProvider router={routerProvider}>
      <App />
    </RouterProvider>
    {/* </Provider> */}
  </React.StrictMode>
);
