import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import SignupPage from "./components/SignupPage";
import Login from "./components/Login";
import Reset from "./components/Reset";
import OTP from "./components/OTP";
import UpdatePassword from "./components/UpdatePassword";
import AccountCreated from "./components/AccountCreated";
import CreatePost from "./components/Createpost";
import AllPosts from "./components/AllPosts";
import PostView from "./components/PostView";
import ResetOTP from "./components/ResetOTP";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      { index: true, element: <Home /> },
      { path: "/signup", element: <SignupPage /> },
      { path: "/login", element: <Login /> },
      { path: "/reset", element: <Reset /> },
      { path: "/reset-otp", element: <ResetOTP /> },
      { path: "/update-password", element: <UpdatePassword /> },
      { path: "/otp", element: <OTP /> },
      { path: "/account-created", element: <AccountCreated /> },
      { path: "/create-post", element: <CreatePost /> },
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
