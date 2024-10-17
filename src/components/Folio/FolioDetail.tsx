import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import porfolioData from '../../data/portfolio.json'
import vehicleReport from '../../assets/wgl/look-report.png';
import mediaManager from '../../assets/lightcms-mediamanager.png';
import storeCheckout from '../../assets/lightcms-checkout.png';
import sourceEditor from '../../assets/sourceeditor.png';
import laGree from '../../assets/lagree.jpg';
import supportPage from '../../assets/support.jpg';
import dashboard from '../../assets/dashboard.jpg';
import element from '../../assets/lcms-element.jpg';
import suiteCommerce from '../../assets/suitecommerce.jpg';
import lightCMS from '../../assets/lightcms.jpg';
import springShirt from '../../assets/since1999.png'

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
  suiteCommerce, 
  springShirt
};

const portfolio = porfolioData.map((item) => ({
  ...item,
}));

const FolioDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const article = portfolio.find((article) => article.id === String(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!article) {
    return (
      <article className="folio-detail">
        <div>
          <h2>Welp!</h2>
          As much as I'd like to think I can do everything, the portfolio item you're looking for does not exist in my list of things I have done.
        </div>
      </article>
    );
  }

  const specificClassName = `${article.className.split(' ').slice(0, 2).join(' ')} folio-detail`;

  return (
    <article className={specificClassName}>
      <div>
        <h2>{article.title}</h2>
        <figcaption>{article.captions?.shortCaption}</figcaption>
        <figure>
          <img src={images[article.image]} alt={article.title} />
        </figure>
        <summary>
          {article.summaryTags.map((tag, index) => (
            <span key={index}>{tag}</span>
          ))}
        </summary>
      </div>
    </article>
  );
};


export default FolioDetail;
