import { Route, Routes } from "react-router-dom";
import App from "./App";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import HomeLayout from "./layouts/homeLayout";
import MainLayout from "./layouts/mainLayout";
import HomePage from "./pages/HomePage";
import UserContextProvider from "./context/UserContext";
import Payment from "./pages/Payment";

export default function routes() {
  return (
    <>
      <UserContextProvider>
        <Routes>
          <Route element={<HomeLayout />}>
            <Route path="/" element={<App />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/register" element={<SignUp />} />
            <Route path="/homepage" element={<HomePage />} />
            <Route path="/payment" element={<Payment />} />
          </Route>
          {/* <Route element={<MainLayout />}></Route> */}
        </Routes>
      </UserContextProvider>
    </>
  );
}
