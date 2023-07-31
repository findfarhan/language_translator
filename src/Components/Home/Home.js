import React from 'react';
import './Home.css';
import { chooseUs } from '../Data/CompanyData';
import BuyNow from '../BuyNow';
// import group1 from '../../assets/images/group1.png';
import Client from '../Client/Client';
import OurProduct from './OurProduct';
import Custom from './Custom';
import Carousel from './Carousel';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <main className="pb-5">
        <Carousel />
        <div className="container pt-4 pb-4">
          <div className="row shop-by-size-main-container">
            <h1 className="pb-md-5 py-4 small-screen">
              {t('Shop our products')}
            </h1>

            <p className="pb-3 text-center mx-auto ">
              {t('loremIps')} <br /> {t('incididunt')}
            </p>

            <h3 className="home-plate pb-4">{t('Plates')}</h3>
            <BuyNow />
            <h3 className="home-plate pb-4">{t('Bowls')}</h3>
            <BuyNow />
            <h3 className="home-plate pb-4">{t('Cups')}</h3>
            <BuyNow />
          </div>
          <div className="row">
            <div className="col text-center">
              <button className="shop-size-container-btn">
                {t('SEE ALL PRODUCTS')}
              </button>
            </div>
          </div>
        </div>
        <OurProduct />
        <Custom />
        <div className="container-fluid" style={{ backgroundColor: '#E1E2DA' }}>
          <div className="row ">
            <div className="col-12 why-choose-h-p_container pb-3">
              <h1 className="pt-md-5 pb-md-4 pb-3 pt-5 d-none d-md-block">
                {t('Why Us?')}
              </h1>
              <h1 className=" pb-3 pt-5  d-md-none">
                {t('Why Our Products?')}
              </h1>
              <p className="container mx-auto">
                {t('loremIps')} <br />
                {t('incididunt')}
              </p>
            </div>

            <div className="col-xl-11 pt-4 why-choose-card-container">
              {chooseUs.map((chooseUs) => (
                <div className="why-choose-card" key={chooseUs.id}>
                  <img className="img-fluid pt-4" src={chooseUs.img}></img>
                  <h4 className="word-wrap1">{t(chooseUs.name)}</h4>
                  <p>{t(chooseUs.paragraph)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          className="container-fluid px-md-5"
          style={{
            marginBottom: '10px',
            paddingBottom: '80px ',
            overflowX: 'hidden',
          }}
        >
          <Client />
        </div>
      </main>
    </>
  );
};

export default Home;
