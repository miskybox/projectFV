// Header.jsx
import React from "react";
import { useAuth } from "../context/UseAuth";
import Navbar from './pages/home/NavBar';
import WelcomeSection from './pages/home/WelcomeSection';
import Register from './Register';
import Weather from './Weather';
import { app, auth } from "../firebase.config";
import TripPlanner from './pages/TripPlanner';
import Forum from './Forum';
import FooterSection from './footer/FooterSection';

function Header() {
  const userData = useAuth();

  return (
    <>
      <div className="relative bg-blue-500" id="/">
        <div className="flex overflow-hidden relative flex-col pt-10 w-full text-white min-h-[942px] max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets%2F8f1c7c37acce45c38ac8c286ff26c5c3%2Ff452fecf884249e1b9495ecc53de2bdc"
            className="object-cover absolute inset-0 w-full h-full"
            alt="Background"
          />
          <div className="absolute top-0 left-0 mt-5 ml-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets%2F8f1c7c37acce45c38ac8c286ff26c5c3%2F6722e778efaa4670b678cfc5834d64ab"
              className="w-64 h-auto mb-10"
              alt="Logo"
            />
            <Weather className="iconWeather temp" />
          </div>
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
            <Navbar />
          </div>
          <div className="absolute top-0 right-0">
            <Register className="registro" />
          </div>
          <div className="absolute flex-col items-center justify-center px-16 py-12 mt-56 w-full bg-black bg-opacity-0 leading-[150%] max-md:px-6 max-md:mt-10 max-md:max-w-full">
            <div className=" flex-col items-center justify-center h-full">
              <div className="scale-90">
                <WelcomeSection />
              </div>
            </div>
            <div className="mt-auto">
              <TripPlanner />
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <section>
        <Forum />
      </section>
      <section>
        <FooterSection />
      </section>
    </>
  );
}

export default Header;
