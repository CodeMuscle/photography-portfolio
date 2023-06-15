import React from 'react';

import {
  ImFacebook,
  ImTwitter,
  ImPinterest,
  ImInstagram,
} from 'react-icons/im';

const Socials = () => {
  return (
  
    <div className="hidden xl:flex ml-24">
      <ul className="flex flex-row gap-x-4">
        <li>
          <a href="www.facebook.com" target="_blank">
            <ImFacebook />
          </a>
        </li>
        <li>
          <a href="www.instagram.com" target="_blank">
            <ImInstagram />
          </a>
        </li>
        <li>
          <a href="www.pinterest.com" target="_blank">
            <ImPinterest />
          </a>
        </li>
        <li>
          <a href="www.twitter.com" target="_blank">
            <ImTwitter />
          </a>
        </li>
      </ul>
    </div>
  
  )
};

export default Socials;
