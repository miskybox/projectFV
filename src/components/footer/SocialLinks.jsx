// SocialLinks.jsx
import React from 'react';

const SocialLinks = () => {
 return (
    <div className="flex flex-col w-[34%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow text-xl font-medium text-teal-500 uppercase max-md:mt-10">
        <div>
          <p>
            <span className="text-base">Follow us on</span>
          </p>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/bddaa16db750a169d526caa8f5fdbfce516fbf1fe9309e15d7d232447c9f75fd?apiKey=8f1c7c37acce45c38ac8c286ff26c5c3&"
          className="mt-3.5 max-w-full aspect-[5.56] w-[132px]"
        />
      </div>
    </div>
 );
};

export default SocialLinks;
