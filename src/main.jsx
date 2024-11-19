import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, RouterProvider, createBrowserRouter} from 'react-router-dom'
import { Home } from "./components/Home.jsx";
import { About } from "./components/About.jsx";
import { Menu } from "./components/Menu.jsx";
import { SignIn } from "./components/SignIn.jsx";
import { CreateAcc } from "./components/CreateAcc.jsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/menu',
    element: <Menu />
  },
  {
    path: '/signIn',
    element: <SignIn />
  },
  {
    path: '/createAcc',
    element: <CreateAcc />
  }
])

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
