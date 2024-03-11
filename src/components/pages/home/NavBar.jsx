// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="flex gap-5 justify-between p-2.5 text-lg font-medium max-md:flex-wrap max-md:max-w-full" id="navbar">
      <div className="grow text-xl font-semibold whitespace-nowrap">
        <Link to="/forum" className="text-white">
          Forum
        </Link>
      </div>
      <div className="text-xl font-semibold">
        <Link to="/blog" className="text-white">
          Blog
        </Link>
      </div>
      <div className="flex-auto text-xl font-semibold">
        <Link to="/trip-planner" className="text-white">
          Plan your Trip
        </Link>
      </div>
      <section className="box-border flex relative flex-col shrink-0 justify-end p-5">
      </section>
    </div>
  );
};

export default Navbar;

