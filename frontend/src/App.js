import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Style from "./components/Style";
import HomePage from "./components/HomePage";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Reset from "./components/Reset";
import OTP from "./components/OTP";
import UpdatePassword from "./components/UpdatePassword";
import AccountCreated from "./components/AccountCreated";
import Createpost from "./components/Createpost";
import AllPosts from "./components/AllPosts";
import PostView from "./components/PostView";
import ResetOTP from "./components/ResetOTP";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Style/>,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/signup", element: <SignUp /> },
      { path: "/login", element: <Login /> },
      { path: "/reset", element: <Reset /> },
      { path: "/reset-otp", element: <ResetOTP /> },
      { path: "/update-password", element: <UpdatePassword /> },
      { path: "/otp", element: <OTP /> },
      { path: "/account-created", element: <AccountCreated /> },
      { path: "/create-post", element: <Createpost /> },
      { path: "/posts", element: <AllPosts /> },
      { path: "/post", element: <PostView /> },
      { path: "/commented-post", element: <PostView /> },
      { path: "/replied-post", element: <PostView /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
