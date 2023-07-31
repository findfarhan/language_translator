import React from 'react';
import './BuyNow.css';
import { products } from './Data/BuyNowData';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const BuyNow = () => {
  const { t } = useTranslation();

  let navigate = useNavigate();
  const handleButton = () => {
    navigate('/product');
    window.scrollTo(0, 0);
  };
  return (
    <>
      <div className="col-xl-12 shop-by-size-container">
        {products.map((product) => (
          <div className="shopCard shopcard1" key={product.id}>
            <img src={product.img} className="img-fluid"></img>
            <h4 className=" pb-2 ">{t(product.name)}</h4>
            <button onClick={handleButton}>{t(product.btn)}</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default BuyNow;
