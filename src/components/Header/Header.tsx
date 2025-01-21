import React from 'react';

interface HeaderProps {
  isFolioPage: boolean;
}

const Header: React.FC<HeaderProps> = ({ isFolioPage }) => {
  return (
    <div>
      <header>
          <div>
            <h1><a href="/" title="Neill Harmer - Owner and Founder of Rudder.Digital | Nationally ranked Strongman | Private pilot">N</a></h1>
            <p>I'm <a href="https://www.linkedin.com/in/neillharmer/" target="_blank" rel="noreferrer">Neill Harmer</a>, <strong>owner and founder</strong> of <a href="https://www.rudder.digital">Rudder.Digital</a>, with a track record of improving site performance and efficiency through innovative design thinking and technical skills. I am passionate about creating seamless and intuitive user experiences that drive success. I have a strong foundation in both design and development, and am excited to bring my skills and experience to advancing innovative projects.</p>
          </div>
      </header>
      {isFolioPage ? (
        <div className="backBar">
          <div><a href="/"><span>&#8249;</span> Back to All</a></div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Header;