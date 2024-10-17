import React from 'react';
import { SocialIcon } from 'react-social-icons'

interface FooterProps {
  isFolioPage: boolean;
}

const Footer: React.FC<FooterProps> = ({ isFolioPage }) => {
  const currentYear = new Date().getFullYear();

  return (
    <div>

      {isFolioPage ? (
        <div className="backBar">
          <div><a href="/"><span>&#8249;</span> Back to All</a></div>
        </div>
      ) : (
        <div></div>
      )}

      <footer>
        <SocialIcon url="https://www.instagram.com/neeyoll/" />
        <SocialIcon url="https://www.linkedin.com/in/neillharmer/" />
        <SocialIcon url="https://dribbble.com/neillharmer" />
        <SocialIcon url="mailto:neill.harmer@gmail.com" />
        <p>&copy; 2001 - {currentYear} Neill Harmer</p>
      </footer>
    </div>
  );
};

export default Footer;