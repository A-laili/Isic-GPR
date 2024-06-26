import React, { useContext } from "react";
import MainHeader from "../layout/MainHeader";
import HotelService from "../common/HotelService";
import Parallax from "../common/Parallax";
import RoomCarousel from "../common/RoomCarousel";
import RoomSearch from "../common/RoomSearch";
import { useLocation } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";  // Assurez-vous d'utiliser ce hook

const Home = () => {
  const location = useLocation();
  const { currentUser } = useAuth();  // Utilisez le hook useAuth pour accéder à l'utilisateur actuel

  const message = location.state && location.state.message;

  return (
    <section>
      {message && <p className="text-warning px-5">{message}</p>}
      {currentUser && (
        <h6 className="text-success text-center"> Bienvenue {currentUser}</h6>
      )}
      <MainHeader />
      <div className="container">
        
        
        <Parallax />
        
        <HotelService />
        
      </div>
    </section>
  );
};

export default Home;
