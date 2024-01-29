import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  getAuth,
  signOut,
  onAuthStateChanged
} from "firebase/auth";

const DashboardBanner = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "https://image.tmdb.org/t/p/original//hVMoqvXs5j9ffun56tZ5YhliSD9.jpg",
    "https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg",
    "https://image.tmdb.org/t/p/original//hVMoqvXs5j9ffun56tZ5YhliSD9.jpg",
    "https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg",
  ];
  const titles = ["Ginny & Georgia", "Dummy 1", "Dummy 2", "2 States"];
  const description = [
    "Angsty and awkward fifteen year old Ginny Miller often feels more mature than her thirty year old mother, the irresistible and dynamic Georgia Miller...",
    "Dummy desc 1",
    "Dummy desc 2",
    "Dummy desc 3",
  ];

  const previous = () => {
    setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1);
  };

  const next = () => {
    setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1);
  };

  const handleLogout = ()=>{
    signOut(auth);
    navigate('/login');
  };
  useEffect(()=>{
    onAuthStateChanged(auth,(userData)=>{
      console.log(userData);
    })
  },[])
  return (
    <div className="banner-container">
    <div
      className="banner"
      style={{ backgroundImage: `url(${images[currentImage]})` }}
    >
      <div className="signOut"> 
      <button className="btn btn-danger" onClick={handleLogout}>Logouut</button>
      </div>
      <div className="banner-contents">
        <h1 className="banner-title">{titles[currentImage]}</h1>
        <div className="banner-buttons">
          <button className="banner-btn">Play</button>
          <button className="banner-btn">My List</button>
        </div>
        <h1 className="banner-description">{description[currentImage]}</h1>
      </div>
      <div className="banner-fadeBottom"></div>
     
    </div>
     <div className="arrow">
     <div className="left-arrow" onClick={previous}>
     ⬅️
     </div>
     <div className="right-arrow" onClick={next}>
     ➡️
     </div>
   </div>
    </div>
  );
};

export default DashboardBanner;
