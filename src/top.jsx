import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import Footer from "./Footer";
import image_top from "/images/image_top.png";
import image_top_title from "/images/image_top_title.png";

function Top() {
  console.log("Nice J!");
  const navigate = useNavigate();
  const goToTop = () => {
    navigate("/");
  };
  const goToProfile = () => {
    navigate("/profile");
  };
  const goToCollection = () => {
    navigate("/collection");
  };
  return (
    <>
      <div className="parent-container">
        <div className="button-container">
          <button onClick={goToTop}>TOP</button>
          <button onClick={goToProfile}>プロフィール</button>
          <button onClick={goToCollection}>作品一覧</button>
        </div>
        <div className="top-container">
          <img className="top-title" src={image_top_title} />
          <img className="top-image" src={image_top} />
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Top;
