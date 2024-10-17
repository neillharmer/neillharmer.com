import React from 'react';

interface HeaderProps {
  isFolioPage: boolean;
}

const Header: React.FC<HeaderProps> = ({ isFolioPage }) => {
  return (
    <div>
      <header>
          <div>
            <h1><a href="/" title="Neill Harmer - Senior UX/UI Engineer">N</a></h1>
            <p>I'm <a href="https://www.linkedin.com/in/neillharmer/" target="_blank" rel="noreferrer">Neill Harmer</a>, an <strong>Engineering Manager</strong> with a track record of improving site performance and team efficiency through innovative design thinking and technical skills. I am passionate about creating seamless and intuitive user experiences that drive business success. I have a strong foundation in both design and development, and am excited to bring my skills and experience to a company where I can contribute to advancing innovative projects.</p>
            {/* <p>I'm <a href="/about/">Neill Harmer</a>, a self-taught <strong>UX, UI, and frontend engineer</strong> with <a href="https://www.linkedin.com/in/neillharmer/" target="_blank" rel="noreferrer">over two decades of experience</a>, I am passionate about creating seamless and intuitive user experiences that drive business success. I have strong foundation in both design and development, and am excited to bring my skills and experience to a company where I can contribute to advancing innovative projects.</p> */}
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