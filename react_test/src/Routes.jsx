import { Routes, Route } from "react-router-dom";
import Top from "./top.jsx";
import Profile from "./profile.jsx";

export const AppRoutes = () => {
   return (
       <Routes>
           <Route path="/" element={<Top />} />
           <Route path="/profile" element={<Profile />} />
       </Routes>
   )
}
