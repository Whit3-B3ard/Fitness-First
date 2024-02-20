import { Route, Routes } from "react-router-dom";
import App from "./App";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import HomeLayout from "./layouts/homeLayout";
import MainLayout from "./layouts/mainLayout";
import HomePage from "./pages/HomePage";
import UserContextProvider from "./context/UserContext";

export default function routes() {
  return (
    <>
      <UserContextProvider>
        <Routes>
          <Route element={<HomeLayout />}>
          <Route path="/" element={<App />} />
          </Route>
          <Route element={<MainLayout />}>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/homepage" element={<HomePage />} />
          </Route>
        </Routes>
        </UserContextProvider>
    </>
  );
}
