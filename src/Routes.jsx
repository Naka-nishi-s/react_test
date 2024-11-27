import { Route, Routes } from "react-router-dom";
import Collection from "./collection.jsx";
import Profile from "./profile.jsx";
import Top from "./top.jsx";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Top />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/collection" element={<Collection />} />
    </Routes>
  );
};
