import React from 'react';
import { useNavigate } from 'react-router-dom';
import vehicleReport from '../../assets/wgl/look-report.png';
import mediaManager from '../../assets/lightcms-mediamanager.png';
import storeCheckout from '../../assets/lightcms-checkout.png';
import sourceEditor from '../../assets/sourceeditor.png';
import laGree from '../../assets/lagree.jpg';
import supportPage from '../../assets/support.jpg';
import shutTheBox from '../../assets/shutthebox.png';
import dashboard from '../../assets/dashboard.jpg';
import element from '../../assets/lcms-element.jpg';
import suiteCommerce from '../../assets/suitecommerce.jpg';
import jasonTheBarber from '../../assets/jasonthebarber.png';
import lightCMS from '../../assets/lightcms.jpg';
import porfolioData from '../../data/portfolio.json'
import springShirt from '../../assets/since1999.png'

interface Captions {
  shortCaption?: string;
  longCaption?: string;
}

interface FolioProps {
  className: string;
  title: string;
  captions: Captions;
  image: string;
  summaryTags: string[];
  learnMore: boolean;
  webLink: string;
  onClick: React.MouseEventHandler<HTMLElement>;
}

const images: { [key: string]: string } = {
  vehicleReport,
  mediaManager,
  storeCheckout,
  sourceEditor,
  laGree,
  supportPage,
  dashboard,
  element,
  lightCMS,
  shutTheBox,
  suiteCommerce, 
  springShirt,
  jasonTheBarber
};

const portfolio = porfolioData.map((item) => ({
  ...item,
  image: images[item.image]
}));

const Folio: React.FC<FolioProps> = ({ 
  className, 
  title, 
  captions, 
  image, 
  learnMore,
  webLink,
  summaryTags, 
  onClick }) => (
  <article className={className}>
    <div>
      <h2>{title}</h2>
      <figcaption>
        {captions.shortCaption} 
        {webLink ? (        
          <>&nbsp; Visit <a href="http://www.shutthebox.fun">www.shutthebox.fun</a> and give it your best shot!</>
        ) : (
          <></>
        )}
      </figcaption>
      {learnMore ? (
        <figure className="folioList" onClick={onClick}>
          <button>See Larger</button>
          <img src={image} alt={title} />
        </figure>
      ) : (
        <figure>
          {webLink ? (  
            <a href="http://www.shutthebox.fun" className='img'><img src={image} alt={title} /></a>
          ) : (
            <img src={image} alt={title} />
          )}
        </figure>
      )}      

      <summary>
        {summaryTags.map((tag, index) => (
          <span key={index}>{tag}</span>
        ))}
      </summary>
    </div>
  </article>
);

const FolioList: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = (id: string) => {
    navigate(`/portfolio/${id}`);
  };

  return (
    <div>
      {portfolio.map((article, index) => (
        <Folio
          key={index}
          className={article.className}
          title={article.title}
          captions={article.captions}
          image={article.image}
          webLink={article.webLink || ""}
          summaryTags={article.summaryTags}
          learnMore={article.learnMore || false}
          onClick={() => handleClick(article.id)}
        />
      ))}
    </div>
  );
};

export default FolioList;
